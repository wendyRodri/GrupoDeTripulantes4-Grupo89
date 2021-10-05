<template>
  <div class="card-prod text-center" :data-target="product.categoria">
    <h5 class="card-title">{{ product.brand }}</h5>
      <div class="product-image-container">
        <img :src="product.image" alt="" />
      </div>
      <p class="card-text">
        Precio: <span class="price">${{ product.price }}</span>
      </p>
      <router-link to="" class="card-link btn btn-success">Comprar</router-link>
  </div>
</template>

<script>
export default {
  name: "productCard",
  props: ["product"],
};
</script>

<style></style>
