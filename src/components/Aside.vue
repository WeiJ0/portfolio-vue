<template>
    <aside class="hidden md:block fixed top-1/4 right-0 w-1/5">
        <span class="text-xl text-primary mr-2">{{ currentPage }}</span>/
        <span class="text-xl ml-2">{{ totalPage }}</span>
        <ul class="mt-10">
            <li class="block-title" :class="currentPage === index + 1 ? 'text-primary' : 'text-black'"
                v-for="(item, index) in blocksTitle" @click="scrollToElement(index)">
                {{ item }}
            </li>
        </ul>
        <Media />
    </aside>
</template>

<script>
import Media from './Media.vue'

export default ({
    name: 'Aside',
    components: {
        Media
    },
    props: {
        blockList: {
            type: Array,
            default: () => []
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    methods: {
        scrollToElement(index) {
            this.$emit('scrollTo', this.blockList[index]);
        }
    },
    computed: {
        blocksTitle() {
            return this.blockList.map(item => item.innerText);
        },
        totalPage() {
            return this.blockList.length;
        }
    },
})
</script>

<style scoped>
.block-title {
    @apply my-5 font-bold duration-300 ease-linear text-lg cursor-pointer hover:text-primary
}
</style>