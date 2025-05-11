<script setup>

</script>

<template>
    <main>
        <h1><span class="green">404</span> Not found</h1>
        <p>The requested file could not be found on this server.</p>
        <router-link to="/" class="link-btn">Return to home page</router-link>
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