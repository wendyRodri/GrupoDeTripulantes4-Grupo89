<template>
  <BasicLayout>
    <section id="shop-description">
      <h2 class="text-center" id="main-title-info">Quienes somos</h2>
      <div class="row col-10" id="main-cont-info">
        <div class="col-md-2 d-none d-md-block">
          <img
            src="../assets/img/signo-de-hotel-para-mascotas-de-un-perro-con-una-estrella-y-huellas.png"
            alt=""
          />
        </div>
        <div class="col-md-8 col-12 position-relative">
          <div class="text-cont">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem sapiente debitis repellendus laborum aspernatur.
              Impedit doloremque fugiat inventore, repellendus magnam rem
              debitis maxime modi! Temporibus natus aperiam iure ratione facere?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              incidunt fuga in qui debitis repudiandae sit nulla adipisci nisi
              nobis omnis obcaecati cupiditate voluptatum libero, labore,
              dolorum laborum eius delectus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatem sapiente debitis
              repellendus laborum aspernatur. Impedit doloremque fugiat
              inventore, repellendus magnam rem debitis maxime modi! Temporibus
              natus aperiam iure ratione facere? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Nostrum incidunt fuga in qui debitis
              repudiandae sit nulla adipisci nisi nobis omnis obcaecati
              cupiditate voluptatum libero, labore, dolorum laborum eius
              delectus!
            </p>
          </div>
        </div>
        <div class="col-md-2 d-none d-md-block align-self-end">
          <div class="cont-img-who-2">
            <img src="../assets/img/cuidado-de-mascotas.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayouts.vue";

export default {
  name: "Info",
  components: {
    BasicLayout,
  },
};
</script>

<style>

</style>
