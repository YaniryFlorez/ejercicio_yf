<template>
   <Cliente/>
    <Producto/>

</template>

<script>
import Cliente from '@/components/Cliente.vue';
import Producto from '@/components/Producto.vue';

export default {
components: {
    Cliente,
    Producto,

  },
  data() {
    return {
      cedula: '',
      nombre: '',
      nombre_prod: '',
      foto: ''
    };
  },
  methods: {
    buscar() {
      // Aquí se implementaría la lógica para buscar el producto por nombre
      // y actualizar la foto.
      
    },
    guardar() {
      // Aquí se implementaría la lógica para guardar la compra.
      console.log('Compra realizada:', this.cedula, this.nombre, this.nombre_prod);
    }
  },
}
</script>

<style scoped>

</style>