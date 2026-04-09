'use client'

import css from './NoActiveTraining.module.scss'

export default function NoActiveTraining() {
    return (
        <section className={css.emptyState}>
            <div className={css.content}>
                <h1 className={css.title}>Активной тренировки нет</h1>
                <p className={css.description}>
                    Когда вы начнете тренировочную сессию, она появится на этой странице.
                </p>
            </div>
        </section>
    )
}
