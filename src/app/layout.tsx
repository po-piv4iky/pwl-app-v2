import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./styles/_global.scss";
import "./globals.css"

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"]
});

export const metadata: Metadata = {
  title: {
    absolute: 'Power-Lifting',
    template: `%s | PWL`
  },
  description: "Эффективные тренировки по Power lifting",
  keywords: [
    "Powerlifting",
    "пауэрлифтинг",
    "силовые тренировки",
    "становая тяга",
    "жим лежа",
    "присед",
    "спортзал",
    "фитнес",
    "тренировки",
  ],
  openGraph: {
    type: 'website'
  },
   robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${notoSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
