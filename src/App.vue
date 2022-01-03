<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Login</router-link> |
     <router-link to="/appointment">Get an Appointment</router-link>
    <router-view/>
  </div>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: lightblue;
  
}
body{
  margin: 0px;
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
