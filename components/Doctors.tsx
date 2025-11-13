// components/Doctors.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { doctors } from "@/lib/data";
import { servicesPricing, doctorServicesMap } from "@/lib/pricing";

// Определяем тип врача из массива doctors
type Doctor = (typeof doctors)[number];

const INITIAL_VISIBLE = 3; // сколько врачей показываем до "Показать ещё"

// Мини-блок с услугами врача
function MiniPrice({ doctor }: { doctor: Doctor }) {
  // Берём список кодов услуг по id врача
  const codes: string[] = doctorServicesMap[doctor.id] || [];

  // Фильтруем услуги по кодам
  const items = servicesPricing.filter((s) => codes.includes(s.code));

  if (!items.length) return null;

  return (
    <div className="flex flex-col gap-0.5 text-xs text-gray-600">
      {items.map((s) => (
        <div key={s.id} className="flex justify-between">
          <span className="opacity-80">{s.name}</span>
          <span className="font-semibold">
            {s.priceRUB !== undefined
              ? `${s.priceRUB.toLocaleString("ru-RU")} ₽`
              : "уточняется"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Doctors() {
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const visibleDoctors = useMemo(() => doctors.slice(0, visible), [visible]);
  const hiddenCount = doctors.length - visible;

  return (
    <section className="container py-12 space-y-6">
      <h2 className="text-2xl font-semibold">Наши врачи</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleDoctors.map((doctor) => (
          <article
            key={doctor.id}
            className="rounded-2xl border border-gray-200 bg-white p-4 flex flex-col gap-3"
          >
            {/* Фото/аватар */}
            <div className="flex items-start justify-between gap-3">
              <Image
                src={doctor.avatar || "/avatar.png"}
                alt={doctor.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col items-end text-xs text-gray-500">
                <span>{doctor.experience || "Опыт не указан"}</span>
              </div>
            </div>

            {/* Имя и специальность */}
            <div>
              <h3 className="font-semibold text-base">{doctor.name}</h3>
              <p className="text-xs text-gray-500">{doctor.speciality}</p>
            </div>

            {/* Рейтинг */}
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>⭐</span>
              <span>{doctor.rating?.toFixed(1) ?? "5.0"}</span>
            </div>

            {/* Мини-ценник */}
            <MiniPrice doctor={doctor} />

            {/* Кнопки */}
            <div className="flex justify-between items-center mt-2">
              <Link
                href={`/doctors/${doctor.id}`}
                className="text-xs text-blue-600 underline underline-offset-2"
              >
                Подробнее
              </Link>

              <Link
                href={`/booking?doctor=${doctor.id}`}
                className="px-3 py-1.5 rounded-xl bg-black text-white text-xs"
              >
                Записаться
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Кнопка "Показать ещё" */}
      {hiddenCount > 0 && (
        <div className="flex justify-center">
          <button
            onClick={() =>
              setVisible((v) =>
                v === INITIAL_VISIBLE ? doctors.length : INITIAL_VISIBLE
              )
            }
            className="px-4 py-2 text-sm rounded-xl border bg-white"
          >
            {visible === doctors.length
              ? "Свернуть список врачей"
              : `Показать ещё ${hiddenCount} врач${
                  hiddenCount === 1
                    ? "а"
                    : hiddenCount < 5
                    ? "ей"
                    : "ей"
                }`}
          </button>
        </div>
      )}
    </section>
  );
}
