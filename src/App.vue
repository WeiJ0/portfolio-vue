
<template>
  <transition>
    <div class="flex h-full min-h-screen w-full scroll-smooth" v-show="show">
      <main class="main w-full bg">
        <div class="container mx-auto">
          <Intro />
          <About />
          <Skill />
          <Experience />
          <Project :isShow="show" />

          <aside class="hidden md:block fixed top-1/4 right-0 w-1/5">
            <span class="text-xl text-primary mr-2">{{ currentPage }}</span>/
            <span class="text-xl  ml-2">{{ totalPage }}</span>
            <ul class="mt-10">
              <li class="my-5 font-bold duration-300 ease-linear text-lg cursor-pointer hover:text-primary" :class="{
                'text-black': currentPage !== index + 1,
                'text-primary': currentPage === index + 1
              }" v-for="(item, index) in blockList" @click="scrollTo(index)">
                {{ item }}</li>
            </ul>
            <Media />
          </aside>
        </div>
      </main>
    </div>
  </transition>
</template>

<script>
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Experience from './components/Experience.vue'
import Project from './components/Project.vue'
import Media from './components/Media.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  name: 'App',
  components: {
    About,
    Intro,
    Skill,
    Experience,
    Project,
    Media
  },
  data() {
    return {
      show: false,
      currentPage: 1,
      totalPage: 6,
      blockList: ['關於我', '技能簡述', '工作經驗', '專案', '練習作品', '接案作品']
    }
  },
  methods: {
    scrollTo(index) {
      const blockElement = document.querySelectorAll('.title')[index];
      gsap.to(window, {
        duration: 1, scrollTo: {
          y: blockElement,
          offsetY: 100,
        }, ease: "power2.out"
      });
    },
    scrollInit() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);

      const blockElements = document.querySelectorAll('.title');

      blockElements.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item, // 觸發物件
          once: false,
          start: "top-=300px",
          end: "bottom bottom",
          onEnter: () => {
            this.currentPage = index + 1;
          },
          onEnterBack: () => {
            this.currentPage = index + 1;
          },
        });
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
      setTimeout(() => {
        this.scrollInit();
      }, 500);
    }, 1000);
  }
}
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>