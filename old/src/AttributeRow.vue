<template lang="html">
  <tr><td class='cell_one'>{{optTwo}}</td><td class = 'cell_two'>{{optOne}}</td></tr>
</template>

<script>
export default {
  props: ['optOne', 'optTwo'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="css">
</style>
