<template>
    <div class="home-page">
      <nav>
        <router-link to="/home">Home</router-link> |
        <router-link to="/products">Products</router-link>
      </nav>
      
      <div class="home-content">
        <h1>Welcome, [Your Name]</h1>
        <p>Program: [Your Program]</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  };
  </script>
  
  <style scoped>
  .home-page {
    background-image: url('/path/to/your/background-image.jpg');
    background-size: cover;
    height: 100vh;
    color: white;
  }
  
  nav {
    margin: 20px;
  }
  
  .home-content {
    padding: 50px;
    text-align: center;
  }
  </style>
  