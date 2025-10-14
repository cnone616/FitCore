export type ThemeName = 'light' | 'dark' | 'blue' | 'green' | 'purple';

export interface ThemeConfig {
  name: ThemeName;
  displayName: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  cssVars: Record<string, string>;
}
