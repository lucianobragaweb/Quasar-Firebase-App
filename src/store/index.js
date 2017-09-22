import Vue from 'vue'
import Vuex from 'vuex'

import { addExpense, removeExpense } from '../persistence'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Expenses: {
            list: []
        }
    },
    mutations: {
        ADD_EXPENSE (state, obj){
            addExpense(obj)
            state.Expenses.list.unshift(obj)
        },
        SET_EXPENSES (state, obj){
            state.Expenses.list = obj
        },
        REMOVE_EXPENSE (state, obj){
            const index = state.Expenses.list.indexOf(obj)

            state.Expenses.list.splice(index, 1)
            removeExpense(obj)
        }
    }
})