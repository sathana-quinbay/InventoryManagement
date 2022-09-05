<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  // mounted()
  // {
  //   console.log(this.$ipAdress)
  // }
}


</script>

<style>
*{
  margin: 0;
  font-family: nunito,sans-serif;
  padding: 0;
}
body,html{
  width: 100vw;
  height: 100vh;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: white;
}
</style>
