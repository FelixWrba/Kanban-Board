<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { HomeIcon, Cog6ToothIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
const year = new Date().getFullYear();
</script>

<template>
    <nav @mouseover="isOpen = true" @mouseleave="isOpen = false" :class="isOpen ? '' : 'hidden'">
        <div class="links">
            <router-link to="/" @click="isOpen = false">
                <HomeIcon /> {{ $t('navigation.home') }}
            </router-link>
            <router-link to="/settings" @click="isOpen = false">
                <Cog6ToothIcon />{{ $t('navigation.settings') }}
            </router-link>
        </div>
        <div class="legal">
            <router-link to="/about" @click="isOpen = false">{{ $t('navigation.about') }}</router-link> • <router-link
                to="/imprint" @click="isOpen = false">{{ $t('navigation.imprint') }}</router-link>
            <p>&copy;2025{{ year > 2025 ? '-' + year : '' }} Felix Wrba. {{ $t('navigation.copyright') }}</p>
        </div>
    </nav>
</template>

<style scoped>
nav {
    z-index: 10;
    background-color: var(--bg-c);
    position: fixed;
    transition: all .3s;
    max-width: 300px;
    width: 80%;
    height: 100vh;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.1);
    border-right: 1px solid var(--acc-c);
    padding: 16px;
    padding-left: 0;
}

nav.hidden {
    box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0);
    transform: translateX(-95%);
    animation: vanish 0s .3s both;
}

@keyframes vanish {
    100% {
        opacity: 0;
    }
}

.links {
    display: flex;
    flex-direction: column;
}

.links a {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    border-radius: 0 99px 99px 0;
    transition: all .3s;
}

.links a:hover {
    background-color: var(--secondary-c);
}

.links svg {
    height: 1.5em;
    width: 1.5em;
}

.legal {
    color: var(--acc-c);
    text-align: center;
    font-size: .8em;
    margin-top: 16px;
}

.legal p {
    margin-top: 8px;
}

.legal a:hover {
    text-decoration: underline;
}
</style>