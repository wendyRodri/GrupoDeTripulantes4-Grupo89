<template>
  <BasicLayouts>
    <section id="products-section" class="d-flex flex-column">
      <div class="d-flex flex-md-column flex-lg-row flex-lg-wrap">
        <div
          id="product-nav"
          class="
            col-md-12 col-lg-2
            d-none d-md-flex flex-md-row flex-lg-column justify-content-md-evenly justify-content-lg-start align-items-lg-center
          "
        >
          <p id="menu-prod-title" class="d-md-none d-lg-block">Categorías</p>
          <button class="btn btn-primary" v-for="categoria in categorias" :key="categoria.id" v-on:click="filterCategories">
              {{categoria.titulo}}
          </button>
        </div>
        <div id="products-content" class="col-12 col-md-11 col-lg-10">
          <productCard />
        </div>
      </div>
    </section>
  </BasicLayouts>
</template>

<script>
import  { ref, onMounted} from 'vue';
import { getCategoriesApi } from '../api/category';
import BasicLayouts from "../layouts/BasicLayouts.vue";
import productCard from "../components/productCard.vue";

export default {
  name: "Category",
  components: {
    BasicLayouts,
    productCard,
  },
  setup() {
    let categorias = ref(null);
    
    onMounted( async () => {
      const response = await getCategoriesApi();
      categorias.value = response;
    });

    const filterCategories = (e) => {
      const button = e.target;
      const card = document.querySelectorAll(".card-prod");
      card.forEach((el) => {
        
        if (el.dataset.target !== button.innerHTML) {
          el.parentNode.classList.add('d-none');
          
        } else {
         el.parentNode.classList.remove('d-none');
        }
      });
    }
     return{
       categorias,
       filterCategories
     }
  },
};
</script>
  
<style>
</style>
