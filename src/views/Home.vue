<template>
  <div class="container">
    <header class="header">
      <h1>Welcome to the Product Management App</h1>
    </header>
    <main class="main-content">
      <p class="user-name">Nikko Regulacion BSIT 3</p>
      <p class="exam-title">Midterm Exam</p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #ff69b4 30%, #2c2c2c 70%); /* Gradient mix of pink and black */
  background-size: cover;
  background-position: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
}

.header {
  margin-bottom: 20px;
  text-align: center;
}

.main-content {
  text-align: center;
  background-color: FFDBB5;
  color: FFDBB5; /* Dark text for contrast */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.main-content:hover {
  background-color: rgba(255, 20, 147, 0.9); /* Change to a darker pink on hover */
}

.user-name {
  font-size: 1.2rem;
  margin: 10px 0;
}

.exam-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
  border-bottom: 2px solid #2c2c2c; /* Dark border for contrast */
  padding-bottom: 5px;
}
</style>
