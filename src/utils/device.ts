import { ref, computed, onMounted, onUnmounted } from 'vue';

// 设备检测状态 - 默认桌面端
const isMobile = ref(false);
const isTablet = ref(false);
const isDesktop = ref(true); // 默认桌面端

// 窗口尺寸状态
const windowWidth = ref(1024); // 默认桌面端宽度
const windowHeight = ref(768); // 默认桌面端高度

// 检测设备类型（基于User Agent）
function detectDeviceType() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return { isMobile: false, isTablet: false, isDesktop: true };
  }

  const userAgent = navigator.userAgent.toLowerCase();
  
  // 移动设备检测 - 更精确的检测
  const mobileRegex = /android.*mobile|webos|iphone|ipod|blackberry|iemobile|opera mini|mobile safari|mobile firefox|mobile chrome/i;
  const isMobileDevice = mobileRegex.test(userAgent);
  
  // 平板设备检测
  const tabletRegex = /ipad|android(?!.*mobile)|kindle|silk|playbook|bb10/i;
  const isTabletDevice = tabletRegex.test(userAgent);
  
  // 桌面设备检测
  const isDesktopDevice = !isMobileDevice && !isTabletDevice;
  
  // 调试信息
  console.log('设备检测调试信息:', {
    userAgent: navigator.userAgent,
    isMobileDevice,
    isTabletDevice,
    isDesktopDevice,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  });
  
  return {
    isMobile: isMobileDevice,
    isTablet: isTabletDevice,
    isDesktop: isDesktopDevice
  };
}

// 更新设备检测 - 简化版，只根据窗口宽度判断
function updateDeviceDetection() {
  if (typeof window === 'undefined') return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  windowWidth.value = width;
  windowHeight.value = height;

  // 纯粹基于窗口宽度判断，简单可靠
  // 简化为两种模式：移动端和桌面端
  if (width < 768) {
    // 小屏幕 - 移动端
    isMobile.value = true;
    isTablet.value = false;
    isDesktop.value = false;
  } else {
    // 大屏幕 - 桌面端（包含平板）
    isMobile.value = false;
    isTablet.value = (width >= 768 && width < 1024); // 仅作为参考信息
    isDesktop.value = true;
  }

  console.log('设备判断结果:', {
    width,
    height,
    isMobile: isMobile.value,
    isTablet: isTablet.value,
    isDesktop: isDesktop.value
  });
}

// 监听窗口大小变化
function handleResize() {
  updateDeviceDetection();
}

// 设备检测 Hook
export function useDevice() {
  // 立即检测设备类型（如果是在客户端）
  if (typeof window !== 'undefined') {
    updateDeviceDetection();
  }

  onMounted(() => {
    updateDeviceDetection();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', handleResize);
    }
  });

  return {
    isMobile: computed(() => isMobile.value),
    isTablet: computed(() => isTablet.value),
    isDesktop: computed(() => isDesktop.value),
    windowWidth: computed(() => windowWidth.value),
    windowHeight: computed(() => windowHeight.value),
    // 便捷方法
    isMobileOrTablet: computed(() => isMobile.value || isTablet.value),
    isTouchDevice: computed(() => {
      if (typeof window === 'undefined') return false;
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }),
    // 设备信息
    deviceInfo: computed(() => {
      if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return { userAgent: '', platform: '', isTouch: false };
      }
      return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        maxTouchPoints: navigator.maxTouchPoints || 0
      };
    })
  };
}
