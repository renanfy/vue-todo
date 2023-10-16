import { createStore } from 'vuex'

export default createStore({
  state: {
    tarefas: [
      { id: 1, titulo: 'teste', concluido: true },
      { id: 2, titulo: 'testefalse', concluido: false }
    ]
  },
  getters: {
  },
  mutations: {
    adicionaTarefa(state, titulo) {
      if (titulo) {
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false,
        });
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
