<template>
  <ul
    id="card-container-products"
    class="d-flex flex-column
      align-items-center
      flex-sm-row flex-sm-wrap justify-content-md-between justify-content-lg-start"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      class="col-10 col-sm-5 col-md-3 col-lg-3"
    >
      <div class="card-prod text-center" :data-target="item.categoria.titulo">
        <h5 class="card-title">{{ item.nombre }}</h5>
        <div class="product-image-container">
          <img :src="API_URL + item.imagen[0].url" alt="item.nombre" />
        </div>
        <p class="card-text">
          Precio: <span class="price">${{ item.precio }}</span>
        </p>
        <a class="card-link btn btn-success" target="_blank" href="https://api.whatsapp.com/send?phone=573222209054">Comprar</a>
        
      </div>
    </li>
  </ul>
</template>

<script>
import { API_URL } from "../utils/constants";
import { ref, onMounted } from "vue";
import { getProducts } from "../api/products";

export default {
  name: "productCard",
  setup() {
    let items = ref(null);
    onMounted(async () => {
      const responseProducts = await getProducts(40);
      items.value = responseProducts;
    });
    return {
      items,
      API_URL
    };
  },
};
</script>

<style>
.product-image-container img{
 max-height:30vh ;
  width: auto;

  }
.card-prod{

}
</style>
