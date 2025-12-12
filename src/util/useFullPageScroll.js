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

  const touchStartHandler = (e) => {
    touchStartY = e.touches[0].clientY
  }

  const touchEndHandler = (e) => {
    if (isScrolling) return
    const diff = touchStartY - e.changedTouches[0].clientY
    if (Math.abs(diff) < 30) return

    if (diff > 0) {
      scrollToPage(currentPage.value + 1)
    } else {
      scrollToPage(currentPage.value - 1)
    }
  }

  onMounted(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('wheel', wheelHandler, { passive: false })
    window.addEventListener('touchstart', touchStartHandler, { passive: true })
    window.addEventListener('touchend', touchEndHandler, { passive: true })
  })

  onUnmounted(() => {
    document.body.style.overflow = ''
    window.removeEventListener('wheel', wheelHandler)
    window.removeEventListener('touchstart', touchStartHandler)
    window.removeEventListener('touchend', touchEndHandler)
  })

  return {
    currentPage,
    goToPage,  
  }
}
