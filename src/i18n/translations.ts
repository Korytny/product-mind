export type Lang = "ru" | "en";

export type TranslationKey = keyof typeof translations;

export const translations = {
  // ===== index.html / App.tsx =====
  siteTitle: { ru: "Product Mind | Масштабирование бизнеса с ИИ", en: "Product Mind | Business Scaling with AI" },
  siteDescription: { ru: "Масштабирование бизнеса с ИИ", en: "Business Scaling with AI" },

  // ===== Navbar =====
  navProjects: { ru: "Проекты", en: "Projects" },
  navExamples: { ru: "Примеры", en: "Examples" },
  navStages: { ru: "Этапы", en: "Stages" },
  navCase: { ru: "Кейс", en: "Case" },
  navTeam: { ru: "Команда", en: "Team" },
  navTestimonials: { ru: "Отзывы", en: "Testimonials" },
  navContact: { ru: "Контакты", en: "Contact" },
  navStartProject: { ru: "Начать проект", en: "Start a Project" },
  brandTitle: { ru: "Студия цифровых продуктов", en: "Digital Product Studio" },

  // ===== Footer =====
  footerHome: { ru: "Главная", en: "Home" },
  footerDescription: { ru: "Разработка цифровых продуктов и автоматизация бизнес-процессов", en: "Development of digital products and business process automation" },
  footerContact: { ru: "Контакты", en: "Contact" },
  footerCopyright: { ru: "Все права защищены.", en: "All rights reserved." },
  footerBackToTop: { ru: "Вернуться наверх", en: "Back to top" },

  heroBadgeSpeed: { ru: "Скорость", en: "Speed" },
  heroBadgeQuality: { ru: "Качество", en: "Quality" },
  heroBadgeEfficiency: { ru: "Эффективность", en: "Efficiency" },
  heroCtaContact: { ru: "Контакты", en: "Contacts" },

  // Dynamic content (UTM-based)
  dynDefaultHeading: { ru: "Ваш бизнес достоин большего", en: "Your Business Deserves More" },
  dynDefaultSub: { ru: "Откройте для себя мощь автоматизации и ИИ", en: "Discover the Power of Automation and AI" },
  dynDefaultP1: { ru: "Автоматизируйте процессы и масштабируйте бизнес, освобождая время для стратегического развития. Мы поддержим Вас современными IT-решениями.", en: "Automate processes and scale your business, freeing up time for strategic development. We'll support you with modern IT solutions." },

  dynBizAutoHeading: { ru: "Бизнес без Рутины? Это реально!", en: "Business Without Routine? It's Real!" },
  dynBizAutoSub: { ru: "Сократите операционные расходы до 70%", en: "Reduce operational costs by up to 70%" },
  dynBizAutoP1: { ru: "Мы создаем умные IT-решения, которые превратят ваши повторяющиеся задачи в автоматизированные процессы, экономя время и ресурсы. Сосредоточьтесь на стратегии, мы позаботимся о рутине.", en: "We create smart IT solutions that turn your repetitive tasks into automated processes, saving time and resources. Focus on strategy, we'll take care of the routine." },
  dynBizAutoCta: { ru: "Освободить Бизнес от Рутины", en: "Free Your Business from Routine" },

  dynEconomyHeading: { ru: "Экономьте Больше, Работайте Умнее", en: "Save More, Work Smarter" },
  dynEconomySub: { ru: "Оптимизация затрат без потери качества", en: "Cost optimization without sacrificing quality" },
  dynEconomyP1: { ru: "Хотите сократить расходы на персонал и повысить рентабельность? Наши IT-решения помогут вам выявить и устранить неэффективные затраты, максимизируя вашу прибыль.", en: "Want to reduce staffing costs and increase profitability? Our IT solutions will help you identify and eliminate inefficient spending, maximizing your profit." },
  dynEconomyCta: { ru: "Рассчитать Экономию", en: "Calculate Savings" },

  dynScaleHeading: { ru: "Масштабируйте Свой Бизнес Легко", en: "Scale Your Business with Ease" },
  dynScaleSub: { ru: "От операционки к стратегии: путь к росту", en: "From operations to strategy: the path to growth" },
  dynScaleP1: { ru: "Готовы к новому этапу развития? Мы создаем масштабируемые IT-системы, которые позволят вашему бизнесу расти без лишних затрат на ручной труд и головной боли.", en: "Ready for the next stage of development? We create scalable IT systems that will allow your business to grow without extra costs on manual labor and headaches." },
  dynScaleCta: { ru: "Построить Стратегию Роста", en: "Build a Growth Strategy" },

  dynSalesHeading: { ru: "Отдел Продаж на Прокачку!", en: "Supercharge Your Sales Department!" },
  dynSalesSub: { ru: "Автоматизируйте продажи и увеличьте конверсию", en: "Automate sales and increase conversion" },
  dynSalesP1: { ru: "Наши специализированные CRM-системы и чат-боты для отдела продаж автоматизируют рутинные задачи, высвобождая время менеджеров для главного — заключения сделок. Повысьте продуктивность на 40%!", en: "Our specialized CRM systems and chatbots for sales departments automate routine tasks, freeing up managers' time for the main thing — closing deals. Boost productivity by 40%!" },
  dynSalesCta: { ru: "Внедрить Автоматизацию Продаж", en: "Implement Sales Automation" },

  dynSupportHeading: { ru: "Техподдержка 24/7 Без Усилий", en: "24/7 Support Without the Effort" },
  dynSupportSub: { ru: "Оптимизируйте работу клиентского сервиса", en: "Optimize your customer service operations" },
  dynSupportP1: { ru: "Умные чат-боты и системы управления заявками автоматизируют до 90% типовых запросов, сокращая время ожидания и повышая лояльность клиентов. Ваш отдел поддержки будет работать эффективнее и без ошибок.", en: "Smart chatbots and ticket management systems automate up to 90% of typical requests, reducing wait times and increasing customer loyalty. Your support department will work more efficiently and error-free." },
  dynSupportCta: { ru: "Улучшить Поддержку Клиентов", en: "Improve Customer Support" },

  dynTeamHeading: { ru: "Ваш Отдел Работает на 100%?", en: "Is Your Department Working at 100%?" },
  dynTeamSub: { ru: "Повысьте производительность всей команды", en: "Boost your entire team's productivity" },
  dynTeamP1: { ru: "Мы создаем интуитивно понятные админки и инструменты, которые систематизируют работу, улучшают взаимодействие и помогают каждому сотруднику быть максимально эффективным. Больше не будет хаоса!", en: "We create intuitive admin panels and tools that systematize work, improve collaboration and help every employee be maximally effective. No more chaos!" },
  dynTeamCta: { ru: "Оптимизировать Работу Отдела", en: "Optimize Department Operations" },

  dynITProductHeading: { ru: "Нужен IT-продукт, а времени нет?", en: "Need an IT Product but No Time?" },
  dynITProductSub: { ru: "Ваш надежный партнер в разработке под ключ", en: "Your reliable turnkey development partner" },
  dynITProductP1: { ru: "Мы — ваш IT-аутсорсинг, специализирующийся на создании кастомного программного обеспечения, админок и мобильных приложений. Разгрузите свою команду и получите качественное решение в срок.", en: "We are your IT outsourcing partner specializing in custom software, admin panels and mobile applications. Unload your team and get a quality solution on time." },
  dynITProductCta: { ru: "Заказать Разработку ПО", en: "Order Software Development" },

  dynApiHeading: { ru: "Бесшовная Интеграция Систем", en: "Seamless System Integration" },
  dynApiSub: { ru: "Автоматизация бизнес-процессов по API", en: "Business process automation via API" },
  dynApiP1: { ru: "Модернизируем вашу IT-инфраструктуру, обеспечивая идеальную синхронизацию данных между всеми вашими сервисами. Разработаем API-интеграции любой сложности для максимальной эффективности.", en: "We modernize your IT infrastructure, ensuring perfect data synchronization between all your services. We develop API integrations of any complexity for maximum efficiency." },
  dynApiCta: { ru: "Узнать об Интеграции", en: "Learn About Integration" },

  dynOverloadHeading: { ru: "IT-Отдел Перегружен? Делегируйте нам!", en: "IT Department Overloaded? Delegate to Us!" },
  dynOverloadSub: { ru: "Эффективное решение проблемы нехватки ресурсов", en: "Effective solution for resource shortages" },
  dynOverloadP1: { ru: "Ваша команда разработчиков на пределе? Мы возьмем на себя часть нагрузки по созданию чат-ботов, мобильных приложений или админок, позволяя вашим специалистам сосредоточиться на ключевых задачах.", en: "Is your development team at capacity? We'll take on part of the workload for creating chatbots, mobile applications or admin panels, allowing your specialists to focus on key tasks." },
  dynOverloadCta: { ru: "Разгрузить IT-Команду", en: "Unload Your IT Team" },

  // ===== BusinessCases =====
  businessCasesTitle: { ru: "Примеры использования", en: "Use Cases" },
  case1Title: { ru: "Контекстная реклама, таргетинг и SEO", en: "Contextual Advertising, Targeting and SEO" },
  case1Subtitle: { ru: "Проекты: Metapol, RosIntelCom", en: "Projects: Metapol, RosIntelCom" },
  case1Desc1: { ru: 'Привлечение крупных проектов требует стратегической видимости. Ваши клиенты ищут решения и ваше предложение должно быть на виду. Контекстная реклама мгновенно охватывает "горячую" аудиторию, а SMM-таргетинг точно достучится до ЦА в соцсетях.', en: 'Attracting large projects requires strategic visibility. Your clients are searching for solutions and your offer should be visible. Contextual advertising instantly reaches a "hot" audience, and SMM targeting precisely reaches the target audience on social media.' },
  case1Desc2: { ru: "SEO обеспечивает долгосрочную видимость, снижая зависимость от платного трафика. Это комплексный подход, гарантирующий, что ваша студия будет постоянно в поле зрения целевой аудитории, привлекая стабильный поток квалифицированных лидов.", en: "SEO ensures long-term visibility, reducing dependence on paid traffic. This is a comprehensive approach that guarantees your studio will constantly be in the field of view of the target audience, attracting a steady stream of qualified leads." },

  case2Title: { ru: "Вебсайт расширяет воронку продаж", en: "Website Expands the Sales Funnel" },
  case2Subtitle: { ru: "Проекты: rustelcom.ru, kinokupol.ru, holyspots.vedareader.ru", en: "Projects: rustelcom.ru, kinokupol.ru, holyspots.vedareader.ru" },
  case2Desc1: { ru: "Конверсионный веб-сайт — это не просто красивый фасад, а фундоментальная потребность. Ваш бизнес не может эффективно привлекать и удерживать клиентов без сайта, который активно работает на расширение воронки продаж. Без него вы рискете потерять потенциальных клиентов уже на старте.", en: "A conversion-focused website is not just a beautiful facade, but a fundamental need. Your business cannot effectively attract and retain clients without a website that actively works on expanding the sales funnel. Without it, you risk losing potential clients right from the start." },
  case2Desc2: { ru: "Продуманный веб-ресурс становится неотъемлемой частью коммерческого процесса. Он автоматизирует первый контакт, направляя клиентов дальше по воронке, обеспечивая постоянный приток новых возможностей для вашего бизнеса.", en: "A well-thought-out web resource becomes an integral part of the commercial process. It automates the first contact, guiding clients further down the funnel, ensuring a constant flow of new opportunities for your business." },

  case3Title: { ru: "CRM - принимает и удерживает клиентов", en: "CRM - Accepts and Retains Clients" },
  case3Subtitle: { ru: "Проекты: Metapol, RosIntelCom, FullDome Russia", en: "Projects: Metapol, RosIntelCom, FullDome Russia" },
  case3Desc1: { ru: "CRM-система жизненно необходимы инструмент для масштабирования Вашего бизнеса. Она позволяет эффективно принимать новые запросы, систематизировать информацию и отслеживать каждый этап воронки продаж.", en: "A CRM system is a vital tool for scaling your business. It allows you to effectively accept new requests, systematize information and track every stage of the sales funnel." },
  case3Desc2: { ru: "Наши системы гарантировано эффективно удерживают клиентов, за счет персонализированного подход и внедрения ИИ. Позвольте вашей CRM работать на вас, превращая каждый лид в ценного, долгосрочного партнера.", en: "Our systems guarantee effective client retention through a personalized approach and AI integration. Let your CRM work for you, turning each lead into a valuable, long-term partner." },

  case4Title: { ru: "Мобильное приложение - работа с базой", en: "Mobile Application - Working with the Database" },
  case4Subtitle: { ru: "Проекты: HolySpots, GetCRM", en: "Projects: HolySpots, GetCRM" },
  case4Desc1: { ru: "Это прямой путь к лояльности и повторным продажам. Когда ваш сервис всегда под рукой в смартфоне клиента, это обеспечивает максимальное удобство и делает его незаменимым инструментом для любого бизнеса, нацеленного на долгосрочные отношения.", en: "This is a direct path to loyalty and repeat sales. When your service is always at hand on the client's smartphone, it provides maximum convenience and makes it an indispensable tool for any business focused on long-term relationships." },
  case4Desc2: { ru: 'Понимая потребности ваших клиентов, мы создадим интуитивно понятное и функциональное приложение, которое станет "золотым дном" повторных продаж, превращая существующих клиентов в постоянных и преданных покупателей.', en: 'Understanding your clients\' needs, we will create an intuitive and functional application that will become a "gold mine" of repeat sales, turning existing clients into regular and loyal customers.' },

  case5Title: { ru: "Система управления данными", en: "Data Management System" },
  case5Subtitle: { ru: "Проекты: JivoSite, Трудовик, Печи.ком", en: "Projects: JivoSite, Trudovik, Pechi.com" },
  case5Desc1: { ru: "В основе эффективного бизнеса – единое информационное пространство. Управление складом, магазином, файлами или проектами по отдельности создаёт хаос. Современные облачные решения дают возможности, но их интеграция требует экспертизы.", en: "At the heart of effective business is a unified information space. Managing a warehouse, store, files or projects separately creates chaos. Modern cloud solutions offer possibilities, but their integration requires expertise." },
  case5Desc2: { ru: "Мы создаём комплексные системы управления данными, объединяя склад, магазин, проекты и рекламу в одно решение. Эти системы мы собираем за считанные недели, с полным обучением персонала. Получите контроль над данными для бесперебойной работы и масштабирования вашего бизнеса.", en: "We create comprehensive data management systems, combining warehouse, store, projects and advertising into one solution. We assemble these systems in a matter of weeks, with full staff training. Get control over your data for uninterrupted operation and scaling of your business." },

  // ===== Case (RusIntelCom) =====
  caseSectionTitle: { ru: "Кейс: Цифровизация RusIntelCom", en: "Case Study: RusIntelCom Digitalization" },
  caseSectionSubtitle: { ru: "Поставщик широкого спектра инженерных решений. Сначала были выделены 5 ключевых направлений для цифровой трансформации бизнеса.", en: "A supplier of a wide range of engineering solutions. First, 5 key areas were identified for business digital transformation." },

  caseDir1Title: { ru: "Передовой инжиниринг", en: "Advanced Engineering" },
  caseDir1Desc: { ru: "Инновационные инженерные решения", en: "Innovative engineering solutions" },
  caseDir2Title: { ru: "Техническое обслуживание", en: "Maintenance Support" },
  caseDir2Desc: { ru: "Комплексные инфраструктурные работы", en: "Comprehensive infrastructure works" },
  caseDir3Title: { ru: "Эксплуатация инфраструктуры", en: "Infrastructure Operation" },
  caseDir3Desc: { ru: "Полный цикл работ по обслуживанию зданий", en: "Full cycle of building maintenance" },
  caseDir4Title: { ru: "Холодильное оборудование", en: "Refrigeration Equipment" },
  caseDir4Desc: { ru: "Поставки и монтаж кондеев и чиллеров", en: "Supply and installation of ACs and chillers" },
  caseDir5Title: { ru: "Системы фальшпола", en: "Raised Floor Systems" },
  caseDir5Desc: { ru: "Собственные решения для компонентного пола", en: "Proprietary solutions for raised floors" },

  caseProj1Desc: { ru: "Основной брендовый сайт компании - здесь все услуги и проекты, общая деятельность компании", en: "Main corporate website - all services and projects, general company activities" },
  caseProj2Desc: { ru: "Сайт бизнес-единицы поставок холодильного оборудования - каталог, референсы, сертификаты", en: "Business unit website for refrigeration equipment supply - catalog, references, certificates" },
  caseProj3Desc: { ru: "Поставки фальшпола - новое бизнес направление, обширный каталог, статейный маркетинг", en: "Raised floor supply - new business direction, extensive catalog, content marketing" },

  casePhase2Title: { ru: "Второй этап — разработка сайтов по направлениям", en: "Second Phase - Website Development by Direction" },
  casePhase3Title: { ru: "Третий этап — внутренние системные решения", en: "Third Phase - Internal System Solutions" },

  casePMName: { ru: "Проектное управление", en: "Project Management" },
  casePMDesc: { ru: "Систематизация проектов, разработка шаблонов планов и документов, в существующей Bitrix24", en: "Systematization of projects, development of plan and document templates in existing Bitrix24" },
  caseCRMName: { ru: "Умная CRM-система", en: "Smart CRM System" },
  caseCRMDesc: { ru: "Собирает контакты с сайтов, проводит первоначальную классификацию лидов", en: "Collects contacts from websites, performs initial lead classification" },
  caseAIName: { ru: "Проактивный ИИ маркетинг", en: "Proactive AI Marketing" },
  caseAIDesc: { ru: "Разработка стратегии по каналам, автоматизация создания контента, персонализированные рассылки", en: "Strategy development by channels, content creation automation, personalized mailings" },

  caseVisitWebsite: { ru: "Посетить сайт", en: "Visit Website" },

  // ===== Team =====
  teamTitle: { ru: "Наша команда", en: "Our Team" },
  teamPosPMO: { ru: "Руководитель проектов", en: "PMO" },
  teamPosCTO: { ru: "Технический директор", en: "CTO" },
  teamPosBackend: { ru: "Backend-разработчик", en: "Backend Developer" },
  teamPosDesigner: { ru: "UI/UX Дизайнер", en: "UI/UX Designer" },
  teamName1: { ru: "Евгений Корытный", en: "Evgeny Korytny" },
  teamName2: { ru: "Антон Додонов", en: "Anton Dodonov" },
  teamName3: { ru: "Иван Мякишев", en: "Ivan Myakishev" },
  teamName4: { ru: "Алина Брилина", en: "Alina Brilina" },

  // ===== Testimonials =====
  testimonialsTitle: { ru: "Что говорят клиенты", en: "What Our Clients Say" },
  testimonial1Quote: { ru: "Спасибо за приложение управления MediaCube! Ваша админ-панель помогает эффективно управлять контентом, а чат-бот собирает аудиторию для наших медиа-проектов.", en: "Thank you for the MediaCube management application! Your admin panel helps manage content efficiently, and the chatbot helps gather an audience for our media projects." },
  testimonial1Name: { ru: "Артур Литвинов", en: "Arthur Litvinov" },
  testimonial1Role: { ru: 'Директор "VideoMap.ru"', en: 'Director of "VideoMap.ru"' },
  testimonial2Quote: { ru: "Сделали сайт и админку для управления заказами, добавили чат и теперь мы готовимся захватить мир!", en: "They made a website and order management admin, added chat and now we're preparing to take over the world!" },
  testimonial2Name: { ru: "Максим Газетов", en: "Maxim Gazetov" },
  testimonial2Role: { ru: 'Директор "KinoKupol.ru"', en: 'Director of "KinoKupol.ru"' },
  testimonial3Quote: { ru: "Сделали отличную админ-панель для приложения HolySpots и систему управления проектами VedaVerse. Планируем раскрутить колесо Digital на полную мощность.", en: "They made a great admin panel for the HolySpots app and a system to manage our VedaVerse projects. We plan to spin the Digital wheel at full power" },
  testimonial3Name: { ru: "Георгий Аистов", en: "Georgy Aistov" },
  testimonial3Role: { ru: 'Директор "FullDome.pro"', en: 'Director of "FullDome.pro"' },

  // ===== Contact =====
  contactTitle: { ru: "Контакты", en: "Contact" },
  contactHeading: { ru: "Бесплатная консультация для ваших идей", en: "Free consultation for your ideas" },

  // ===== Project Stages / Timeline =====
  stagesTitle: { ru: "Этапы работы", en: "Work Stages" },
  stagesSubtitle: { ru: "Наш процесс разработки от идеи до реализации", en: "Our development process from idea to implementation" },

  // ===== ContactForm =====
  formName: { ru: "Ваше имя", en: "Your Name" },
  formNamePlaceholder: { ru: "Иван Иванов", en: "John Doe" },
  formOrPhone: { ru: "Или телефон", en: "Or Phone" },
  formMessage: { ru: "Сообщение", en: "Message" },
  formMessagePlaceholder: { ru: "Расскажите коротко о проекте", en: "Briefly describe your project" },
  formSubmit: { ru: "Отправить", en: "Submit" },
  formNoContact: { ru: "Пожалуйста, укажите email или телефон", en: "Please provide an email or phone number" },
  formError: { ru: "Произошла ошибка при отправке заявки. Попробуйте ещё раз.", en: "An error occurred while submitting the form. Please try again." },
  formSuccess: { ru: "Ваша заявка успешно отправлена.", en: "Your request has been successfully submitted." },
  formSuccessHint: { ru: "Если хотите связаться сейчас - нажмите на кнопку.", en: "If you'd like to contact us now - click the button." },
  formTelegram: { ru: "Перейти в телеграм", en: "Go to Telegram" },

  // ===== WebsiteSection =====
  websiteResearch: { ru: "Посмотреть исследование", en: "View the Research" },

  // ===== Lamp =====
  lampHeading: { ru: "Как сделать вебсайт<br/>в 2025 году", en: "How to make a website<br/>in 2026" },

  // ===== AnimatedImage =====
  imageNotFound: { ru: "Изображение+не+найдено", en: "Image+Not+Found" },

  // ===== Projects =====
  projectsTitle: { ru: "Направления разработки", en: "Development Directions" },

  proj1Title: { ru: "Умный чат-бот для вашего бизнеса", en: "Smart Chatbot for Your Business" },
  proj1Li1: { ru: "Автоматизирует рутинные процессы", en: "Automates routine processes" },
  proj1Li2: { ru: "Решает задачи клиентов 24/7", en: "Solves customer tasks 24/7" },
  proj1Li3: { ru: "Повышает конверсию", en: "Increases conversion rates" },
  proj1Li4: { ru: "Интегрируется с вашей CRM", en: "Integrates with your CRM" },
  proj1Li5: { ru: "Запоминает историю взаимодействий", en: "Remembers interaction history" },

  proj2Title: { ru: "Мобильное приложение", en: "Mobile Application" },
  proj2Li1: { ru: "Улучшает клиентский опыт", en: "Improves customer experience" },
  proj2Li2: { ru: "Бесплатное тестирование продукта", en: "Free product testing" },
  proj2Li3: { ru: "Разнообразный функционал", en: "Diverse functionality" },
  proj2Li4: { ru: "Может работать офлайн", en: "Can work offline" },
  proj2Li5: { ru: "Имеет доступ к данным телефона", en: "Has access to phone data" },

  proj3Title: { ru: "Управление бизнесом через админ-панель", en: "Business Management via Admin Panel" },
  proj3Li1: { ru: "Удобное управление данными и процессами", en: "Convenient data and process management" },
  proj3Li2: { ru: "Ролевой доступ для сотрудников", en: "Role-based access for employees" },
  proj3Li3: { ru: "Разнообразная аналитика — графики, таблицы", en: "Diverse analytics - charts, tables" },
  proj3Li4: { ru: "Интеграции с другими сервисами", en: "Integrations with other services" },
  proj3Li5: { ru: "Обучение и поддержка ИИ-инструментов", en: "Training and AI tools support" },

  // ===== ProjectStages =====
  stageInterviewTitle: { ru: "Интервью", en: "Interview" },
  stageInterviewHeading: { ru: "Сбор требований и выявление потребностей", en: "Requirements gathering and needs identification" },
  stageInterviewLi1: { ru: "Проведём несколько встреч", en: "We'll conduct several meetings" },
  stageInterviewLi2: { ru: "Обсудим ваши пожелания", en: "We'll discuss your wishes" },
  stageInterviewLi3: { ru: "Задокументируем бизнес-процессы", en: "We'll document business processes" },
  stageResultLabel: { ru: "Результат:", en: "Result:" },
  stageInterviewResult: { ru: "Детальное техническое задание с полным описанием системы", en: "Detailed technical specification with full system description" },

  stagePrototypeTitle: { ru: "Прототип", en: "Prototype" },
  stagePrototypeHeading: { ru: "Визуализация идеи, создание MVP", en: "Idea visualization, MVP creation" },
  stagePrototypeLi1: { ru: "Создание кликабельного прототипа в Figma", en: "Creating clickable prototype in Figma" },
  stagePrototypeLi2: { ru: "Разработка первой версии приложения", en: "Developing first version of the application" },
  stagePrototypeLi3: { ru: "Тестирование на фокус-группе", en: "Testing on focus group" },
  stagePrototypeResult: { ru: "Макет прототипа и работающий MVP", en: "Prototype mockup and working MVP" },

  stageSolutionTitle: { ru: "Решение", en: "Solution" },
  stageSolutionHeading: { ru: "Внедрение продукта, соответствующего требованиям", en: "Product implementation meeting requirements" },
  stageSolutionLi1: { ru: "Доработка функций и интерфейсов", en: "Refining functions and interfaces" },
  stageSolutionLi2: { ru: "Публикация сайта или приложения на маркетплейсах", en: "Publishing website or application on marketplaces" },
  stageSolutionLi3: { ru: "Настройка рекламы, создание воронок для клиентов", en: "Setting up advertising, creating funnels for clients" },
  stageSolutionResult: { ru: "Работающее решение, достигающее цели", en: "Working solution achieving the goal" },
} as const;
