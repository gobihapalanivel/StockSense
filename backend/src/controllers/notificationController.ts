import { Response } from 'express';
import { AuthRequest } from '../middlewares/authMiddleware.js';
import { NotificationService } from '../services/notificationService.js';
import { NotificationType, NotificationSeverity, Role } from '@prisma/client';

// Get notifications for currently logged-in user
export const getNotifications = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const role = req.user?.role;
    const includeDismissed = req.query.includeDismissed === 'true';

    if (!userId || !role) {
      res.status(401).json({ success: false, message: 'Unauthorized. User session not found.' });
      return;
    }

    // Scan and generate stock alerts in background (non-blocking)
    NotificationService.scanAndGenerateStockAlerts().catch(err =>
      console.error('Error running background stock alert scan:', err)
    );

    const notifications = await NotificationService.getNotificationsForUser(userId, role, includeDismissed);
    res.status(200).json({ success: true, data: notifications });
  } catch (error: any) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
};

// Mark notification as read
export const markNotificationRead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const notificationId = req.params.id;

    if (!userId) {
      res.status(401).json({ success: false, message: 'Unauthorized.' });
      return;
    }

    await NotificationService.markAsRead(notificationId as string, userId);
    res.status(200).json({ success: true, message: 'Notification marked as read.' });
  } catch (error: any) {
    console.error('Error marking notification as read:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
};

// Dismiss notification (hide from bell dropdown)
export const dismissNotification = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const notificationId = req.params.id;

    if (!userId) {
      res.status(401).json({ success: false, message: 'Unauthorized.' });
      return;
    }

    await NotificationService.dismissNotification(notificationId as string, userId);
    res.status(200).json({ success: true, message: 'Notification dismissed.' });
  } catch (error: any) {
    console.error('Error dismissing notification:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
};

// Create a new notification (API Endpoint mainly for FastAPI AI Service to inject alerts)
export const createNotificationApi = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const {
      type,
      severity,
      title,
      message,
      sku,
      suggestedAction,
      metadata,
      targetRole
    } = req.body;

    if (!type || !title || !message) {
      res.status(400).json({ success: false, message: 'Type, title and message are required.' });
      return;
    }

    const notification = await NotificationService.createNotification({
      type: type as NotificationType,
      severity: severity as NotificationSeverity,
      title,
      message,
      sku,
      suggestedAction,
      metadata,
      targetRole: targetRole as Role
    });

    res.status(201).json({ success: true, data: notification });
  } catch (error: any) {
    console.error('Error creating API notification:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
};
