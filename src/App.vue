<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sets: false,
      home: true,
      info: false,
    }
  },
  methods: {
    check: () => {
    }
  }
}

</script>

<style>
* {
  outline: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>
