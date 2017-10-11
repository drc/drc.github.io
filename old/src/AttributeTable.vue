<template>
<div class="container">
  <table id='interest'>
    <tr>
      <td colspan='2' class='head'>{{title}}</td>
    </tr>
    <attribute-row v-for="i in dataRow" v-bind:key="i.title" v-bind:opt-one="i.data" v-bind:opt-two="i.title"></attribute-row>
  </table>
</div>
</template>

<script>
import AttributeRow from './AttributeRow.vue'

export default {
  components: {
    "attribute-row": AttributeRow
  },
  props: ['title', 'dataRow'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
