'use client'

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ReactNode, useEffect, useRef, useState } from "react"
import css from './Carousel.module.scss'
import clsx from "clsx"

interface Props {
  children: ReactNode
}

const MOBILE_MEDIA_QUERY = '(max-width: 767px)'

export default function Carousel({ children }: Props) {
  const [isMobileViewport, setIsMobileViewport] = useState(false)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const trackRef = useRef<HTMLDivElement | null>(null)
  // есть ли слева или справа ещё слайды
  const updateScrollState = () => {
    const track = trackRef.current
    if (!track) return

    const { scrollLeft, clientWidth, scrollWidth } = track 
    // Количество пикселей, на которые элемент прокручен влево (Прокрутка	Пользователь), 
    // ширина видимой области
    // общая ширина контента
    setCanScrollPrev(scrollLeft > 1)
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 1)
  }
  //определяет сумму пагинции и активную пагинацию
  const updatePagination = () => {
  const track = trackRef.current
  if (!track) return

  const total = track.children.length
  const index = Math.round(track.scrollLeft / track.clientWidth)

  setTotalPages(total)
  setCurrentIndex(Math.min(Math.max(index, 0), total - 1))
}
 // запуск двух функций выше
  const updateCarouselState = () => {
    updateScrollState()
    updatePagination()
  }
 // функция которая вешается на кнопки переключения карточек на дэсктопе
  const scrollByCard = (direction: 'prev' | 'next') => {
    const track = trackRef.current
    if (!track) return

    const scrollValue = track.clientWidth * 0.85

    track.scrollBy({
      left: direction === 'next' ? scrollValue : -scrollValue,
      behavior: 'smooth'
    })

    setTimeout(updateScrollState, 300)
  }

  const scrollToPage = (index: number) => {
    const track = trackRef.current
    if (!track) return

    track.scrollTo({
      left: index * track.clientWidth,
      behavior: 'smooth',
    })

    setCurrentIndex(index)
    setTimeout(updateCarouselState, 300)
  }
  

   useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)

    const handleViewportChange = () => { 
      setIsMobileViewport(mediaQuery.matches)
      setTimeout(updateCarouselState, 100)
    }

    handleViewportChange()// мобилка или нет
    updateCarouselState()//обновление состояния пагинации и проводит проверку есть ли справа или слева слайды

    track.addEventListener('scroll', updateCarouselState)//вешаем слушатель скрола в 
    mediaQuery.addEventListener('change', handleViewportChange)// слушатель изменения разрешения
    window.addEventListener('resize', updateCarouselState) // меняет размер окна меняет ориентацию телефона

    return () => {
      track.removeEventListener('scroll', updateCarouselState)
      mediaQuery.removeEventListener('change', handleViewportChange)
      window.removeEventListener('resize', updateCarouselState)
    }
  }, [])

  return (
    <section className={css.carousel}>
      <motion.div
        className={css.track}
        ref={trackRef}
      >
        {children}
      </motion.div>

      {isMobileViewport && totalPages > 1 && (
        <div className={css.dots}>
            {Array.from({length: totalPages}).map((item, index) => (
                <button
                  key={index}
                  className={clsx(css.dot, index === currentIndex && css.dotActive)}
                  onClick={() => scrollToPage(index)}
                />
                
            ))}
        </div>
      )}

      {!isMobileViewport && (
        <div className={css.controls}>
          <button
            className={clsx(css.button, !canScrollPrev && css.disabled)}
            type="button"
            disabled={!canScrollPrev}
            onClick={() => scrollByCard('prev')}
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft />
          </button>

          <button
            className={clsx(css.button, !canScrollNext && css.disabled)}
            type="button"
            disabled={!canScrollNext}
            onClick={() => scrollByCard('next')}
            aria-label="Следующий слайд"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}