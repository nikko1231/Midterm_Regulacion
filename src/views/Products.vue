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
  background-color: #e1bee7;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
