'use client'

import { ReactNode, useEffect } from 'react'
import { Sidebar } from './sidebar/Sidebar'
import { Content } from './content/Content'
import { useUIStore } from '@/store/ui.store'
import css from './Layout.module.scss'
import cn from 'clsx'

type Props = {
    children: ReactNode
}

export function Layout({ children }: Props) {
  const {
    isSidebarOpen,
    isMobile,
    setSidebarOpen,
    setIsMobile,
  } = useUIStore()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 767px)')

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(!e.matches)
      setSidebarOpen(e.matches)
    }

    handleChange(mediaQuery)
    mediaQuery.addEventListener('change', handleChange)

    return () =>
      mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <main
      className={cn(
        'flex',
        css.layout,
        isSidebarOpen ? css.showedSidebar : css.hidedSidebar
      )}
    >
      <Sidebar />

      {isSidebarOpen && isMobile && (
        <div className={css.overlay} onClick={() => setSidebarOpen(false)} />
      )}

      <Content
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      >
        {children}
      </Content>
    </main>
  )
}
