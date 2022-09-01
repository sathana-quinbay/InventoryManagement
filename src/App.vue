<template>
  <div id="app">
    <NavBarComponent ></NavBarComponent> 
       <!-- v-show="" -->
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue';
import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components: {
    NavBarComponent,
    SideBar
}

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: whitesmoke;
}
</style>
