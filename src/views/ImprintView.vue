<template>
    <main class="imprint">
        <h1>{{ $t('imprint.title') }} <router-link to="/">Kanban Board</router-link></h1>
        <h2>{{ $t('imprint.responsible') }}</h2>
        <p>Felix Wrba</p>
        <p>{{ $t('imprint.contact') }}: fmwrba@gmail.com</p>
        <h2>{{ $t('imprint.copyright') }}</h2>
        <p>{{ $t('imprint.copyrightText') }}</p>
        <h2>{{ $t('imprint.assets') }}</h2>
        <ul>
            <li>JavaScript Framework: <a href="http://vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>
            </li>
        </ul>
    </main>
</template>

<style scoped>
.imprint {
    margin: 16px 64px;
    user-select: text;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: -0.1ch;
}

p {
    line-height: .9em;
}

a {
    text-decoration: underline;
}
</style>