import React from "react";
import { Timeline } from "../ui/TimelineComponent";

const ProjectStages = () => {
  const data = [
    {
      title: "Интервью",
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            Сбор требований и фиксация потребностей
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>Проведем несколько встреч</li>
              <li>Обсудим ваши пожелания</li>
              <li>Зафиксируем бизнес-процесс</li>
            </ul>
            <img
              src="/images/chat.png"
              alt="Interview process"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">Результат:</h5>
              <p className="text-white text-base">
                Детализированное техническое задание с полным описанием системы
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Прототип",
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            Визуализация идей, создание MVP
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>Создание кликабельного прототипа в Figma</li>
              <li>Разработка первой версии приложения</li>
              <li>Тестирование на фокус группе</li>
            </ul>
            <img
              src="/images/mob.jpg"
              alt="Prototype process"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">Результат:</h5>
              <p className="text-white text-base">
                Макет прототипа и работающий MVP
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Решение",
      content: (
        <div className="space-y-6">
          <h4 className="text-white text-xl md:text-2xl font-medium">
            Реализация продукта, соответствующего требованиям
          </h4>
          <div className="space-y-4">
            <ul className="text-white/80 text-base md:text-lg space-y-3 list-disc pl-5">
              <li>Доработка функций и интерфейсов</li>
              <li>Публикация сайта или приложения на маркетплейсах</li>
              <li>Настройка рекламы, создание воронок для клиентов</li>
            </ul>
            <img
              src="/images/admin.png"
              alt="Solution implementation"
              className="rounded-lg object-cover w-full h-40 md:h-60 mt-4"
            />
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h5 className="text-purple-400 text-lg font-medium mb-3">Результат:</h5>
              <p className="text-white text-base">
                Работающее решение, достигающее цели
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-20" id="project-stages">
      <Timeline data={data} />
    </section>
  );
};

export default ProjectStages;
