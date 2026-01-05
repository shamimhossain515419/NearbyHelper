import { Theme } from '../types/theme.types';

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    brand: '#007AFF',
    brandDark: '#0056B3',
    error: '#FF3B30',
    warning: '#FF9500',
    success: '#34C759',
    info: '#5AC8FA',

    primary: '#007AFF',
    primaryHover: '#0051D5',
    secondary: '#5E5CE6',
    disabled: '#C7C7CC',

    background: '#FFFFFF',
    backgroundSecondary: '#F2F2F7',
    backgroundTertiary: '#FFFFFF',

    surface: '#FFFFFF',
    card: '#F9F9F9',

    text: '#000000',
    textSecondary: '#3C3C43',
    textTertiary: '#8E8E93',

    border: '#C6C6C8',
    divider: '#E5E5EA',

    shadow: 'rgba(0,0,0,0.1)',
    shadowDark: 'rgba(0,0,0,0.2)',
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    brand: '#0A84FF',
    brandDark: '#0056B3',
    error: '#FF453A',
    warning: '#FF9F0A',
    success: '#32D74B',
    info: '#64D2FF',

    primary: '#0A84FF',
    primaryHover: '#409CFF',
    secondary: '#5E5CE6',
    disabled: '#48484A',

    background: '#000000',
    backgroundSecondary: '#1C1C1E',
    backgroundTertiary: '#2C2C2E',

    surface: '#1C1C1E',
    card: '#2C2C2E',

    text: '#FFFFFF',
    textSecondary: '#EBEBF5',
    textTertiary: '#AEAEB2',

    border: '#38383A',
    divider: '#48484A',

    shadow: 'rgba(0,0,0,0.3)',
    shadowDark: 'rgba(0,0,0,0.5)',
  },
};
