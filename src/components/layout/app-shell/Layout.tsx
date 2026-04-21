'use client'

import { ReactNode, useLayoutEffect, useState } from 'react'
import { Sidebar } from './sidebar/Sidebar'
import { Content } from './content/Content'
import { useUIStore } from '@/store/ui.store'
import css from './Layout.module.scss'
import cn from 'clsx'
import LoadingPage from '@/features/loading-page/Loading'


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
  const [isLayoutReady, setIsLayoutReady] = useState(false)

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const mobile = e.matches

      setIsMobile(mobile)
      setSidebarOpen(!mobile)
    }

    const finishLoading = () => {
      setIsLayoutReady(true)
    }

    handleChange(mediaQuery)

    if (document.readyState === 'complete') {
      finishLoading()
    } else {
      window.addEventListener('load', finishLoading, { once: true })
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('load', finishLoading)
    }
  }, [setIsMobile, setSidebarOpen])

  return (
    <>
      {!isLayoutReady && <LoadingPage />}

      <main
        className={cn(
          css.layout,
          isSidebarOpen ? css.showedSidebar : css.hidedSidebar,
          !isLayoutReady && css.layoutHidden
        )}
        aria-hidden={!isLayoutReady}
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
    </>
  )
}
