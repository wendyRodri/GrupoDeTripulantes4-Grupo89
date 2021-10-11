<template>
  <BasicLayouts>
    <section id="home-section">
      <!--carousel-->
      <div
    id="carouselExampleCaptions"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/cat-1000x460.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption">
          <h5>Los productos con la mejor calidad</h5>
          <p>Los encuentras aquí</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/img/mundo-animal-banner-md.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img src="../assets/img/dogs-1000x460.png" class="d-block w-100" alt="..." />
        <div class="carousel-caption">
          <h5>Dale a tu mascota</h5>
          <p>El mejor cuidado y la nutrición adecuada</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
      </div>
      <div id="categories">
        <div
          class="container-products col-12 d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-sm-evenly"
        >
          <div class="card-product col-8 col-sm-5 col-md-5 col-lg-2">
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title btn col-10">Alimentos</h5>
              <div class="categories-img">
                <lottie-player
                  src="https://assets2.lottiefiles.com/packages/lf20_pxb8alme.json"
                  background="transparent"
                  speed="1"
                  style="width: 300px; height: 150px;"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <router-link to="/productos" class="btn btn-primary">consulta aquí</router-link>
            </div>
          </div>
          <div class="card-product col-8 col-sm-5 col-md-5 col-lg-2">
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title btn col-10">Accesorios</h5>
              <div class="categories-img">
                <lottie-player
                  src="https://assets1.lottiefiles.com/packages/lf20_nrowbk7f.json"
                  background="transparent"
                  speed="1"
                  style="width: 300px; height: 150px;"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <router-link to="/productos" class="btn btn-primary">consulta aquí</router-link>
            </div>
          </div>
          <div class="card-product col-8 col-sm-5 col-md-5 col-lg-2">
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title btn col-10">Juguetes</h5>
              <div class="categories-img">
                <lottie-player
                  src="https://assets9.lottiefiles.com/packages/lf20_ygnulsbx.json"
                  background="transparent"
                  speed="1"
                  style="width: 300px; height: 150px;"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <router-link to="/productos" class="btn btn-primary">consulta aquí</router-link>
            </div>
          </div>
          <div class="card-product col-8 col-sm-5 col-md-5 col-lg-2">
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title btn col-10">Útiles de aseo</h5>
              <div class="categories-img">
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_dvek9yf0.json"
                  background="transparent"
                  speed="1"
                  style="width: 300px; height: 150px;"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <router-link to="/productos" class="btn btn-primary">consulta aquí</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>  
  </BasicLayouts>
</template>

<script>
import BasicLayouts from '../layouts/BasicLayouts.vue';
export default {
  name: "Home",
  components: {
    BasicLayouts,
  },
};
</script>
