<template>
  <div>
    <v-col cols="12">
      <v-text-field v-model="campoInput" label="Qual sua tarefa?" outlined clearable
        @keyup.enter="handleAddTarefa"></v-text-field>
    </v-col>

    <v-list select-strategy="classic"> </v-list>
    <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
      <Tarefa :tarefa="tarefa" />
    </div>
  </div>
</template>

<script>
import Tarefa from "../components/Tarefas/Tarefa.vue";

export default {
  name: "Tarefas",
  components: {
    Tarefa,
  },
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa() {
      this.$store.commit('adicionaTarefa', this.campoInput)
      this.campoInput = null;

    }
  }
}
</script>