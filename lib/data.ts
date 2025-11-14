// lib/data.ts

export type Doctor = {
  id: string;
  name: string;
  speciality: string;
  bio?: string;
  rating?: number;
  avatar?: string;      // аватар врача
  experience?: string;  // стаж
  email?: string;       // опционально, если понадобится
};

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Д-р Иванов Иван",
    speciality: "Терапевт, кошки и собаки",
    bio: "Занимается общей терапией, вакцинацией и профилактикой хронических заболеваний.",
    rating: 4.9,
    avatar: "/avatar.png",
    experience: "Опыт 7 лет",
    email: "ivanov@example.com",
  },
  // сюда потом можно добавлять остальных врачей
];

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}
