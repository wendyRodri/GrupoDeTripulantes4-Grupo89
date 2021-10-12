<template>
  <BasicLayouts>
    <section id="form-contact">
    <div
      id="main-form-container"
      class="d-flex flex-column align-items-center col-10 col-lg-5 col-md-6 col-sm-8"
    >
      <p id="contact-title">Contacta con nosotros</p>
      <form class="d-flex flex-column align-items-center col-12" @submit.prevent="contact">
        <div class="col-10">
          <label for="nameUser" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nameUser"
            aria-describedby="nameUser"
            placeholder="Nombre"
            v-model="formData.nombre"
            :class="{ error: formError.nombre }"
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
            v-model="formData.apellido"
            :class="{ error: formError.apellido }"
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
            v-model="formData.telefono"
            :class="{ error: formError.telefono }"
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
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="col-10">
          <label for="message" class="form-label">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10" class="form-control"
            v-model="formData.mensaje"
            :class="{ error: formError.mensaje }"
          >

          </textarea>
        </div>
        <button type="submit" class="btn btn-primary" 
          :class="{ loading }"
        >Enviar</button>
      </form>
    </div>
    </section>
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import * as Yup from 'yup';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { contactApi } from '../api/user';
import { setTokenApi, getTokenApi } from '../api/token';
export default {
  name: 'Contact',

  components: {
    BasicLayouts,
  },

  setup() {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    const router = useRouter();
    const token = getTokenApi();

    onMounted(() => {
      if (token) return router.push('/');
    });

    const schemaForm = Yup.object().shape({
      nombre: Yup.string().required(true),
      apellido: Yup.string(),
      telefono: Yup.number().required(true),
      email: Yup.string().email(true),
      mensaje: Yup.string().required(true)
    });

    const contact = async () => {
      formError.value = {};
      loading.value = true;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });

        try {
          const response = await contactApi(formData.value);
          alert("Mensaje recibido");
          //router.push('/');
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
      loading.value = false;
    };

    return {
      formData,
      formError,
      loading,
      contact,
    };
  },
};
</script>

