<template>
  <div id="app">
    <ProductForm @add-product="addProduct" />
    
    <!-- ProductList Component to display and edit products -->
    <ProductList :products="products" @update-product="updateProduct" />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductForm, // Comma after each component
    ProductList
  },
  data() {
    return {
      products: [] // Array to hold the products
    };
  },
  methods: {
    addProduct(product) {
      this.products.push(product); // Add new product to list
    },
    updateProduct({ index, product }) {
      this.$set(this.products, index, product); // Update product in list
    }
  }
};
</script>
