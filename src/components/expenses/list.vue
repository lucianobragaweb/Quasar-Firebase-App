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
        title: 'Confirm?',
        message: 'Do you really want to delete this record?',
        buttons: [
          {
            label: 'Cancel',
            handler() {
              console.log('Disagreed...')
            }
          },
          {
            label: 'Confirm',
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
    toggle(expense) {
      expense.done = !expense.done

      setDone(expense)
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-12">
      <!-- <ul class="list-group">
          <li class="list-group-item" :class='{ "list-group-item-success": expense.done }' v-for="expense in list" @click="toggle(expense)">
            {{ expense.date }} | {{ expense.description }} - {{ expense.amount }}
            <a href="#" @click.prevent="askRemove(expense)" class="btn btn-danger btn-xs pull-right">X</a>
          </li>
        </ul> -->

      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" :class='{ "list-group-item-success": expense.done }' v-for="expense in list" @click="toggle(expense)">
          <h5>$ {{ expense.amount }}
            <small>{{ expense.date }}</small>
            <a href="#" @click.prevent="askRemove(expense)" class="btn btn-danger btn-xs pull-right">X</a>
          </h5>
          
          <!-- <p class="mb-1">{{ expense.description }}</p> -->
          <small>{{ expense.description }}</small>
        </a>
      </div>
    </div>
  </div>
</template>

<style>

</style>
