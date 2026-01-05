export interface ThemeColors {
  brand: string;
  brandDark: string;
  error: string;
  warning: string;
  success: string;
  info: string;
  
  primary: string;
  primaryHover: string;
  secondary: string;
  disabled: string;
  
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  
  surface: string;
  card: string;
  
  text: string;
  textSecondary: string;
  textTertiary: string;
  
  border: string;
  divider: string;
  
  shadow: string;
  shadowDark: string;
}

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface BorderRadius {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  round: number;
}

export interface Theme {
  mode: 'light' | 'dark';
  colors: ThemeColors;

}
