import css from "./WeekTabs.module.scss"
import { Circle, CheckCircle } from "lucide-react"
import clsx from "clsx"
import { useActiveProgramStore } from "@/store/active-program.store"
import { Swiper, SwiperSlide } from "swiper/react"
import { 
  FreeMode,      // свободный скролл
  Pagination,    // точки навигации
  Navigation,    // кнопки "вперёд/назад"
  Autoplay,      // автопрокрутка
  EffectFade     // эффект затухания
} from 'swiper/modules';// import { Pagination } from 'swiper/modules'; // Импортируем модуль пагинации
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// 🚀 Золотое правило Framer-motion:
// initial → что было до анимации
// animate → что стало после анимации
// exit → что будет при удалении
// transition → как будет происходить
// whileHover/whileTap → интерактив

// Это покрывает 90% всех задач с анимацией в Framer Motion!


export default function WeekTabs() {
  const { activeProgram, setCurrentWeek } = useActiveProgramStore()
  if(!activeProgram) return null

  const { program, currentWeek, completedDays } = activeProgram
  const weeks = program.weeks

  return (
    <section className={css.weeksTabsContainer}>
      <h5>Выберите неделю</h5>
      <Swiper
        // slidesPerView='auto'  //   // автоширина
        // freeMode // свободный скролл
        // slidesPerView={1.15} // сколько видно
        modules={[FreeMode, Pagination, Navigation, Autoplay, EffectFade]}  // подключает функциональность
        className={css.swiper}
        spaceBetween={12} //расстояние между слайдами px
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
        pagination={{ 
        clickable: true,
        dynamicBullets: true 
      }}
      >
            {weeks.map((week) => {
              const weekNumber = week.weekNumber
              const isActive = weekNumber === currentWeek
              const completedWorkouts = completedDays.filter(item => item.week === weekNumber).length
              const totalWorkouts = week.trainingDays.length
              
              const isCompletedWeek = completedWorkouts === totalWorkouts
              return (
                <SwiperSlide key={weekNumber} className={css.slide}>
                    <button
                      onClick={() => setCurrentWeek(weekNumber)}
                      className={clsx(
                      css.buttonWeek,
                      isActive && css.active,
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



