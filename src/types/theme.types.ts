export interface BrandColors {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  accent: string;
}

export interface ActionColors {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  secondary: string;
  secondaryHover: string;
}

export interface StatusColors {
  success: string;
  error: string;
  warning: string;
  info: string;
}

export interface BackgroundColors {
  primary: string;
  secondary: string;
  tertiary: string;
  teal: string;
  overlay: string;
}

export interface SurfaceColors {
  card: string;
  elevated: string;
  input: string;
  banner: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  tertiary: string;
  onTeal: string;
  placeholder: string;
  link: string;
}

export interface IconColors {
  primary: string;
  secondary: string;
  tertiary: string;
  onTeal: string;
}

export interface BorderColors {
  light: string;
  default: string;
  strong: string;
  focus: string;
}

export interface ShadowColors {
  sm: string;
  md: string;
  lg: string;
  card: string;
}

export interface RatingColors {
  active: string;
  inactive: string;
}

export interface NavigationColors {
  active: string;
  inactive: string;
  background: string;
}

export interface ThemeColors {
  brand: BrandColors;
  action: ActionColors;
  status: StatusColors;
  background: BackgroundColors;
  surface: SurfaceColors;
  text: TextColors;
  icon: IconColors;
  border: BorderColors;
  shadow: ShadowColors;
  rating: RatingColors;
  navigation: NavigationColors;
}

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface BorderRadius {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  round: number;
}

export interface Typography {
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  fontWeight: {
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

export interface Theme {
  mode: 'light' | 'dark';
  colors: ThemeColors;
  spacing?: Spacing;
  borderRadius?: BorderRadius;
  typography?: Typography;
}