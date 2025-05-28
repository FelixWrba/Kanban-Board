<template>
    <main class="page-container">
        <h1>{{ $t('about.title') }}</h1>
        <h2>{{ $t('about.contact') }}</h2>
        <form @submit.prevent="sendMail()">
            <label for="name">{{ $t('about.name') }}</label>
            <input type="text" id="name" v-model="name" required autocomplete="off">
            <label for="subject">{{ $t('about.subject') }}</label>
            <input type="text" id="subject" v-model="subject" required autocomplete="off">
            <label for="body">{{ $t('about.message') }}</label>
            <textarea id="body" v-model="body" required></textarea>
            <button type="submit" class="btn">{{ $t('about.send') }}</button>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const subject = ref('');
const body = ref('');

function sendMail() {
    const url = `mailto:fmwrba@gmail.com?subject=${encodeURIComponent('Kanban Board Contact: ' + subject.value)}&body=${encodeURIComponent(body.value + '\n\nThis Message was sent by ' + name.value)}`;
    window.open(url, '_blank');
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

input, textarea {
    flex: 1;
}

textarea {
    resize: vertical;
}
</style>