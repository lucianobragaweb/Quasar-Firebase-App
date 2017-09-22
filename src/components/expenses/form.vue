<template>
  <form @submit.prevent="submit">
    <input ref="amount" class="my-input" type="number" v-model="expense.amount" placeholder="R$"/>
    <input class="my-input" type="text" v-model="expense.description" placeholder="Descrição"/>
    <input class="my-input" type="date" v-model="expense.date" placeholder="Data"/>
    <button class="primary my-button">Salvar</button>
  </form>
</template>

<script>
import moment from 'moment'
import { uid } from 'quasar'

export default {
  data(){
    return{
      expense: {
        amount: '',
        description: '',
        date: moment().format('YYYY/MM/DD'),
        done: false
      }
    }
  },
  methods: {
    submit(){
      const cloned = JSON.parse(JSON.stringify(this.expense))
      cloned.id = uid()
      this.$store.commit('ADD_EXPENSE', cloned)
      this.reset()
    },
    reset(){
      this.expense.amount = '',
      this.expense.description = '',
      this.expense.date = '',
      this.$refs.amount.focus()
    }
  }
}
</script>

<style scoped>
.my-input, .my-button{
  width: 100%;
  margin-top: 10px
}
</style>
