import { Theme } from '../types/theme.types';

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    // Brand Colors (Teal/Cyan based on your design)
    brand: {
      primary: '#5B9A95',      // Main teal color (service cards, banner)
      primaryHover: '#4A7E7A',
      primaryLight: '#5B8A8E',  // Light teal background
      accent: '#6DB5AE',        // Lighter teal
    },

    // Interactive Elements
    action: {
      primary: '#5B9A95',
      primaryHover: '#4A7E7A',
      primaryActive: '#3D6A66',
      secondary: '#F5F5F5',
      secondaryHover: '#EBEBEB',
    },

    // Feedback/Status
    status: {
      success: '#34C759',
      error: '#FF3B30',
      warning: '#FF9500',
      info: '#5AC8FA',
    },

    // Backgrounds
    background: {
      primary: '#FFFFFF',  
      secondary: '#5B8A8E',    
      tertiary: '#eaf2f2',      
      teal: '#E8F4F3',        
      overlay: 'rgba(0,0,0,0.5)',
    },

    // Surfaces
    surface: {
      card: '#FFFFFF',
      elevated: '#FFFFFF',
      input: '#F5F5F5',
      banner: '#6DB5AE',        // Verified workers banner
    },

    // Text Hierarchy
    text: {
      primary: '#1A1A1A',       // Headings (Services, Nearby Helpers)
      secondary: '#666666',      // Supporting text (Professional Cleaner)
      tertiary: '#999999',       // Meta info (distance)
      onTeal: '#FFFFFF',        // Text on teal background
      placeholder: '#AAAAAA',   // Search placeholder
      link: '#5B9A95',
    },

    // Icons
    icon: {
      primary: '#5B9A95',       // Service icons
      secondary: '#666666',
      tertiary: '#999999',
      onTeal: '#FFFFFF',
    },

    // Borders & Dividers
    border: {
      light: '#F0F0F0',
      default: '#E5E5E5',
      strong: '#CCCCCC',
      focus: '#5B9A95',
    },

    // Shadows
    shadow: {
      sm: 'rgba(0, 0, 0, 0.04)',
      md: 'rgba(0, 0, 0, 0.08)',
      lg: 'rgba(0, 0, 0, 0.12)',
      card: 'rgba(0, 0, 0, 0.06)',
    },

    // Rating/Star
    rating: {
      active: '#FFB800',        // Star color
      inactive: '#E5E5E5',
    },

    // Bottom Navigation
    navigation: {
      active: '#5B9A95',
      inactive: '#999999',
      background: '#FFFFFF',
    },
  },
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    // Brand Colors
    brand: {
      primary: '#5B8A8E',
      primaryHover: '#7DC5BE',
      primaryLight: '#2E7D7D',
      accent: '#5B9A95',
    },

    // Interactive Elements
    action: {
      primary: '#5B8A8E',
      primaryHover: '#7DC5BE',
      primaryActive: '#8DD5CE',
      secondary: '#2C2C2E',
      secondaryHover: '#3A3A3C',
    },

    // Feedback/Status
    status: {
      success: '#32D74B',
      error: '#FF453A',
      warning: '#FF9F0A',
      info: '#64D2FF',
    },

    // Backgrounds
    background: {
      primary: '#000000',
      secondary: '#1C1C1E',
      tertiary: '#2C2C2E',
      teal: '#1E3837',
      overlay: 'rgba(0,0,0,0.7)',
    },

    // Surfaces
    surface: {
      card: '#1C1C1E',
      elevated: '#2C2C2E',
      input: '#2C2C2E',
      banner: '#2D5A55',
    },

    // Text Hierarchy
    text: {
      primary: '#FFFFFF',
      secondary: '#EBEBF5',
      tertiary: '#AEAEB2',
      onTeal: '#FFFFFF',
      placeholder: '#636366',
      link: '#5B8A8E',
    },

    // Icons
    icon: {
      primary: '#5B8A8E',
      secondary: '#EBEBF5',
      tertiary: '#AEAEB2',
      onTeal: '#FFFFFF',
    },

    // Borders & Dividers
    border: {
      light: '#2C2C2E',
      default: '#38383A',
      strong: '#48484A',
      focus: '#5B8A8E',
    },

    // Shadows
    shadow: {
      sm: 'rgba(0, 0, 0, 0.3)',
      md: 'rgba(0, 0, 0, 0.4)',
      lg: 'rgba(0, 0, 0, 0.5)',
      card: 'rgba(0, 0, 0, 0.35)',
    },

    // Rating/Star
    rating: {
      active: '#FFD60A',
      inactive: '#48484A',
    },

    // Bottom Navigation
    navigation: {
      active: '#5B8A8E',
      inactive: '#636366',
      background: '#1C1C1E',
    },
  },
};