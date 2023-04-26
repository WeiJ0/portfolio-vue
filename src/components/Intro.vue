<template>
    <div class="md:w-7/12 relative h-screen flex justify-center items-center">
        <h1 class="web-title">
            Hello <br /> I'm WEIJIE <br />
            <span class="text-2xl font-normal">Front-end Developer</span>
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
            class="bi bi-caret-down-fill icon-triangle"
            viewBox="0 0 16 16">
            <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Intro',
}
</script>

<style scoped>
.web-title {
    @apply font-extrabold tracking-widest text-6xl md:text-8xl text-primary
}

.icon-triangle {
    @apply absolute bottom-24 text-primary animate-bounce 
           w-16 h-16 md:w-24 md:h-24
}
</style>