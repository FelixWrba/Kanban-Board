<template>
    <main class="page-container">
        <h1>{{ $t('settings') }}</h1>

        <section class="column">
            <h2>{{ $t('accessability') }}</h2>
            <div>
                <label for="lang">{{ $t('language')}}: </label>
                <select name="lang" id="lang" v-model="preferences.language">
                    <option value="english">{{ $t('english')}}</option>
                    <option value="german">{{ $t('german')}}</option>
                    <option value="slang">{{ $t('slang')}}</option>
                </select>
            </div>
            <div>
                <label for="theme">{{ $t('theme')}}: </label>
                <select name="theme" id="theme" v-model="preferences.theme">
                    <option value="light">{{ $t('light')}}</option>
                    <option value="dark">{{ $t('dark')}}</option>
                    <option value="auto">{{ $t('auto')}}</option>
                </select>
            </div>
        </section>


        <section class="column">
            <h2>{{ $t('data')}}</h2>
            <button class="btn">{{ $t('deleteData')}}</button>
            <button class="btn">{{ $t('exportData')}}</button>
            <button class="btn">{{ $t('importData')}}</button>
            <button class="btn">{{ $t('viewData')}}</button>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const preferences = ref({
    language: 'english',
    theme: 'auto'
});

onMounted(() => {
    const data = localStorage.getItem('preferences');
    if (data) {
        preferences.value = JSON.parse(data);
    }
    applyTheme(preferences.value.theme);
    locale.value = preferences.value.language;
});

watch(preferences, (newPreferences) => {
    localStorage.setItem('preferences', JSON.stringify(newPreferences));
    locale.value = newPreferences.language;
    applyTheme(newPreferences.theme);
}, { deep: true });

function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'auto') {
        const isDarkPrefered = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.setAttribute('data-theme', isDarkPrefered ? 'dark' : 'light');
    }
    else {
        root.setAttribute('data-theme', theme);
    }
}
</script>

<style scoped>
.column {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: fit-content;
}

select {
    border-radius: 4px;
    border-color: var(--acc-c);
    font: inherit;
    outline: transparent;
    background-color: var(--bg-c);
    color: var(--text-c);
}

h2 {
    margin-top: 16px;
}
</style>