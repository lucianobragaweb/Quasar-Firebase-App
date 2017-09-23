import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAscPaJzZprcsqCVTXMoOhklhTpKy1NRic",
    authDomain: "expenses-a16ce.firebaseapp.com",
    databaseURL: "https://expenses-a16ce.firebaseio.com",
    projectId: "expenses-a16ce",
    storageBucket: "expenses-a16ce.appspot.com",
    messagingSenderId: "561637822631"
};

const connection = Firebase.initializeApp(config);

const DB = connection.database()
const AUTH = connection.auth()

export default function install(Vue, { router }){

    AUTH.onAuthStateChanged(user => {
        if(!user){
            router.push({ path: 'auth' })    
        }
    })

    Object.defineProperties(Vue.prototype, {
        $db: {
            get(){
                return DB
            }
        },
        $auth: {
            get(){
                return AUTH
            }
        }
    })
}