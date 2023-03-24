<template>
    <div class="md:w-10/12">
        <h2 class="title text-3xl text-center md:text-left text-primary font-bold mb-5">專案</h2>
        <section class="my-12 px-5 flex flex-col">
            <div class="flex flex-col lg:flex-row items-center mb-8 group" v-for="workItem in works" :key="workItem.name">
                <div class="w-full md:w-2/3 lg:w-1/3">
                    <img class="mb-2" :src="imgSrc('works', workItem.img)" :alt="workItem.name">
                </div>
                <div class="lg:w-2/3 px-4 lg:p-10">
                    <a :href="workItem.url">
                        <h3 class="my-4 text-primary font-bold text-xl mb-3"> {{
                            workItem.name }}</h3>
                    </a>
                    <p class="text-hover after:border-black">{{ workItem.description }}</p>
                </div>
            </div>
        </section>

        <h2 class="title text-3xl text-center md:text-left text-primary font-bold mb-5">練習作品</h2>
        <section class="my-12 px-5 flex flex-col">
            <div class="flex flex-col lg:flex-row items-center mb-8 group" v-for="workItem in practise"
                :key="workItem.name">
                <div class="w-full md:w-2/3 lg:w-1/3">
                    <img class="mb-2" :src="imgSrc('practise', workItem.img)" :alt="workItem.name">
                </div>
                <div class="lg:w-2/3 px-4 lg:p-10">
                    <a :href="workItem.url">
                        <h3 class="my-4 text-primary font-bold text-xl mb-3"> {{
                            workItem.name }}</h3>
                    </a>
                    <p class="text-hover after:border-black">{{ workItem.description }}</p>
                </div>
            </div>
        </section>

        <h2 class="title text-3xl text-center md:text-left text-primary font-bold mb-5">接案作品</h2>
        <section class="mb-12 px-5 md:pb-80 xl:pb-96">
            <template v-if="isShow">
                <Carousel :itemsToShow="3" :wrapAround="true" :breakpoints="breakpoints" :transition="500">
                    <Slide v-for="(caseItem, index) in cases" :key="index">
                        <div class="carousel__item">
                            <img class="mb-2" :src="imgSrc('projects', caseItem.img)" :alt="caseItem.name">
                            <a class="my-4 text-primary text-xl pb-1 border-b border-primary" :href="caseItem.url"> {{
                                caseItem.name }}</a>
                        </div>
                    </Slide>
                    <Pagination />
                </Carousel>
            </template>
        </section>
    </div>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
const base = import.meta.env.BASE_URL;

export default {
    name: 'Project',
    props: {
        isShow: Boolean
    },
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data() {
        return {
            baseUrl: base,
            works: [
                {
                    name: "義大遊樂世界官網改版",
                    description: "原網站為 10 年前建置，還使用 Table 作為排版無 RWD 功能。此次導入客製化 Bootstrap 5 當作 UI 框架實現 RWD 功能，並串接 Facebook、Instagram API 顯示於頁面上。並埋入 GA 分析並使用 Google Looker Studio 製作數據報表予企劃相關單位",
                    img: "tp.jpg"
                },
                {
                    name: "專櫃直接銷售平台",
                    description: "原賣場僅有實體銷售門市，為協助提高顧客忠誠及滿意度，開發專櫃直接銷售平台，串接聯合信用卡中心金流服務，讓專櫃人員可以產生訂單直接透過通訊軟體或簡訊提供給顧客進行線上刷卡，再透過宅配或門市取件方式，額外提升公司收入。(因需要內部帳號密碼不方便提供)",
                    img: "mall_sale.jpg"
                },
                {
                    name: "義大 Easy 購 2.0",
                    description: "透過 web app 的方式打造行動會員卡概念，可即時得知消費紀錄、點數紀錄、兌換贈品、使用電子抵用券等功能，讓顧客能更方便使用。APP 使用 Cordova 包裝 Web，後端使用 ASP.NET C# 建置",
                    img: "mall_app.jpg"
                }
            ],
            practise: [
                {
                    name: "高雄旅遊網",
                    url: "https://weij0.github.io/React-Kaohsiung-Travel/",
                    img: "kaohsiung.jpg",
                    description: "使用 Create-React-App 建置，並使用 React-Router 做路由管理，串接高雄市政府 Open API 顯示景點資訊。"
                },
                {
                    name: "程式外包媒合平台",
                    url: "https://wecoding-weij0.vercel.app/",
                    img: "wecoding.jpg",
                    description: "使用 Next.js 建置，後端嘗試使用 Express 串接 Supabase 做資料庫建立 API，最後部屬於 Vercel。"
                },
                {
                    name: "2022 TheF2E Week1 - 滾動視差練習",
                    url: "https://weij0.github.io/2022_TheF2E_Week1/",
                    img: "parallax.jpg",
                    description: "使用 React 建置，配合 GSAP 的 ScrollTrigger 做滾動視差效果。"
                },
                {
                    name: "Line 聊天紀錄分析",
                    url: "https://weij0.github.io/line-chat-analyzer/",
                    img: "line.jpg",
                    description: "使用 Vue 及 Vite 建置，UI 框架使用 Tailwind CSS，使用 File API 讀取使用者上傳的聊天紀錄檔案，並透過 JavaScript 處理資料，最後顯示於頁面上。"
                }
            ],
            cases: [
                {
                    name: "文為科技",
                    img: "buildrome.jpg",
                    url: "https://buildrome.com/",
                },
                {
                    name: "花幻想",
                    img: "flowerfantasy.jpg",
                    url: "https://www.flowerfantasy.com.tw/"
                },
                {
                    name: "眷戀高雄",
                    img: "lovetakao.jpg",
                    url: "https://lovetakao.com.tw/",
                },
                {
                    name: "塑眉專科",
                    img: "smsenka.jpg",
                    url: "https://smsenka.com/"
                },
                {
                    name: "白膠膠鮮耳飲",
                    img: "richsnow.jpg",
                    url: "https://www.richsnow.com.tw/"
                },
                {
                    name: "慶賢客棧",
                    img: "chingshian.jpg",
                    url: "https://www.chingshian.com.tw/"
                },
                {
                    name: "恆申有限公司",
                    img: "henshen.jpg",
                    url: "https://hen-shen.tw/"
                },
                {
                    name: "金禾宇",
                    img: "khdr.jpg",
                    url: "https://khdr.kingholly.com.tw/"
                },
                {
                    name: "韓大夫診所",
                    img: "drhanclinic.jpg",
                    url: "https://www.drhanclinic.com.tw/"
                }
            ],
            breakpoints: {
                360: {
                    itemsToShow: 1
                },
                1024: {
                    itemsToShow: 3.5,
                }
            },
        }
    },
    methods: {
        imgSrc(path, img) {
            return `${this.baseUrl}${path}/${img}`;
        }
    }
}
</script>

<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

@media screen and (min-width:1024px) {
    .carousel__slide {
        opacity: 0.9;
        transform: rotateY(-20deg) scale(0.9);
    }

    .carousel__slide--active~.carousel__slide {
        transform: rotateY(20deg) scale(0.9);
    }

    .carousel__slide--prev {
        opacity: 1;
        transform: rotateY(-10deg) scale(0.95);
    }

    .carousel__slide--next {
        opacity: 1;
        transform: rotateY(10deg) scale(0.95);
    }

    .carousel__slide--active {
        opacity: 1;
        transform: rotateY(0) scale(1.1);
    }
}</style>