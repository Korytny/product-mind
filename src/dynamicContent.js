// src/data/dynamicContent.js

export const dynamicContent = {
  // --- DEFAULT CONTENT (Fallback for any non-matching UTMs) ---
  default_default_default: {
    mainHeading: "Ваш бизнес достоин большего",
    subHeading: "Откройте для себя мощь автоматизации и ИИ",
    paragraph1: "Автоматизируйте процессы и масштабируйте свой бизнес, освобождая время для стратегического развития. Мы предлагаем современные IT-решения, созданные специально для вас.",
    ctaButtonText: "Начать автоматизацию",
    ctaButtonLink: "/contact-us",
    imageSrc: "/images/img.png"
  },

  // --- Предприниматели (Собственники и Управляющие МСБ) ---
  // 1. Автоматизация бизнеса (общая потребность)
  yandex_cpc_biz_auto_gen: {
    mainHeading: "Бизнес без Рутины? Это реально!",
    subHeading: "Сократите операционные расходы до 70%",
    paragraph1: "Мы создаем умные IT-решения, которые превратят ваши повторяющиеся задачи в автоматизированные процессы, экономя время и ресурсы. Сосредоточьтесь на стратегии, мы позаботимся о рутине.",
    ctaButtonText: "Освободить Бизнес от Рутины",
    ctaButtonLink: "/solutions/business-automation",
    imageSrc: "/image.png?text=MSB+Automation"
  },
  // 2. Оптимизация/Экономия (поиск выгоды)
  google_cpc_biz_economy: {
    mainHeading: "Экономьте Больше, Работайте Умнее",
    subHeading: "Оптимизация затрат без потери качества",
    paragraph1: "Хотите сократить расходы на персонал и повысить рентабельность? Наши IT-решения помогут вам выявить и устранить неэффективные затраты, максимизируя вашу прибыль.",
    ctaButtonText: "Рассчитать Экономию",
    ctaButtonLink: "/solutions/cost-optimization",
    imageSrc: "https://via.placeholder.com/800x600?text=Business+Economy"
  },
  // 3. Рост/Развитие (желание масштабироваться)
  facebook_social_biz_scale: { // Пример кампании для масштабирования
    mainHeading: "Масштабируйте Свой Бизнес Легко",
    subHeading: "От операционки к стратегии: путь к росту",
    paragraph1: "Готовы к новому этапу развития? Мы создаем масштабируемые IT-системы, которые позволят вашему бизнесу расти без лишних затрат на ручной труд и головной боли.",
    ctaButtonText: "Построить Стратегию Роста",
    ctaButtonLink: "/solutions/business-scaling",
    imageSrc: "https://via.placeholder.com/800x600?text=Scale+Your+Business"
  },

  // --- Начальники Отделов (Продаж, Маркетинга, Поддержки) ---
  // 4. Автоматизация отдела (конкретная потребность - Продажи)
  google_cpc_sales_dept_automation: {
    mainHeading: "Отдел Продаж на Прокачку!",
    subHeading: "Автоматизируйте продажи и увеличьте конверсию",
    paragraph1: "Наши специализированные CRM-системы и чат-боты для отдела продаж автоматизируют рутинные задачи, высвобождая время менеджеров для главного — заключения сделок. Повысьте продуктивность на 40%!",
    ctaButtonText: "Внедрить Автоматизацию Продаж",
    ctaButtonLink: "/solutions/sales-automation",
    imageSrc: "https://via.placeholder.com/800x600?text=Sales+Dept+Automation"
  },
  // 5. Автоматизация отдела (конкретная потребность - Поддержка)
  yandex_cpc_support_automation: {
    mainHeading: "Техподдержка 24/7 Без Усилий",
    subHeading: "Оптимизируйте работу клиентского сервиса",
    paragraph1: "Умные чат-боты и системы управления заявками автоматизируют до 90% типовых запросов, сокращая время ожидания и повышая лояльность клиентов. Ваш отдел поддержки будет работать эффективнее и без ошибок.",
    ctaButtonText: "Улучшить Поддержку Клиентов",
    ctaButtonLink: "/solutions/support-automation",
    imageSrc: "https://via.placeholder.com/800x600?text=Support+Automation"
  },
  // 6. Эффективность отдела (поиск результата) - общая для любого отдела
  vk_social_team_efficiency: { // Пример кампании для VK
    mainHeading: "Ваш Отдел Работает на 100%?",
    subHeading: "Повысьте производительность всей команды",
    paragraph1: "Мы создаем интуитивно понятные админки и инструменты, которые систематизируют работу, улучшают взаимодействие и помогают каждому сотруднику быть максимально эффективным. Больше не будет хаоса!",
    ctaButtonText: "Оптимизировать Работу Отдела",
    ctaButtonLink: "/solutions/team-efficiency",
    imageSrc: "https://via.placeholder.com/800x600?text=Team+Efficiency"
  },

  // --- IT-Директора / CTO ---
  // 7. Разработка IT-продуктов (общая потребность)
  linkedin_cpc_custom_software: { // Пример кампании для LinkedIn
    mainHeading: "Нужен IT-продукт, а времени нет?",
    subHeading: "Ваш надежный партнер в разработке под ключ",
    paragraph1: "Мы — ваш IT-аутсорсинг, специализирующийся на создании кастомного программного обеспечения, админок и мобильных приложений. Разгрузите свою команду и получите качественное решение в срок.",
    ctaButtonText: "Заказать Разработку ПО",
    ctaButtonLink: "/services/custom-software",
    imageSrc: "https://via.placeholder.com/800x600?text=Custom+Software+Dev"
  },
  // 8. Автоматизация (техническая, интеграция)
  google_cpc_api_integration: {
    mainHeading: "Бесшовная Интеграция Систем",
    subHeading: "Автоматизация бизнес-процессов по API",
    paragraph1: "Модернизируем вашу IT-инфраструктуру, обеспечивая идеальную синхронизацию данных между всеми вашими сервисами. Разработаем API-интеграции любой сложности для максимальной эффективности.",
    ctaButtonText: "Узнать об Интеграции",
    ctaButtonLink: "/services/api-integration",
    imageSrc: "https://via.placeholder.com/800x600?text=API+Integration"
  },
  // 9. Проблемы IT (поиск решения боли / разгрузка IT-отдела)
  yandex_search_it_overload: { // Пример из поиска Яндекса
    mainHeading: "IT-Отдел Перегружен? Делегируйте нам!",
    subHeading: "Эффективное решение проблемы нехватки ресурсов",
    paragraph1: "Ваша команда разработчиков на пределе? Мы возьмем на себя часть нагрузки по созданию чат-ботов, мобильных приложений или админок, позволяя вашим специалистам сосредоточиться на ключевых задачах.",
    ctaButtonText: "Разгрузить IT-Команду",
    ctaButtonLink: "/services/it-outsourcing",
    imageSrc: "https://via.placeholder.com/800x600?text=IT+Team+Support"
  }
};