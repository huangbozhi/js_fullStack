<template>
  <div>
    <!-- <counter :count="count" v-on:increment="incrementCount" /> -->
    <counter  />
    <!-- <counter-borther :count="count" /> -->
    <counter-borther />
  </div>
</template>

<script>
// 两个组件都要用到count 状态，怎么办
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'

export default {
  name: 'App',
  components: {
    'counter': Counter,
    'counter-borther': CounterBrother,
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
