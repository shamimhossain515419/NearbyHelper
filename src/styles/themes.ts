import { Theme } from '../types/theme.types';

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
     // Semantic tokens
    background: '#FFFFFF',        // main background
    foreground: '#F0F0F0',        // cards / containers
    textPrimary: '#1A1A1A',       // main text
    textSecondary: '#666666',     // secondary text
    border: '#E5E5E5',            // default borders
    success: '#34C759',           // success messages
    error: '#FF3B30',             // error messages
    warning: '#FF9500',           // warnings
    info: '#5AC8FA',              // informational messages

    // Optional extra tokens
    accent: '#6DB5AE',
    primary: '#5B9A95',
    primaryHover: '#4A7E7A',
    shadow: 'rgba(0, 0, 0, 0.08)',
    link: '#5B9A95',
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    // Semantic tokens
    background: '#000000',         // main background
    foreground: '#1C1C1E',         // cards / containers
    textPrimary: '#FFFFFF',        // main text
    textSecondary: '#EBEBF5',      // secondary text
    border: '#38383A',             // default borders
    success: '#32D74B',            // success messages
    error: '#FF453A',              // error messages
    warning: '#FF9F0A',            // warnings
    info: '#64D2FF',               // informational messages

    // Optional extra tokens
    accent: '#5B9A95',
    primary: '#5B8A8E',
    primaryHover: '#7DC5BE',
    shadow: 'rgba(0, 0, 0, 0.4)',
    link: '#5B8A8E',
  },
};