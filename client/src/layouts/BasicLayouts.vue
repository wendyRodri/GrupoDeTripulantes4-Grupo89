<template>
  <main>
      <Menu />
      <div>
          <slot />
      </div>
      <Footer />
  </main>
</template>

<script>
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "BasicLayouts.vue",
    components: {
        Menu,
        Footer
    },

};
</script>

<style>

</style>