<template>
  <header id="main-header" class="sticky-lg-top">
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid align-items-center">
        <router-link
          to="/"
          id="main-logo"
          class="navbar-brand order-2 order-lg-0 d-md-none d-lg-block"
        >
          <img src="../assets/img/logo-mundo-animal-mobile.png" alt="" />
        </router-link>
        <h1 id="main-title" class="d-lg-none order-1 d-md-none d-lg-none">
          <router-link to="/" class="titleMundoAnimal"
            >Mundo Animal</router-link
          >
        </h1>
        <button
          class="navbar-toggler order-0 d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent-2"
          aria-controls="navbarSupportedContent-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>
        <div
          class="collapse navbar-collapse d-md-flex d-md-block d-lg-block"
          id="navbarSupportedContent"
        >
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 flex-row col-md-12 order-md-1 justify-content-md-evenly order-lg-0 col-lg-5"
          >
            <li class="nav-item dropdown">
              <router-link to="/products">Productos</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#map-location">Ubicación</a>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link"
                >Contacto</router-link
              >
            </li>
          </ul>
          <form
            class="d-flex flex-column flex-md-row flex-lg-row col-md-12 order-md-0 order-lg-1 col-lg-5"
            id="form-header"
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success d-sm-block d-none"
              type="submit"
              id="search-button">
              <i class="bi-search"></i>
            </button>
            <button class="btn btn-outline-success" type="submit">
              <router-link to="/login" class="linkBtn">Ingresa</router-link>
            </button>
            <button class="btn btn-outline-success" type="submit">
              <router-link to="/register" class="linkBtn">Regístrate</router-link>
            </button>
            <router-link
          to="/"
          id="main-logo"
          class="navbar-brand order-2 order-lg-0 d-lg-none"
        >
          <img src="../assets/img/logo-mundo-animal-mobile.png" alt="" />
        </router-link>
          </form>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-2">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>
            <ul
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
              id="products-menu"
            >
              <li>
                <router-link class="dropdown-item" to="/products" v-on:click="changeTitle" value="Alimentos">Alimentos</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/products" v-on:click="changeTitle" value="Accesorios">Accesorios</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/products" v-on:click="changeTitle" value="Juguetes">Juguetes</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/products" v-on:click="changeTitle" value="Salud y Belleza">Salud y Belleza</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#map-location">Ubicación</a>
          </li>
          <li class="nav-item">
            <router-link to="/contact"></router-link>
          </li>
        </ul>
        <form class="d-flex flex-column flex-lg-row" id="form-header">
          <div class="col-12 d-flex flex-row">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success d-sm-block"
              type="submit"
              id="search-button"
            >
              <i class="bi-search"></i>
            </button>
          </div>

          <button class="btn btn-outline-success" type="submit">
            <router-link to="/login" class="linkBtn"
              >Ingresa</router-link
            >
          </button>
          <button class="btn btn-outline-success" type="submit">
            <router-link to="/register" class="linkBtn"
              >Regístrate</router-link
            >
          </button>
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getTokenApi, deleteTokenApi } from '../api/token';
import { getCategoriesApi } from '../api/category';

export default {
  name: 'Menu',

  setup() {
    let categories = ref(null);

    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });

    const token = getTokenApi();

    const logout = () => {
      deleteTokenApi();
      location.replace('/');
    };
    
    return {
      token,
      logout,
      categories,
    };
  },
};
</script>


