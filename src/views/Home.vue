<template>
    <MainNav></MainNav>
    <FocusSection></FocusSection>
    <Special></Special>
    <BlogList></BlogList>
    <Footer></Footer>
</template>

<script setup lang="ts" name="Home">
import MainNav from '@/components/nav/MainNav.vue';
import FocusSection from '@/components/home/FocusSection.vue';
import Special from '@/components/home/Special.vue';
import BlogList from '@/components/home/BlogList.vue';
import Footer from '@/components/home/Footer.vue';
</script>

<style scoped></style>