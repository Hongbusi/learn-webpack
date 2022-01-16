<template>
  <h2>Hello Vue</h2>
  <hello-world />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },

  data() {
    return {
      title: 'Hello Vue'
    }
  }
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
