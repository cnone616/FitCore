/**
 * 根据设备类型动态加载组件
 * @param desktopPath 桌面端组件路径
 * @param mobilePath 移动端组件路径
 * @returns 动态导入函数
 */
export function createDeviceComponent(desktopPath: string, mobilePath?: string) {
  return () => {
    // 在客户端环境下检测设备类型
    if (typeof window !== 'undefined') {
      // 简单的移动端检测
      const isMobile = window.innerWidth < 768;

      if (isMobile && mobilePath) {
        // 移动端且有移动端专用组件
        return import(/* @vite-ignore */ mobilePath);
      }
    }

    // 默认加载桌面端组件
    return import(/* @vite-ignore */ desktopPath);
  };
}

/**
 * 创建移动端专用组件加载器
 * @param mobilePath 移动端组件路径
 * @param desktopPath 桌面端组件路径（可选）
 * @returns 动态导入函数
 */
export function createMobileComponent(mobilePath: string, desktopPath?: string) {
  return () => {
    // 在客户端环境下检测设备类型
    if (typeof window !== 'undefined') {
      // 简单的移动端检测
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // 移动端
        return import(/* @vite-ignore */ mobilePath);
      }
    }

    // 桌面端
    if (desktopPath) {
      return import(/* @vite-ignore */ desktopPath);
    }

    // 如果没有提供桌面端组件，默认加载移动端组件
    return import(/* @vite-ignore */ mobilePath);
  };
}