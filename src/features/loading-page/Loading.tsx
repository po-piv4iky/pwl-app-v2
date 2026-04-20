'use client'

import { useEffect } from "react";
import { HashLoader } from "react-spinners";
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
      <HashLoader
        color="white"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;