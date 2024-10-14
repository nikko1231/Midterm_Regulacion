<template>
    <div>
      <h1>Product Management</h1>
      <ProductForm @add-product="addProduct" />
      <ProductList :products="products" @update-product="updateProduct" />
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
        products: [] // Product list will be reactive
      };
    },
    methods: {
      addProduct(product) {
        // Add new product to the list
        this.products.push(product);
      },
      updateProduct({ index, product }) {
        // Update an existing product in the list
        this.$set(this.products, index, product);
      }
    }
  };
  </script>
  