'use client'

import { useEffect } from "react";
import { Dumbbell } from "lucide-react";
import css from './Loading.module.scss'

const LoadingPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={css.loadingPage}>
      <div className={css.loadingPage__glow} />

      <div className={css.loadingPage__content}>
        <div
          className={css.loadingPage__badge}
          aria-label="Loading Spinner"
          data-testid="loader"
        >
          <div className={css.loadingPage__ring} />
          <div className={css.loadingPage__ringInner} />
          <div className={css.loadingPage__iconBox}>
            <Dumbbell className={css.loadingPage__icon} />
          </div>
        </div>

        <div className={css.loadingPage__text}>
          <span className={css.loadingPage__title}>PWL</span>
          <span className={css.loadingPage__subtitle}>Загружаем тренировочную базу</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;


