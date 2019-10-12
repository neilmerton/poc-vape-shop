<template>
  <div id="app">
    <app-top-bar/>
    <main class="page">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppTopBar from '@/components/app/TopBar.vue'

export default {
  name: 'PocVapeShop',

  components: {
    AppTopBar
  }
}
</script>

<style src="./assets/styles/shop.css">
