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
            <h2>¡Bienvenido a Mundo Animal!</h2>
            <p>
              Somos un emprendimiento familiar que nació del amor por las mascotas, en casa vivimos con Marcela, -un alcaravan que llegó un día a casa herido, lo curamos y cuidamos pero cuando estuvo listo para marcharse ya no quería despegarse de nosotros- y Juana, -nuestra gata consentida-.
            </p>
            <p>  
              A la hora de comprar el alimento de ellas vimos como era difícil encontrar todo en un mismo lugar, por eso creamos Mundo Animal, dónde puedes seleccionar los mejores productos desde la comodidad de tu casa y con solo un click podrán tener todo lo que tus mascotas quieran en la comodidad de tu hogar.
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
