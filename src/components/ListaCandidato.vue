
<template>
  <div class="container">
  <table>
    <thead>
      <tr>
        <th>Titulo</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Ciudad</th>
        <th>Codigo Postal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(candidato, index ) in candidatos" :key="index">
        <td>{{ candidato.titulo }}</td>
        <td>{{ candidato.nombre }}</td>
        <td>{{ candidato.apellido }}</td>
        <td>{{ candidato.ciudad }}</td>
        <td>{{ candidato.codigoPostal }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
    props: {
        candidatos: {
            type: Array,
            required: true
        }
      
    },
 

}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}

</style>