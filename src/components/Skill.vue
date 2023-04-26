<template>
    <div class="md:w-3/5 mt-20">
        <h2 ref="title" class="title">技能簡述</h2>
        <section class="flex flex-col">
            <div class="w-full flex flex-col md:flex-row items-center" v-for="skill in skills">
                <div class="skill-name">{{ skill.name }}
                </div>
                <ul class="p-3 md:pl-8 md:w-3/4">
                    <li class="my-1 group" v-for="item in skill.content">
                        <span class="after:border-black text-hover">{{ item }}</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Skill',
    data() {
        return {
            skills: [
                {
                    name: 'WEB',
                    content: [
                        '熟悉 HTML5、CSS3',
                        '手寫 RWD 響應式網站',
                        '熟悉 Bootstrap4、5框架，客製進行開發',
                        '能夠使用 Tailwind CSS 框架',
                        '能夠使用 SCSS 預處理器進行開發',
                        '初步了解 SEO 搜尋引擎優化、結構化資料',
                        '有使用過 Google Analytics、Google Tag Manager、Google Search Console 工具',
                    ]
                },
                {
                    name: 'JavaScript',
                    content: [
                        '熟悉 JavaScript 語法並可以使用 ES6 語法開發',
                        '熟悉 AJAX、JSON、RESTful API、使用 Postman 測試 API',
                        '能夠使用 Gulp、Vite 等自動化工具',
                        '能夠使用 jQuery、Vue.js、React Hooks 等框架',
                        '使用過 Vue Cli、Create-React-App 進行 SPA 開發',
                        '能夠使用 Vue-Router、React-Router 進行前端路由管理',
                        '使用過 Next.js 搭配 React Hooks 進行開發',
                    ]
                },
                {
                    name: 'BackEnd',
                    content: [
                        '使用過 Node.js + Express 建置伺服器並連結 supaBase 或其他 postgresql 開發 API',
                        '能夠使用 ASP.NET C# 連結資料庫進行後台功能及前台呈現資料 API 的開發。 ',
                        '能夠使用 Oracle SQL 語法進行資料庫操作',
                        '串接第三方應用程式 API 進行開發： Line Notify & Line Message API',
                        '使用過 SQL Server 內建 SSIS 管理工具進行資料庫資料處理，及 Windows 排程工具搭配 Winform 程式進行處理。'
                    ]
                },
                {
                    name: 'Others',
                    content: [
                        '使用過 Nodejs 進行圖片檔上傳至伺服器進行自動壓縮、爬蟲及網頁測試等功能。',
                        '使用過 Electron.js  & Winform 進行桌面程式開發',
                        '使用過 Google Scripts 進行 ServerLess 的 WebHooks 開發',
                        '使用過 Apache Cordova 進行跨平台 App 開發',
                    ]
                }
            ]
        }
    }
}
</script>

<style>
    .skill-name{
        @apply p-3 md:w-1/4 text-xl text-center font-bold rounded-md bg-primary text-quaternary
    }
</style>