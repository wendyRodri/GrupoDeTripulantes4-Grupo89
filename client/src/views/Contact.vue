<template>
  <BasicLayouts>
    <section id="form-contact">
    <div
      id="main-form-container"
      class="d-flex flex-column align-items-center col-10 col-lg-5 col-md-6 col-sm-8"
    >
      <p id="contact-title">Contacta con nosotros</p>
      <form class="d-flex flex-column align-items-center col-12">
        <div class="col-10">
          <label for="nameUser" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nameUser"
            aria-describedby="nameUser"
            placeholder="Nombre"
          />
        </div>
        <div class="col-10">
          <label for="lastnameUser" class="form-label">Apellido</label>
          <input
            type="text"
            class="form-control"
            id="lastnameUser"
            aria-describedby="lastnameUser"
            placeholder="apellido"
          />
        </div>
        <div class="col-10">
          <label for="phoneUser" class="form-label">Telefono</label>
          <input
            type="tel"
            class="form-control"
            id="phoneUser"
            aria-describedby="phoneUser"
            placeholder="Telefono"
          />
        </div>
        <div class="col-10">
          <label for="emailUser" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="emailUser"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div class="col-10">
          <label for="message" class="form-label">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10" class="form-control">

          </textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
    </div>
    </section>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from '../layouts/BasicLayouts.vue';
export default {
  name: 'Contact',

  components: {
    BasicLayouts,
  },
};
</script>

