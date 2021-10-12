<template>
  <BasicLayouts>
    <div id="register" class="card d-flex flex-column align-items-center">
      <h2>Registro de usuario</h2>
      <form class="ui input-formulario col-10 text-center" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="Nombre de usuario"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Correo eletronico"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Contraseña"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>

        <button
          type="submit"
          class="ui button fluid primary btn btn-primary"
          :class="{ loading }"
        >
          Crear usuario
        </button>
      </form>

      <router-link to="/login">
        Iniciar sesión
      </router-link>
    </div>
  </BasicLayouts>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import * as Yup from 'yup';
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { registerApi } from '../api/user';
import { getTokenApi } from '../api/token';

export default {
  name: 'Register',
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
      if (token) router.push('/');
    });

    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      email: Yup.string()
        .email(true)
        .required(true),
      password: Yup.string().required(true),
    });

    const register = async () => {
      formError.value = {};
      loading.value = true;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        try {
          const response = await registerApi(formData.value);
          router.push('/login');
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
      register,
      formError,
      loading,
    };
  },
};
</script>

<style>
  #register button{
    width:50%;
  }
</style>
