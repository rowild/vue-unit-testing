<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/random">Random Number</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  min-width: 360px;
  box-shadow: 0 0 12px 4px rgba(192, 192, 192, 0.15);
  border-radius: 8px;
  min-height: calc(100vh - 82px);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border: 1px solid silver;
  background-color: rgba(255,255,240,0.35);
  box-shadow: 0 0 12px 4px rgba(192, 192, 192, 0.3);
  padding: 12px 16px;
  border-radius: 4px;
  margin-top: 20px;
  outline: none;
  color: black;
  transition: background-color .3ms;
}

button:hover {
  background-color: rgba(255,255,240,05);
}

button:active {
  box-shadow: 0 0 12px 4px rgba(192, 192, 192, 0.45);
}

.number {
  display: block;
  border: 1px solid rgba(192,192,192,0.5);
  border-radius: 4px;
  padding: 4px 6px;
  color: grey;
  max-width: 80px;
  margin: 0 auto;
  /* text-align: center; /* already defined in #app */
}
</style>
