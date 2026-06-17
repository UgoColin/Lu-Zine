import { onMounted, onUnmounted, shallowRef, watchEffect } from 'vue'
import type { ShallowRef } from 'vue'

type EntranceMotionOptions = {
  rootMargin?: string
  threshold?: number
}

export function useEntranceMotion(
  elementRef: ShallowRef<HTMLElement | null>,
  options: EntranceMotionOptions = {},
) {
  const isVisible = shallowRef(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    watchEffect((onCleanup) => {
      const element = elementRef.value

      if (!element || isVisible.value) {
        return
      }

      observer?.disconnect()
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return
          }

          isVisible.value = true
          observer?.disconnect()
          observer = null
        },
        {
          rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
          threshold: options.threshold ?? 0.15,
        },
      )

      observer.observe(element)

      onCleanup(() => {
        observer?.disconnect()
        observer = null
      })
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { isVisible }
}
