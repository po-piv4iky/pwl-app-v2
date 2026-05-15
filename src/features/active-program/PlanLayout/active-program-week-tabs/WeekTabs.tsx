'use client'

import css from "./WeekTabs.module.scss"
import { Circle, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react"
import clsx from "clsx"
import { useActiveProgramStore } from "@/store/active-program.store"
import { Swiper, SwiperSlide } from "swiper/react"
import { 
  // FreeMode,      // свободный скролл
  Pagination,       // точки навигации
  Navigation,       // кнопки "вперёд/назад"
  // Autoplay,      // автопрокрутка
  // EffectFade     // эффект затухания
} from 'swiper/modules';// import { Pagination } from 'swiper/modules'; // Импортируем модуль пагинации
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { useRef } from "react"

// 🚀 Золотое правило Framer-motion:
// initial → что было до анимации
// animate → что стало после анимации
// exit → что будет при удалении
// transition → как будет происходить
// whileHover/whileTap → интерактив

// Это покрывает 90% всех задач с анимацией в Framer Motion!


export default function WeekTabs() {
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const { activeProgram, selectWeek } = useActiveProgramStore()
  if(!activeProgram) return null

  const { program, currentWeek, completedDays, viewMode } = activeProgram
  const weeks = program.weeks
  const selectedWeek = viewMode.type === 'selected' ? viewMode.week : currentWeek

  return (
    <section className={css.weeksTabsContainer}>
      <h5>Выберите неделю</h5>
      <div className={css.navigationBlock}>
        <button
          ref={prevRef}
          type="button"
          className={clsx(css.navButton, css.prevButton)}
          aria-label="Предыдущие недели"
        >
          <ArrowLeft />
        </button>
          <button
          ref={nextRef}
          type="button"
          className={clsx(css.navButton, css.nextButton)}
          aria-label="Следующие недели"
        >
          <ArrowRight />
        </button>
      </div>
      <Swiper
        // slidesPerView='auto'  //   // автоширина
        // freeMode // свободный скролл
        // slidesPerView={1.15} // сколько видно
        modules={[Pagination, Navigation]}  // подключает функциональность
        className={css.swiper}
        spaceBetween={12} //расстояние между слайдами px
        slidesPerGroup={2}//сколько карточек перелистывается за один клик по пагинации.
        // watchOverflow
        pagination={{ 
        clickable: true,//кликабельно: верно,
        dynamicBullets: true //динамические подсказки: верно
        }}
        onBeforeInit={(swiper) => {
        if (
          typeof swiper.params.navigation !== "boolean" &&
          swiper.params.navigation
        ) {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
         }
        }}
        navigation
        breakpoints={{ // адаптив
          360: {
            slidesPerView: 2,  //если ширина >= 480px → показываем 1.6 карточки
          },
          480: {
            slidesPerView: 3,  //если ширина >= 480px → показываем 1.6 карточки
          },
          768: {
            slidesPerView: 4,
          },
          1030: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 8,
          },
        }}
      >
            {weeks.map((week) => {
              const weekNumber = week.weekNumber
              const completedWorkouts = completedDays.filter(item => item.week === weekNumber).length
              const totalWorkouts = week.trainingDays.length              
              const isSelected = weekNumber === selectedWeek
              const isCurrent = weekNumber === currentWeek
              
              const isCompletedWeek = completedWorkouts === totalWorkouts
              return (
                <SwiperSlide key={weekNumber} className={css.slide}>
                    <button
                      onClick={() => selectWeek(weekNumber)}
                      className={clsx(
                      css.buttonWeek,
                      isCompletedWeek && css.completed,
                      isSelected && css.selected,
                      isCurrent && css.current
                    )}
                    >
                      <div className={css.iconAndWeekBlock}>
                        {isCompletedWeek ? <CheckCircle /> : <Circle />}
                        <span>Неделя {week.weekNumber}</span>
                      </div>
    
                      <span className={css.progress}>
                        {completedWorkouts}/{totalWorkouts} завершено
                      </span>
                    </button>
                </SwiperSlide>
              )
           })}
      </Swiper>
    </section>
  )
}



