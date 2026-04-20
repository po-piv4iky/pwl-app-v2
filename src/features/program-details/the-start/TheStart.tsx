'use client'

import clsx from 'clsx'
import { Dumbbell } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'

import { PAGE } from '@/config/public-page.config'
import Button from '@/components/ui/button/Button'
import { ProgramTraining } from '@/programs/types/program.types'
import { useActiveProgramStore } from '@/store/active-program.store'

import css from './TheStart.module.scss'

interface Props {
  program: ProgramTraining
}

const MOBILE_MEDIA_QUERY = '(max-width: 767px)'
const COLLAPSE_SCROLL_OFFSET = 300

export default function TheStart({ program }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const router = useRouter()
  const startProgram = useActiveProgramStore((state) => state.startProgram)

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)

    const handleViewportChange = (
      event: MediaQueryListEvent | MediaQueryList
    ) => {
      setIsMobileViewport(event.matches)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > COLLAPSE_SCROLL_OFFSET)
    }

    handleViewportChange(mediaQuery)
    handleScroll()
    setIsReady(true)

    mediaQuery.addEventListener('change', handleViewportChange)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    startProgram(program)
    router.push(PAGE.MY_TRAINING)
  }

  if (!isReady) {
    return null
  }

  if (isMobileViewport) {
    return (
      <div className={css.theStartMobile}>
        <Button onClick={handleClick} className={css.theStart__button}>
          <Dumbbell />
          <span>Начать программу</span>
        </Button>
      </div>
    )
  }

  return (
    <>
      <div
        className={clsx(
          css.theStart,
          isScrolled && css['theStart--hidden']
        )}
      >
        <div className={css.theStart__titleBlock}>
          <h5 className={css.theStart__title}>Готовы начать?</h5>
          <p className={css.theStart__description}>
            Начните программу {program.title} и двигайтесь к новым результатам.
          </p>
        </div>

        <Button onClick={handleClick} className={css.theStart__button}>
          <Dumbbell />
          <span>Начать программу</span>
        </Button>
      </div>

      <div
        className={clsx(
          css.theStartMini,
          isScrolled && css['theStartMini--visible']
        )}
      >
        <h5 className={css.theStartMini__title}>Готовы начать?</h5>

        <Button onClick={handleClick} className={css.theStart__button}>
          <Dumbbell />
          <span>Начать программу</span>
        </Button>
      </div>
    </>
  )
}