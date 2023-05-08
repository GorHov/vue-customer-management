<template>
  <div id="app">
    <CustomerList/>
  </div>
</template>

<script>
import CustomerList from './components/CustomerList.vue'

export default {
  name: 'App',
  components: {
    CustomerList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
