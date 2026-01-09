export interface ThemeColors {
    background:string,       
    foreground: string,       
    textPrimary: string,     
    textSecondary:string,     
    border: string,          
    success: string,        
    error: string,            
    warning: string,           
    info: string,             

    // Optional extra tokens
    accent: string,
    primary: string,
    primaryHover:string,
    shadow: string,
    link: string,
}

export interface Theme {
  mode: 'light' | 'dark';
  colors: ThemeColors;
}