import { api } from './axiosInstance';

export interface NotificationItem {
  id: string;
  type:
    | 'DISCOUNT_APPROVAL'
    | 'DISCOUNT_RESPONSE'
    | 'LOW_STOCK'
    | 'OUT_OF_STOCK'
    | 'EXPIRING_SOON'
    | 'EXPIRED'
    | 'DEMAND_FORECAST'
    | 'STOCK_VELOCITY'
    | 'OVERSTOCK'
    | 'COMBO_SUGGESTION'
    | 'SYSTEM';
  severity: 'CRITICAL' | 'WARNING' | 'INFO';
  title: string;
  message: string;
  sku?: string;
  suggestedAction?: string;
  metadata?: any;
  targetRole?: string;
  createdAt: string;
  updatedAt: string;
  product?: {
    sku: string;
    name: string;
    imageUrl?: string;
    currentStock: number;
    reorderLevel: number;
    sellingPrice: number;
  };
  userStates?: {
    isRead: boolean;
    isDismissed: boolean;
    readAt?: string | null;
    dismissedAt?: string | null;
  }[];
}

export const NotificationService = {
  getNotifications: async (includeDismissed = false) => {
    const response = await api.get(`/notifications?includeDismissed=${includeDismissed}`);
    return response.data;
  },

  markRead: async (id: string) => {
    const response = await api.patch(`/notifications/${id}/read`);
    return response.data;
  },

  dismiss: async (id: string) => {
    const response = await api.patch(`/notifications/${id}/dismiss`);
    return response.data;
  },

  createNotification: async (data: any) => {
    const response = await api.post('/notifications', data);
    return response.data;
  }
};
