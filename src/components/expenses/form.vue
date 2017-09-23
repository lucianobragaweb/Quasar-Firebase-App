<template>
  <form @submit.prevent="submit" class="form">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">R$</span>
        <input ref="amount" v-model="expense.amount" type="number" class="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1">
      </div>
    </div>

    <div class="form-group">
      <div class="input-group">
        <input v-model="expense.description" type="text" class="form-control" placeholder="Descrição" aria-label="Descrição">
      </div>
    </div>

    <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon2">
          <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
        </span>
        <input v-model="expense.date" type="date" class="form-control" placeholder="Data" aria-label="Data" aria-describedby="basic-addon2">
      </div>
    </div>

    <div class="form-group">
      <button class="btn btn-success btn-block">Salvar</button>
    </div>
  </form>
</template>

<script>
import moment from 'moment'
import { uid } from 'quasar'

export default {
  data() {
    return {
      expense: {
        amount: '',
        description: '',
        date: moment().format('DD/MM/YYYY'),
        done: false
      }
    }
  },
  methods: {
    submit() {
      const cloned = JSON.parse(JSON.stringify(this.expense))
      cloned.id = uid()
      this.$store.commit('ADD_EXPENSE', cloned)
      this.reset()

      console.log(moment().format('dd/mm/aaaa'))
    },
    reset() {
      this.expense.amount = '',
        this.expense.description = '',
        this.expense.date = '',
        this.$refs.amount.focus()
    }
  }
}
</script>

<style scoped>
.my-input,
.my-button {
  width: 100%;
  margin-top: 10px
}
</style>
