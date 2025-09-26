import { ref, computed } from 'vue';
import type { ThemeConfig, ThemeName } from '@/types/theme';

// 主题配置
const themes: Record<ThemeName, ThemeConfig> = {
  light: {
    name: 'light',
    displayName: '浅色主题',
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    cssVars: {
      '--primary-50': '#eff6ff',
      '--primary-100': '#dbeafe',
      '--primary-200': '#bfdbfe',
      '--primary-300': '#93c5fd',
      '--primary-400': '#60a5fa',
      '--primary-500': '#3b82f6',
      '--primary-600': '#2563eb',
      '--primary-700': '#1d4ed8',
      '--primary-800': '#1e40af',
      '--primary-900': '#1e3a8a',
    }
  },
  dark: {
    name: 'dark',
    displayName: '深色主题',
    colors: {
      primary: '#60a5fa',
      secondary: '#94a3b8',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      border: '#334155',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
    },
    cssVars: {
      '--primary-50': '#1e3a8a',
      '--primary-100': '#1e40af',
      '--primary-200': '#1d4ed8',
      '--primary-300': '#2563eb',
      '--primary-400': '#3b82f6',
      '--primary-500': '#60a5fa',
      '--primary-600': '#93c5fd',
      '--primary-700': '#bfdbfe',
      '--primary-800': '#dbeafe',
      '--primary-900': '#eff6ff',
    }
  }
};

// 扩展彩色主题
Object.assign(themes, {
  blue: {
    name: 'blue',
    displayName: '蓝色主题',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      background: '#f8fbff',
      surface: '#f1f5ff',
      text: '#0f172a',
      textSecondary: '#475569',
      border: '#dbeafe',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    cssVars: {
      '--primary-50': '#eff6ff',
      '--primary-100': '#dbeafe',
      '--primary-200': '#bfdbfe',
      '--primary-300': '#93c5fd',
      '--primary-400': '#60a5fa',
      '--primary-500': '#3b82f6',
      '--primary-600': '#2563eb',
      '--primary-700': '#1d4ed8',
      '--primary-800': '#1e40af',
      '--primary-900': '#1e3a8a',
    }
  },
  green: {
    name: 'green',
    displayName: '绿色主题',
    colors: {
      primary: '#16a34a',
      secondary: '#64748b',
      background: '#f7fff9',
      surface: '#effcf3',
      text: '#0f172a',
      textSecondary: '#475569',
      border: '#d1fae5',
      success: '#16a34a',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    cssVars: {
      '--primary-50': '#f0fdf4',
      '--primary-100': '#dcfce7',
      '--primary-200': '#bbf7d0',
      '--primary-300': '#86efac',
      '--primary-400': '#4ade80',
      '--primary-500': '#22c55e',
      '--primary-600': '#16a34a',
      '--primary-700': '#15803d',
      '--primary-800': '#166534',
      '--primary-900': '#14532d',
    }
  },
  purple: {
    name: 'purple',
    displayName: '紫色主题',
    colors: {
      primary: '#7c3aed',
      secondary: '#64748b',
      background: '#fbf7ff',
      surface: '#f6efff',
      text: '#0f172a',
      textSecondary: '#475569',
      border: '#e9d5ff',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    cssVars: {
      '--primary-50': '#faf5ff',
      '--primary-100': '#f3e8ff',
      '--primary-200': '#e9d5ff',
      '--primary-300': '#d8b4fe',
      '--primary-400': '#c084fc',
      '--primary-500': '#a855f7',
      '--primary-600': '#9333ea',
      '--primary-700': '#7e22ce',
      '--primary-800': '#6b21a8',
      '--primary-900': '#581c87',
    }
  }
} satisfies Partial<Record<ThemeName, ThemeConfig>>);

// 当前主题状态
const currentTheme = ref<ThemeName>('light');

// 主题管理
export function useTheme() {
  // 获取当前主题配置
  const theme = computed(() => themes[currentTheme.value]);
  
  // 切换主题
  function setTheme(themeName: ThemeName) {
    currentTheme.value = themeName;
    applyTheme(themeName);
    localStorage.setItem('theme', themeName);
  }
  
  // 应用主题到DOM
  function applyTheme(themeName: ThemeName) {
    const theme = themes[themeName];
    const root = document.documentElement;
    
    // 应用CSS变量
    Object.entries(theme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    // 应用基础颜色
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    
    // 设置主题类名
    root.className = root.className.replace(/theme-\w+/g, '');
    root.classList.add(`theme-${themeName}`);
  }
  
  // 初始化主题
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }
  
  return {
    currentTheme: computed(() => currentTheme.value),
    theme,
    themes: Object.values(themes),
    setTheme,
    initTheme
  };
}
