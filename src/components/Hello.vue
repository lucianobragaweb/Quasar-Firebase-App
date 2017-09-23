<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/money.svg" width="30" height="30" class="d-inline-block align-top" alt=""> My diary Expenses
      </a>
    </nav>

    <div class="container">
      <cc-form></cc-form>
      <cc-list></cc-list>
    </div>

  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'

import CcForm from './expenses/form.vue'
import CcList from './expenses/list.vue'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    CcForm,
    CcList
  }
}
</script>

<style scoped>
.container {
  padding: 20px
}
</style>
