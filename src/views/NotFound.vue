<script setup>

</script>

<template>
    <main>
        <h1><span class="green">404</span> {{ $t('notFound.title') }}</h1>
        <p>{{ $t('notFound.message') }}</p>
        <router-link to="/" class="link-btn">{{ $t('notFound.action') }}</router-link>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    text-align: center; 
    min-height: 70vh;
}
</style>