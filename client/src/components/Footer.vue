<template>
  <footer class="d-flex flex-column justify-content-center" id="main-footer">
        <div class="d-flex flex-row col-12 flex-wrap flex-lg-row justify-content-lg-evenly">
            <div class="col-12 col-sm-4 col-md-4 col-lg-1 text-center">
                <h5>Nosotros</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Quienes somos</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Preguntas frecuentes</a>
                    </li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contáctanos</a></li>
                </ul>
            </div>

            <div class="col-12 col-sm-4 col-md-4 col-lg-1 text-center">
                <h5>Productos</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Nutrición</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Accesorios</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Juguetes</a></li>
                </ul>
            </div>

            <div class="col-12 col-sm-4 col-md-4 col-lg-1 text-center">
                <h5>Servicios</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pedidos</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Asesorías</a></li>
                </ul>
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-12 col-lg-5 d-flex flex-column align-items-center">
                <h5>Ubicación</h5>
                <iframe id="map-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.0723742216746!2d-73.77572528524021!3d4.005544097087013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e3914e92f6ced%3A0xb4acfb050b683646!2sPlaza%20de%20Mercado%20Centenaria!5e0!3m2!1ses-419!2sco!4v1632093512607!5m2!1ses-419!2sco"
                    style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column flex-lg-row col-lg-12 justify-content-lg-between" id="social-footer">
            <p class="order-1 order-lg-0 text-center">&copy; 2021. All rights reserved.</p>
            <ul class="list-unstyled d-flex flex-row justify-content-evenly order-0 order-lg-1">
                <li class="ms-3">
                    <a class="link-dark" href="https://www.facebook.com/Mundo-animal-pet-shop-109439561382295">
                        <i class="bi bi-facebook"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="link-dark" href="https://www.instagram.com/mundo_animalps/">
                        <i class="bi bi-instagram"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="link-dark" href="https://api.whatsapp.com/send?phone=34123456789">
                        <i class="bi bi-whatsapp"></i>
                    </a>
                </li>
            </ul>
        </div>
  </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>

</style>