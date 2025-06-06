<template>
  <div>
    <Candidato @agregar="agregarCandidato"/>
    <ListaCandidato :candidatos="ListaCandidato"/>
  </div>
</template>

<script>
import Candidato from "@/components/Candidato.vue";
import ListaCandidato from "@/components/ListaCandidato.vue";
export default {
    data() {
    return {
      ListaCandidato: [],
    };  
    },
  components: {
    Candidato,
    ListaCandidato,
  },
  methods: {
   agregarCandidato(nuevoCandidato) {
      this.ListaCandidato.push(nuevoCandidato);
    },
  },

};
</script>

<style>
</style>