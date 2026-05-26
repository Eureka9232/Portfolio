import Image from "next/image";
import Avatar from '@/public/Avatar2.png'

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tight text-center mb-12">Обо мне</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
            <Image
            src={Avatar}
            width={1000}
            height={1000}
            alt= "Avatar"
            className="w-full h-full block p-2 rounded-2xl"
        />
          </div>
          <div className="space-y-4 text-slate-600 font-bold text-2xl">
            <p>Привет Я — 3D-моделлер. За первый год обучения в коллежде 
              я освоил полный базовый цикл создания трёхмерной графики.</p>
            <p>Мои навыки:</p>
            <p>Моделирование — создание геометрии объектов с нуля.</p>
            <p>Текстурирование — работа с материалами и цветом.</p>
            <p>Освещение — настройка правильного света в сцене.</p>
            <p>Анимация — оживление объектов и камер.</p>
            <p>Рендеринг — финальная визуализация кадров.</p>
            <p>Свободно владею основными инструментами индустрии. Быстро учусь, развиваю пространственное мышление и хочу расти в сфере 3D дальше. Открыт к интересным проектам и практике.</p>
          </div>
        </div>
      </div>
    </section>
  );
}