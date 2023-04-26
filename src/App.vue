
<template>
  <transition>
    <div class="flex h-full min-h-screen w-full scroll-smooth" v-show="show">
      <main class="main w-full bg">
        <div class="container mx-auto 2xl:px-16 min-[1920px]:px-0">
          <Intro />
          <About ref="about" />
          <Skill ref="skill" />
          <Experience ref="experience" />
          <Blog ref="blog" />
          <Project :isShow="show" ref="project" />
          <Aside :currentPage="currentPage" :blockList="blockList" @scroll-to="scrollTo" />
        </div>
      </main>
    </div>
  </transition>
</template>

<script>
import Aside from './components/Aside.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Experience from './components/Experience.vue'
import Project from './components/Project.vue'
import Blog from './components/Blog.vue'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  name: 'App',
  components: {
    Aside,
    About,
    Intro,
    Skill,
    Experience,
    Project,    
    Blog
  },
  data() {
    return {
      show: false,
      currentPage: 1,
      blockList: []
    }
  },
  methods: {
    scrollTo(element) {
      gsap.to(window, {
        duration: 1, scrollTo: {
          y: element,
          offsetY: 100,
        }, ease: "power2.out"
      });
    },
    scrollInit() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);

      this.blockList.forEach((item, index) => {
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
    },
    asideInit() {
      let items = [];
      let refs = [];
      Object.keys(this.$refs).forEach(item => {
        refs.push(this.$refs[item].$refs);
      })
      refs.forEach(item => {
        for (let key in item) {
          if (key.includes('title')) {
            items.push(item[key]);
          }
        }
      });
      this.blockList = items;
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
      this.$nextTick(() => {
        this.asideInit();
        this.scrollInit();
      });
    }, 500);
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