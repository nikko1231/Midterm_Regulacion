<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #f3e5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

nav {
  background-color: #7b1fa2;
  padding: 10px;
  border-radius: 5px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
