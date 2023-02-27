<template>
    <div  v-for="product in products" >
        <p>{{product.name_product}}</p>
    </div>
  </template>
<script>

export default {
    data: () => ({
    error: "",
    products: []
  }),

  mounted() {
    fetch("http://localhost:8080/api/product")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.products = result;
      });
  },
}
</script>