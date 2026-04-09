import { PAGE } from "@/config/public-page.config";
import { Dumbbell } from "lucide-react";
import Link from "next/link";
import css from './Logo.module.scss'

export function Logo() {
    return (
        <Link href={PAGE.HOME} className={css.logoBlock}>
          <Dumbbell className={css.icon} />
        </Link>
    )
}
