"use client"

import { useEffect } from 'react'

export default function PreventPullRefresh() {
  useEffect(() => {
    // Prevenir pull-to-refresh
    let startY = 0
    let isAtTop = false

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      isAtTop = window.scrollY === 0
    }

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY
      const diffY = currentY - startY

      // Se estiver no topo e tentar puxar para baixo, prevenir
      if (isAtTop && diffY > 0) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      startY = 0
      isAtTop = false
    }

    // Prevenir scroll além dos limites
    const handleScroll = () => {
      if (window.scrollY < 0) {
        window.scrollTo(0, 0)
      }
    }

    // Prevenir zoom com dois dedos
    const handleGestureStart = (e: Event) => {
      e.preventDefault()
    }

    // Adicionar event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd, { passive: false })
    document.addEventListener('scroll', handleScroll, { passive: false })
    document.addEventListener('gesturestart', handleGestureStart, { passive: false })

    // Prevenir context menu (menu de contexto)
    const preventContextMenu = (e: Event) => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', preventContextMenu)

    // Cleanup
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('scroll', handleScroll)
      document.removeEventListener('gesturestart', handleGestureStart)
      document.removeEventListener('contextmenu', preventContextMenu)
    }
  }, [])

  return null
}
