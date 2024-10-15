<template>
  <div class="products-view">
    <h2>Product List</h2>
    <ProductForm @add-product="addProduct" />
    <ProductList :products="products" @edit-product="editProduct" />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductForm,
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
    },
    editProduct({ index, product }) {
      this.$set(this.products, index, product);
    }
  }
};
</script>

<style scoped>
.products-view {
  background-color: #2c2c2c; /* Dark background */
  color: #ff69b4; /* Hot pink text */
  padding: 20px;
  border-radius: 10px;
  width: 1000px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.products-view:hover {
  background-color: #1c1c1c; /* Darker background on hover */
  color: #ffffff; /* Change text color on hover */
}

h2 {
  border-bottom: 2px solid #ff69b4; /* Hot pink border */
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.8rem;
}

.product-item {
  background-color: rgba(255, 105, 180, 0.1); /* Light pink background for product items */
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  transition: transform 0.2s;
}

.product-item:hover {
  transform: translateY(-3px); /* Slight lift effect on hover */
}

button {
  background-color: #ff69b4; /* Hot pink button */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff1493; /* Darker pink on hover */
}
</style>
