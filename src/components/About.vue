<template>
    <div class="md:w-3/4">
        <h2 class="title text-3xl text-primary font-bold mb-5 text-center md:text-left">關於我</h2>
        <article class="py-3 px-8 tracking-wider">
            <section class="bg-secondary rounded-xl shadow-primary shadow-md md:float-right py-5 px-6 md:ml-5">
                <ul class="list-none">
                    <li>
                        <img src="/photo/avatar.jpg" alt="avatar" class="rounded-full w-32 h-32 mx-auto">
                    </li>
                    <li class="flex flex-col border-b-2 p-2 border-primary group" v-for="(item, key, index) in contactInfo">
                        <span class="text-primary font-bold">{{ key }}</span>
                        <span class=" text-white text-hover">{{
                            item }}</span>
                    </li>
                </ul>
            </section>
            <p class="text-xl mt-8 md:mt-0 mb-8 leading-8">
                一開始因為資訊管理系的背景接觸到網站開發，後來對於網頁的呈現有興趣，於是開始自學前端，並且喜歡參與前端相關社群吸收新知以及分享自己的心得，目前參加的社群有：六角學院社群、水球軟體學院社群。
            </p>
            <p class="text-xl leading-8">
                前端、軟體工作經驗為 3 年，目前於義大開發擔任軟體工程師一職，負責公司對內對外系統的維護，以及新專案的開發建置。
                前端可使用 jQuery、Vue.js、React.js 等框架，後端使用 Node.js、ASP.NET C# 等語言，資料庫使用 Oracle MSSQL。
            </p>
        </article>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            contactInfo: {
                '職稱': '前端工程師',
                'email': 'weijlin850621@gmail.com',
                '期望工作地點': '台中'
            }
        }
    }
}
</script>