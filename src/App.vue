<template>
  <CompraView/>
</template>

<script>
import CandidatoView from '@/views/CandidatoView.vue'
import Candidato from '@/components/Candidato.vue'
import CompraView from './views/CompraView.vue';

export default {
  name: 'App',
  components: {
   CandidatoView,
   Candidato,
    CompraView,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
