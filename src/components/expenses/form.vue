<template>
  <form @submit.prevent="submit" class="form">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">$</span>
        <input ref="amount" v-model="expense.amount" type="number" class="form-control" placeholder="Value" aria-label="Value" aria-describedby="basic-addon1">
      </div>
    </div>

    <div class="form-group">
      <div class="input-group">
        <input v-model="expense.description" type="text" class="form-control" placeholder="Description" aria-label="Description">
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
      <button class="btn btn-success btn-block btn-lg">Save</button>
    </div>
  </form>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      expense: {
        amount: '',
        description: '',
        date: moment().format('YYYY/MM/DD'),
        done: false
      }
    }
  },
  methods: {
    submit() {
      this.$db.ref('expenses').push(this.expense)
      this.reset()
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
