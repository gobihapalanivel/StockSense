import { Response } from 'express';
import { prisma } from '../config/prisma.js';
import { AuthRequest } from '../middlewares/authMiddleware.js';

export const createReportLog = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { name, category, format, status = 'Ready' } = req.body;
    if (!name || !category || !format) {
      res.status(400).json({ success: false, message: 'Name, category, and format are required.' });
      return;
    }

    const createdByRole = req.user?.role || 'ADMIN';
    const createdById   = req.user?.id   || null;

    const report = await prisma.generatedReport.create({
      data: {
        name,
        category,
        format,
        status,
        createdByRole,
        createdById,
      },
    });

    res.status(201).json({ success: true, data: report });
  } catch (error: any) {
    console.error('Error creating report log:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
};

export const getReportHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const role = req.user?.role;

    const reports = await prisma.generatedReport.findMany({
      where: { createdByRole: role },
      orderBy: { createdAt: 'desc' },
    });

    res.status(200).json({ success: true, data: reports });
  } catch (error: any) {
    console.error('Error fetching report history:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
};

export const clearReportHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const role = req.user?.role;

    await prisma.generatedReport.deleteMany({
      where: { createdByRole: role },
    });

    res.status(200).json({ success: true, message: 'Report history cleared successfully.' });
  } catch (error: any) {
    console.error('Error clearing report history:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
};
