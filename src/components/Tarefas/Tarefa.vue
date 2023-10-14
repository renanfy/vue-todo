<template>
  <div>
    <v-list-item
      :class="{ 'bg-blue-lighten-4': tarefa.concluido }"
      @click="tarefa.concluido = !tarefa.concluido"
    >
      <template v-slot:prepend="{}">
        <v-list-item-action start>
          <v-checkbox-btn :model-value="tarefa.concluido"></v-checkbox-btn>
        </v-list-item-action>
      </template>

      <v-list-item-title
        :class="{ 'text-decoration-line-through': tarefa.concluido }"
        >{{ tarefa.titulo }}</v-list-item-title
      >
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "Tarefa",
  props: ["tarefa"],
};
</script>

<style>
</style>