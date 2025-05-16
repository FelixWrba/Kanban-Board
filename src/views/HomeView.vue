<template>
    <main class="page-container">
        <h1>{{ $t('home.title') }}</h1>
        <KanbanBoard />
    </main>
</template>

<script setup>
import KanbanBoard from "../components/KanbanBoard.vue";
</script>