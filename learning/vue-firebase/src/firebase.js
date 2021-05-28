import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyDZ1lxgzAOIHMLfPBBVymLe6Se5Jkd2eRs",
    authDomain: "vuecli-firebase.firebaseapp.com",
    projectId: "vuecli-firebase",
    storageBucket: "vuecli-firebase.appspot.com",
    messagingSenderId: "1011079889228",
    appId: "1:1011079889228:web:9c4b5b596877cc349a4fe9",
    measurementId: "G-674C2BRZ5N"
}

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection('users');

export const createUser = user => {
    return usersCollection.add(user);
}
export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}
export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user);
}
export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}
export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
}