// app/page.tsx

import Link from "next/link";
import Doctors from "@/components/Doctors";
import HowItWorks from "@/HowItWorks";
import StructuredData from "@/StructuredData";

export default function HomePage() {
  return (
    <>
      {/* Структурированные данные для SEO (если компонент есть) */}
      <StructuredData />

      <main className="min-h-screen bg-slate-50 text-gray-900">
        {/* Шапка */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight">
                OnlyVet
              </span>
            </Link>

            <nav className="flex items-center gap-3 text-sm">
              <Link
                href="/services"
                className="text-gray-600 hover:text-gray-900"
              >
                Услуги
              </Link>
              <Link
                href="/doctors"
                className="text-gray-600 hover:text-gray-900"
              >
                Врачи
              </Link>
              <Link
                href="/knowledge"
                className="text-gray-600 hover:text-gray-900"
              >
                База знаний
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-slate-900 px-4 py-1.5 text-sm font-medium hover:bg-slate-900 hover:text-white"
              >
                Войти
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero-блок */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-2 md:py-16">
            <div className="flex flex-col gap-5">
              <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 w-max">
                Онлайн-ветеринария • доказательный подход
              </p>

              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Мы рядом, даже когда
                <span className="block">врач далеко.</span>
              </h1>

              <p className="text-sm text-gray-600 md:text-base">
                OnlyVet — это онлайн-консультации 24/7: острые состояния, второе
                мнение, плановый контроль хронических пациентов. Врачи, которым
                можно доверять.
              </p>

              <div className="mt-1 flex flex-wrap gap-3">
                <Link
                  href="/booking"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
                >
                  Получить консультацию
                </Link>
                <Link
                  href="/login"
                  className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-white"
                >
                  Войти / зарегистрироваться
                </Link>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                • онлайн-осмотр по фото/видео • разбор анализов • второе мнение
                • поддержка владельца 24/7
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-gray-800">
                Как это работает
              </h2>
              <HowItWorks />
            </div>
          </div>
        </section>

        {/* Блок "Наши врачи" */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <Doctors />
          </div>
        </section>

        {/* CTA внизу */}
        <section className="bg-slate-900 text-white">
          <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Нужна помощь врачу прямо сейчас?
              </h2>
              <p className="mt-1 text-sm text-slate-200">
                Оставьте заявку — дежурный специалист подключится как можно
                быстрее и поможет с первым планом действий.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/booking"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-100"
              >
                Записаться онлайн
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-slate-500 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-slate-800"
              >
                Смотреть услуги и цены
              </Link>
            </div>
          </div>
        </section>

        {/* Подвал */}
        <footer className="border-t border-slate-200 bg-white text-xs text-gray-500">
          <div className="container mx-auto flex flex-col items-start justify-between gap-2 px-4 py-4 md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} OnlyVet. Онлайн-ветеринарная поддержка.</div>
            <div className="flex gap-3">
              <Link href="/docs/terms" className="hover:text-gray-800">
                Пользовательское соглашение
              </Link>
              <Link href="/docs/privacy" className="hover:text-gray-800">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
