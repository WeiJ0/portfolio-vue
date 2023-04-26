<template>
    <div class="md:w-3/5 mt-10">
        <h2 ref="title" class="title">工作經驗</h2>
    </div>
    <div class="md:w-3/5 mr-auto px-6 md:px-0 lg:px-10">
        <section class="py-3 mb-5 md:mb-0 lg:px-8 tracking-wider">
            <ul>
                <li v-for="work in works" class="experience-card">
                    <h3 class="experience-title">
                        {{ work.title }} [{{ work.role }}] {{ work.time }}
                    </h3>
                    <ul class="experience-items">
                        <li class="group my-2" v-for="item in work.description">
                            <span class="text-hover after:border-black">{{ item }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            works: [
                {
                    title: '義大開發股份有限公司',
                    role: '軟體工程師',
                    time: '2019/8 ~ 至今',
                    description: [
                        '維護公司露出官網，前台版面呈現及後台功能的開發，及 Google Analytics 的管理及導入，提供企劃人員使用者瀏覽資訊。',
                        '線上購物網站維護及功能開發，串接聯信金流 。',
                        '活動頁面建置，透過網頁拉進行銷及使用者間的距離。',
                        '公司 APP 開發及維護，使用 Cordova 建置雙平台行動應用程式。',
                        '簡易相關數據蒐集及建置報表供使用者瀏覽數據。'
                    ]
                },
            ]
        }
    }

}
</script>

<style scoped>
    .experience-card{
        @apply rounded-lg border-2 border-primary p-4 lg:p-8 my-4
    }
    .experience-title{
        @apply p-2 rounded-md inline-block text-xl font-bold text-primary
    }
    .experience-items{
        @apply mt-5 mx-3 px-4 lg:px-10 list-disc
    }
</style>