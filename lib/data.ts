// lib/data.ts

export type Doctor = {
  id: string;
  name: string;
  speciality: string;
  bio?: string;
  rating?: number;
  avatar?: string;      // путь к аватарке
  experience?: string;  // стаж в удобном для вывода виде
  email?: string;       // при желании можно использовать для карт
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
  // сюда можно потом добавлять других врачей по тому же шаблону
];

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}
