import type { Property } from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

const resolveUrl = (path: string) => `${API_BASE_URL}${path}`;

const getAuthToken = () => {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem('premium_realestate_token');
};

export const setAuthToken = (token: string) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem('premium_realestate_token', token);
};

export const clearAuthToken = () => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem('premium_realestate_token');
};

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(resolveUrl(path), {
    ...options,
    headers,
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw body;
  }

  return body;
}

export async function fetchProperties(params: {
  region?: string;
  type?: string;
  status?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
} = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });

  const path = `/api/properties${query.toString() ? `?${query.toString()}` : ''}`;
  return request<Property[]>(path);
}

export async function fetchProperty(id: string) {
  return request<Property>(`/api/properties/${id}`);
}

export async function submitLead(data: { name: string; email: string; phone?: string; message: string; interestedIn?: string; propertyId?: string }) {
  return request('/api/leads', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function loginAdmin(credentials: { email: string; password: string }) {
  return request<{ token: string; user: { id: string; email: string; role: string; fullName?: string } }>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}

export async function fetchLeads() {
  return request<any[]>('/api/leads');
}

export async function fetchCurrentUser() {
  return request<{ user: { userId: string; email: string; role: string } }>('/api/auth/me');
}
