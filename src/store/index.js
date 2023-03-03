import {createStore} from 'vuex'

export default createStore({
    state: {

        //=====main

        //===== aboutMeInfo

        aboutMeTitle: "Я Барсегян Гарегин",
        aboutMeDescription: "Я являюсь frontend-разработчиком из города Липецка. В настоящее время веду трудовую деятельность на фрилансе. Постоянно повышаю свои личностные и профессиональные навыки в веб-разработке.",

        //=====appSkills

        skillsTitle: "Навыки",
        skillsWebDevTitle: "Веб-разработка",
        skillsUiUxTitle: "UI\\UX дизайн",
        skillsFrontDevTitle: "Фронтенд-разработка",
        skillsConsultingTitle: "Консалтинг и SEO-аудит",
        skillsDescription: "Меня вдохновляет создание отличных проектов с людьми, которые так же увлечены созданием чего-то потрясающего, как и я.",
        skillsWebDevDescription: "Javascript, Coffeescript, PHP, Node.js, WebStorm.",
        skillsUiUxDescription: "Photoshop, Figma, прототипирование, каркасное моделирование, исследование пользователей, юзабилити-тестирование.",
        skillsFrontDevDescription: "HTML, CSS, SCSS, Bootstrap, Wordpress.",
        skillsConsultingDescription: "Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg.",

        //=====appExperience

        experienceTitle: "Опыт",
        experienceWebDevTitle: "Веб-разработчик",
        experienceItTitle: "IT специалист",
        experienceDescription: "Уже более года я работаю на фрилансе и помогаю людям создавать качественные и удобные интерфейсы. За это время, работая параллельно с учебой, я внедрял все свои знания в новые проекты.",
        experienceWebDevDescription: "Спроектирован и разработан удобный веб-сайт, в том числе оптимизированная страница оформления заказа, которая увеличила число кликов пользователей и, следовательно, количество покупок клиентов на 20%.",
        experienceItDescription: "Был улучшен код сайта с целью внедрения новых технологий. Была улучшена производительность, логика и стиль сайта.",

        //=====appEducation

        educationTitle: "Образование",
        educationGeekTitle: "GeekBrains, frontend-разработка.",
        educationHtmlTitle: "HTML и CSS. Профессиональная вёрстка сайтов.",
        educationVueTitle: "Профессиональная разработка на Vue.js",
        educationDescription: "Всю свою жизнь я был движим твердой верой в важность образования. Я стараюсь узнавать что-то новое каждый божий день.",
        educationGeekDescription: "В 2021 году прошел полный курс от GeekBrains, frontend-разработка. Один из лучших курсов по IT обучению. Методичный подход, хорошие преподаватели, полный профессионализм.",
        educationHtmlDescription: "В 2022 году прошел курсы по повышению квалификации по профессиональной верстке сайтов. Благодаря уникальной системе обучения данного курса, я узнал много нового, и теперь могу сказать, что уверенно владею HTML и CSS.",
        educationVueDescription: "В 2022 году окончил курс по профессиональной разработке на фреймворке vue.js. Мне очень нравится методичный подход автора данного курса. Хорошая подача информации и подробный рассказ о всех преимуществах данного фреймворка.",
        educationGeekSpan: "Mail Group",
        educationHtmlSpan: "HTML Academy",
        educationVueSpan: "Владилен Минин",

        //=====appFeedback

        feedbackTitle: "Отзывы",
        feedbackDescription: "Ознакомьтесь с отзывами моих клиентов и убедитесь в качестве моих услуг.",

        //=====articles

        firstArticleText: "«Рассматривает проблемы как вызов и любит находить творческие, но подходящие решения. Гарик может разрабатывать свои собственные решения. Хорошо выполняет большую часть работы и имеет привычку проверять результаты работы.»",
        secondArticleText: "«Он всегда будет стараться делать то, что требуется, даже если некоторые задачи не касаются его специальности. Он устанавливает очень высокие стандарты.»",
        thirdArticleText: "«Работая в жесткие, но реалистичные сроки, Гарик всегда выполняет задачи на высоком уровне. Внимательность и аккуратность очевидны даже если остается мало времени. Готов работать дополнительно, чтобы соблюсти срок сдачи работы.»",

        firstArticleName: "Михаил",
        secondArticleName: "Карен",
        thirdArticleName: "Дмитрий",

        firstArticlePosition: "Фрилансер",
        secondArticlePosition: "Джуниор python-разработчик",
        thirdArticlePosition: "Владелец интернет магазина \"БОГЕМКА АРТ\"",

        //=====appContact

        contactTitle: "Контакты",
        contactDescription: "Вы работаете над большими проектами? Я хотел бы помочь вам в реализации задач. Напишите мне письмо и мы начнем проект прямо сейчас! Просто сделайте это.",
    },

    mutations: {

        //=====header

        closeMobileMenu() {
            let mobileMenu = document.querySelector(".mobile-menu-wrapper");
            mobileMenu.style.transform = "translateY(-100%)"
        },

        openMobileMenu() {
            let mobileMenu = document.querySelector(".mobile-menu-wrapper");
            mobileMenu.style.transform = "translateY(0)"
        },

        //=====main

        openModalForm() {
            let modal = document.querySelector(".modal__contact");
            modal.style.display = "block"
        }
    },
})
