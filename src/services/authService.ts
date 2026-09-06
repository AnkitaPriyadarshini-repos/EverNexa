import { UserProfile } from '../types/appStore';

const USER_KEY = '24s_user_session_v1';

export const getCurrentUser = (): UserProfile | null => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
};

export const loginUser = async (email: string, name?: string): Promise<UserProfile> => {
  const user: UserProfile = {
    id: `usr-${Date.now()}`,
    email,
    name: name || email.split('@')[0],
    role: email.includes('admin') ? 'admin' : 'user'
  };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event('auth-changed'));
  return user;
};

export const logoutUser = async (): Promise<void> => {
  localStorage.removeItem(USER_KEY);
  window.dispatchEvent(new Event('auth-changed'));
};
