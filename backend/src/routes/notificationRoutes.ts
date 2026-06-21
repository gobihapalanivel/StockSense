import { Router } from 'express';
import {
  getNotifications,
  markNotificationRead,
  dismissNotification,
  createNotificationApi
} from '../controllers/notificationController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = Router();

// User notification endpoints
router.get('/', authenticate, getNotifications);
router.patch('/:id/read', authenticate, markNotificationRead);
router.patch('/:id/dismiss', authenticate, dismissNotification);

// Public / API triggers (for FastAPI AI service alerts)
router.post('/', createNotificationApi);

export default router;
