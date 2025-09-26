import { ref } from 'vue';
import * as htmlToImage from 'html-to-image';

export function useScreenshot() {
  const previewUrl = ref<string | null>(null);
  const previewFileName = ref<string>('plan.png');
  const showPreview = ref(false);

  async function capture(el: HTMLElement, fileBaseName = 'plan') {
    try {
      // 生成 PNG（仅截取当前可见一屏）
      const dataUrl = await htmlToImage.toPng(el, {
        pixelRatio: Math.min(3, Math.max(2, Math.floor(window.devicePixelRatio || 2))),
        backgroundColor: '#ffffff',
        cacheBust: true,
        skipFonts: true,
        // 不设置 width/height/style，保持只截取当前视口区域
      });
      const blob = await (await fetch(dataUrl)).blob();
      const url = URL.createObjectURL(blob);
      previewFileName.value = `${fileBaseName}.png`;
      previewUrl.value = url;
      showPreview.value = true;
      return { url, fileName: previewFileName.value, dataUrl, blob };
    } catch (error) {
      console.error('Screenshot capture failed:', error);
      alert('截图失败，请重试');
      return null;
    }
  }

  return { previewUrl, previewFileName, showPreview, capture };
}


