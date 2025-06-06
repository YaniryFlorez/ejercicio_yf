<template>
  <div class="container">
    <div class="datos">
      <div class="imagen"> 
        <label for="fotografia">Fotografia</label>
      <img
        :src="fotografia"
        alt="la imagen no se encontró"
        id="fotografia"
      /></div>
      <label for="titulo">Titulo</label>
      <input type="text" v-model="titulo" />
      <label for="nombre">Nombre</label>
      <input type="text" v-model="nombre" />
      <label for="apellido">Apellido</label>
      <input type="text" v-model="apellido" />
      <label for="ciudad">Ciudad</label>
      <input type="text" v-model="ciudad" />
      <label for="postal">Codigo Postal</label>
      <input type="text" v-model="codigoPostal" />
    </div>
    <div class="butones">
      <button @click="buscarCandidato()">Buscar</button>
      <button @click="agregarCandidato()">Agregar</button>
    </div>
  </div>
</template>

<script>
import { consumirAPIFachada } from "@/cliente/candidatoCliente.js";
export default {
  name: "Candidato",
  data() {
    return {
      fotografia: "",
      titulo: "",
      nombre: "",
      apellido: "",
      ciudad: "",
      codigoPostal: "",
    };
  },
  methods: {
    async buscarCandidato() {
      const data = await consumirAPIFachada();
      const candidatosApi = data.results[0];

      this.fotografia = candidatosApi.picture.large;
      this.titulo = candidatosApi.name.title;
      this.nombre = candidatosApi.name.first;
      this.apellido = candidatosApi.name.last;
      this.ciudad = candidatosApi.location.city;
      this.codigoPostal = candidatosApi.location.postcode;
    },

    agregarCandidato() {
        const nuevo = {
            titulo: this.titulo,
            nombre: this.nombre,
            apellido: this.apellido,
            ciudad: this.ciudad,
            codigoPostal: this.codigoPostal,
        };
        this.$emit('agregar', nuevo);
    
    },

    /*validarEntradas() {
      try {
      let numero = 2;
      if (this.nuevoNombre === null) {
        this.mensaje.nombre = "Nombre es Obligatorio";
        numero--;
      };
      this.lista.push(nuevo);
      this.mostrar = true;
      if (this.nuevoApellido === null) {
        this.mensaje.apellido = "Apellido es Obligatorio";
        numero--;
      };
      if (numero === 2){
        return true;
      }else {
        return false;
      }
      }catch(error){
        console.error("Ha ocurriido un problema");
        console.error(error);
        this.mostrar = true;
        this.mensajeFinal= "Ha ocurrido un error del sistema";
      }
    },*/

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
.datos {
  display: flex;
  flex-direction: column;
  width: 300px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}
button {
  margin-top: 10px;
  padding: 10px;
  width: 100px;
}
.imgen{
  display: flex;
  margin-bottom: 10px;
}
.imagen img {
  align-items: left;
  width: 100px;
  height: 100px;
  border-radius: 5%;
}
</style>