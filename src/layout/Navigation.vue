<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { HomeIcon, Cog6ToothIcon } from "@heroicons/vue/24/outline";

const isOpen = ref(false);
</script>

<template>
    <nav @mouseover="isOpen = true" @mouseleave="isOpen = false" :class="isOpen ? '' : 'hidden'">
        <div class="links">
            <router-link to="/" @click="isOpen = false">
                <HomeIcon /> Home
            </router-link>
            <router-link to="/settings" @click="isOpen = false">
                <Cog6ToothIcon />Settings
            </router-link>
        </div>
        <div class="legal">
            <router-link to="/about" @click="isOpen = false">About</router-link> • <router-link to="/imprint" @click="isOpen = false">Imprint</router-link>
            <p>&copy;2025 Felix Wrba. All rights reserved.</p>
        </div>
    </nav>
</template>

<style scoped>
nav {
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
    padding: 6px;
    border-radius: 4px;
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