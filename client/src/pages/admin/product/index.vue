
<template>
   <div v-for="product of products">
      <p>{{product.name_product}}</p>
   </div>
</template>
<script>
export default {
    data() {
        return {
            products: [],
            errors: [],
        };
    },

    // lấy dữ liệu khi component được tạo thành công
    
    created() {
        axios.get(`http://localhost:8000/products`)
            .then(response => {
                this.products = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
}
</script>