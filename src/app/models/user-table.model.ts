export type LoadState = 'loading' | 'error' | 'ready';

export type UserStatus = 'active' | 'invited' | 'suspended';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: UserStatus;
  joined: string;
}

export const STATUS_VARIANT: Record<UserStatus, 'success' | 'neutral' | 'danger'> = {
  active: 'success',
  invited: 'neutral',
  suspended: 'danger',
};
