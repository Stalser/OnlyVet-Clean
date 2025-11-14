export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold">OnlyVet</h1>
      <p className="text-gray-600 text-sm">
        Онлайн-ветеринария: консультации, второе мнение, поддержка 24/7.
      </p>
      <div className="flex gap-2 mt-4">
        <a
          href="/login"
          className="px-4 py-2 rounded-xl bg-black text-white text-sm"
        >
          Войти / зарегистрироваться
        </a>
        <a
          href="/services"
          className="px-4 py-2 rounded-xl border text-sm"
        >
          Посмотреть услуги
        </a>
      </div>
    </main>
  );
}
