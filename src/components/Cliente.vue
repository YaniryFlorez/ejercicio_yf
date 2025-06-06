<template>
  <div class="container">
    <div class="datos">
      <label for="cedula">Cedula</label>
      <input
        type="text"
        id="cedula"
        v-model="cedula"
        placeholder="Ingrese su cedula"
      />
      <label for="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        v-model="nombre"
        placeholder="Ingrese su nombre"
      />
    </div>
    <div class="produc">
      <label for="producto">Producto</label>
      <label for="nombre_prod">Nombre</label>
      <input type="text" id="nombre_prod" v-model="nombre_prod" />
      <label for="foto">Foto</label>
      <img src="" alt="no se encontro la imagen" />
      <button @click="buscar">Buscar</button>
    </div>
    <div class="botones">
      <button @click="guardar">Comprar</button>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      pokemon: null,
      imagenInicial: null,
    };
  },
  methods: {
    async cargarProducto() {
      
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.datos,
.produc {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
}
button {
  width: 100px;
  height: 40px;
  background-color: #b2ccb3;
  color: rgb(20, 19, 19);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>