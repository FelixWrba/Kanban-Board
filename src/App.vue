<script setup>
import Navigation from "./layout/Navigation.vue";
import { RouterView } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
 const data = localStorage.getItem('preferences') || '{theme:"auto"}';
 const theme = JSON.parse(data).theme;

 applyTheme(theme);
});

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

<template>
  <Navigation />
  <RouterView />
</template>