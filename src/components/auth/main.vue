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

export default {
    name: 'auth',
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
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        submit() {
            const { email, password } = this

            if (email !== '' && password !== '') {
                this.$auth.signInWithEmailAndPassword(
                    email, password
                )
            }

        }
    },
    mounted() {
        this.$auth.onAuthStateChanged(user => {
            if (user) {
                this.$router.push({ path: '/' })
            }
        })
    }
}
</script>

<template>
    <q-layout>

        <form @submit.prevent="submit">
            <input type="email" v-model="email" placeholder="e-Mail">
            <input type="password" v-model="password" placeholder="Password">
            <button class="primary" type="submit">Login</button>
        </form>
    </q-layout>
</template>
