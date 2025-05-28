<template>
    <main class="page-container">
        <h1>{{ $t('settings.title') }}</h1>

        <section class="column">
            <h2>{{ $t('settings.accessability') }}</h2>
            <div>
                <label for="lang">{{ $t('settings.language') }}: </label>
                <select name="lang" id="lang" v-model="preferences.language">
                    <option value="english">{{ $t('settings.english') }}</option>
                    <option value="german">{{ $t('settings.german') }}</option>
                    <option value="slang">{{ $t('settings.slang') }}</option>
                </select>
            </div>
            <div>
                <label for="theme">{{ $t('settings.theme') }}: </label>
                <select name="theme" id="theme" v-model="preferences.theme">
                    <option value="light">{{ $t('settings.light') }}</option>
                    <option value="dark">{{ $t('settings.dark') }}</option>
                    <option value="auto">{{ $t('settings.auto') }}</option>
                </select>
            </div>
        </section>

        <section class="column">
            <h2>{{ $t('settings.columns') }}</h2>
            <ul class="enabled-columns">
                <li v-for="column in columns">
                    <input type="checkbox" :id="column.id" v-model="column.enabled"><label :for="column.id">{{ column.default ? $t('board.' + column.id) : column.name}}</label>
                </li>
            </ul>
        </section>


        <section class="column">
            <h2>{{ $t('settings.data') }}</h2>
            <button class="btn">{{ $t('settings.deleteData') }}</button>
            <button class="btn">{{ $t('settings.exportData') }}</button>
            <button class="btn">{{ $t('settings.importData') }}</button>
            <button class="btn">{{ $t('settings.viewData') }}</button>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import loadColumns from '../utils/loadColumns';

const { locale } = useI18n();

const preferences = ref({
    language: locale.value,
    theme: 'auto'
});
const columns = ref(loadColumns());

onMounted(() => {
    const data = localStorage.getItem('preferences');
    if (data) {
        preferences.value = JSON.parse(data);
    }
    applyTheme(preferences.value.theme);
});

watch(preferences, (newPreferences) => {
    localStorage.setItem('preferences', JSON.stringify(newPreferences));
    locale.value = newPreferences.language;
    applyTheme(newPreferences.theme);
}, { deep: true });

// save columns onChange in localStorage
watch(columns, newColumns => {
    localStorage.setItem('columns', JSON.stringify(newColumns));
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

h2 {
    margin-top: 16px;
}

.enabled-columns {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.enabled-columns li {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* TOGGLE SWITCH */
.enabled-columns input {
    position: relative;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: var(--secondary-c);
    border-radius: 99px;
    padding: .8em;
    width: 3em;
}

.enabled-columns input::before {
    content: "";
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 6px;
    background-color: var(--acc-c);
    left: .3em;
    top: 50%;
    transform: translateY(-50%);
    transition: all .3s;
}

.enabled-columns input:checked::before {
    left: 100%;
    transform: translateX(calc(-100% - .3em)) translateY(-50%);
    background-color: var(--primary-c);
}
</style>