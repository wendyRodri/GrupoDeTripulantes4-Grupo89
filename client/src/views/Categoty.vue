<template>
  <BasicLayouts>
    <section id="products-section" class="d-flex flex-column">
      <p id="product-title" class="text-center col-12 d-lg-block d-none">PRODUCTOS</p>
      <div class="d-flex flex-md-column flex-lg-row flex-lg-wrap">
        <div
          id="product-nav"
          class="
            col-md-12 col-lg-2
            d-none d-md-flex flex-md-row flex-lg-column justify-content-md-evenly justify-content-lg-start align-items-lg-center
          "
        >
          <p id="menu-prod-title" class="d-md-none d-lg-block">Categorías</p>
          <button
            class="btn btn-primary"
            value="Alimentos"
            v-on:click="changeTitle"
          >
            Alimentos
          </button>
          <button
            class="btn btn-primary"
            value="Accesorios"
            v-on:click="changeTitle"
          >
            Accesorios
          </button>
          <button
            class="btn btn-primary"
            value="Juguetes"
            v-on:click="changeTitle"
          >
            Juguetes
          </button>
          <button
            class="btn btn-primary"
            value="Salud y Belleza"
            v-on:click="changeTitle"
          >
            Salud y Belleza
          </button>
        </div>
        <div id="products-content" class="col-12 col-md-11 col-lg-10">
          
          <ul
            id="card-container-products"
            class="
              d-flex
              flex-column
              align-items-center
              flex-sm-row flex-sm-wrap justify-content-md-between justify-content-lg-start
            "
          >
            <li
              v-for="(item, index) in items"
              :key="index"
              class="col-10 col-sm-5 col-md-3 col-lg-2"
            >
              <productCard :product="item" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from "../layouts/BasicLayouts.vue";
import productCard from "../components/productCard.vue";

export default {
  name: "Category",
  components: {
    BasicLayouts,
    productCard,
  },
  data() {
    const title = "Alimentos";
    const items = [
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Juguetes",
        brand: "juguetes",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
      {
        categoria: "Alimentos",
        brand: "mirringo",
        price: 4300,
        image:
          "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg",
      },
    ];
    return {
      title,
      items,
    };
  },
  methods: {
    changeTitle(e) {
      const title = document.querySelector("#subtitle-category");
      const button = e.target;
      const card = document.querySelectorAll(".card-prod");
      card.forEach((el) => {
        if (el.dataset.target !== button.value) {
          el.parentNode.classList.add("hide");
        } else {
          el.parentNode.classList.remove("hide");
        }
      });
    },
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementsByTagName("div").forEach((el) => {
        if (el.getAttribute("data-target") !== "Alimentos") {
          el.style.display = "none";
        }
      });
    });
  },
};
</script>

<style>
.hide {
  display: none;
}
</style>
