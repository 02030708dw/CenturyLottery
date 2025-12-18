import { ref, onMounted, onUnmounted } from 'vue'

export function useFullPageScroll(sectionCount = 1) {
  const currentPage = ref(0)
  let isScrolling = false
  let touchStartY = 0

  const scrollToPage = (index) => {
    isScrolling = true
    currentPage.value = Math.max(0, Math.min(index, sectionCount - 1))

    window.scrollTo({
      top: currentPage.value * window.innerHeight,
      behavior: 'smooth',
    })

    setTimeout(() => (isScrolling = false), 400)
  }

  const goToPage = (index) => {
    scrollToPage(index)
  }

  const wheelHandler = (e) => {
    if (isScrolling) return
    e.preventDefault()

    if (e.deltaY > 0) {
      scrollToPage(currentPage.value + 1)
    } else {
      scrollToPage(currentPage.value - 1)
    }
  }

  onMounted(() => {
    // 检测是否有触摸事件支持，简单判断移动端
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (!isTouchDevice) {
      // 桌面端：整页滚动
      document.body.style.overflow = 'hidden'
      window.addEventListener('wheel', wheelHandler, { passive: false })
    } else {
      // 手机端：允许正常滚动
      document.body.style.overflow = ''
    }
  })

  onUnmounted(() => {
    document.body.style.overflow = ''
    window.removeEventListener('wheel', wheelHandler)
  })

  return {
    currentPage,
    goToPage,
  }
}
