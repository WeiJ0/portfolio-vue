<template>
    <div class="md:w-3/4">
        <h2 ref="title" class="title">關於我</h2>
        <article class="py-3 px-8 tracking-wider">
            <section class="profile-card">
                <ul class="list-none">
                    <li>
                        <img src="/photo/avatar.jpg" alt="avatar" class="profile-avatar">
                    </li>
                    <li class="flex flex-col border-b-2 p-2 border-primary group" v-for="(item, key) in contactInfo">
                        <span class="text-primary font-bold">{{ key }}</span>
                        <span class="profile-item">{{ item }}</span>
                    </li>
                </ul>
            </section>
            <p class="profile-description my-4 md:mt-0">
                一開始因為資訊管理系的背景接觸到網站開發，後來對於網頁的呈現有興趣，於是開始自學前端，並且喜歡參與前端相關社群吸收新知以及分享自己的心得。
            </p>
            <p class="profile-description my-4">
                前端、軟體工作經驗為 4 年，目前於愛貝斯網路公司擔任前端工程師一職，負責公司對外專案極少數內部專案的建置。
            </p>
            <p class="profile-description">
                前端可使用 jQuery、Vue.js、React.js 等框架，後端使用 Node.js、ASP.NET C#、PHP 等語言，資料庫使用 Oracle MSSQL Mysql。
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
                'email': 'weijlin850621@gmail.com'
            }
        }
    }
}
</script>

<style scoped>
.profile-card {
    @apply bg-secondary rounded-xl shadow-primary shadow-md md:float-right py-5 px-6 md:ml-5
}

.profile-avatar {
    @apply rounded-full w-32 h-32 mx-auto
}

.profile-description {
    @apply text-xl leading-8
}

.profile-item {
    @apply text-white text-hover
}
</style>