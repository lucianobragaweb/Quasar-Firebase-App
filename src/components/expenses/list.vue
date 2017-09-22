<script>
import { getExpenses } from '../../persistence'
import { setDone } from '../../persistence'
import { Dialog } from 'quasar'

export default {
  mounted() {
    this.$store.commit('SET_EXPENSES', getExpenses())
  },
  computed: {
    list() {
      return this.$store.state.Expenses.list
    }
  },
  methods: {
    askRemove(expense) {
      const self = this
      Dialog.create({
        title: 'Tem Certeza?',
        message: 'Você deseja realmente excluir este registro?',
        buttons: [
          {
            label: 'Cancelar',
            handler() {
              console.log('Disagreed...')
            }
          },
          {
            label: 'Confirmar',
            handler() {
              self.remove(expense)
            }
          }
        ]
      })
    },
    remove(expense) {
      this.$store.commit('REMOVE_EXPENSE', expense)
    },
    toggle(expense){
      expense.done = !expense.done

      setDone(expense)
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <ul class="list-group">
        <li class="list-group-item" :class='{ "list-group-item-success": expense.done }' v-for="expense in list" @click="toggle(expense)">
          {{ expense.date }} | {{ expense.description }} - {{ expense.amount }}
          <a href="#" @click.prevent="askRemove(expense)" class="btn btn-danger pull-right">X</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>

</style>
