import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
}

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
        this.storage = app.storage()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    authorize(setCurrentUser) {
        return this.auth.onAuthStateChanged(setCurrentUser)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
    }

    addUserData(address, phone, birthday, question1, answear1, question2, answear2, question3, answear3) {
        if (!this.auth.currentUser) {
            return alert('Access denied')
        }

        return this.db.doc(`jetcake-miedzyslowami-project/${this.auth.currentUser.uid}`).set({
            address, phone, birthday, question1, answear1, question2, answear2, question3, answear3
        })
    }

    addUserAvatar(avatar) {
        if (!this.auth.currentUser) {
            return alert('Access denied')
        }
        return this.storage.ref(`avatars/${this.auth.currentUser.uid}`).put(avatar)
    }

    async getUserData() {
        if (!this.auth.currentUser) {
            return alert('Access denied')
        }
        return this.db.doc(`jetcake-miedzyslowami-project/${this.auth.currentUser.uid}`).get().then((doc) => {
            if (doc.exists) {
                return doc.data()
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!")
            }
        }).catch(function (error) {
            console.log("Error getting document:", error)
        });
    }

    async getUserAvatar() {
        if (!this.auth.currentUser) {
            return alert('Access denied')
        }
        return this.storage.ref(`avatars/${this.auth.currentUser.uid}`).getDownloadURL().then((url) => {
            if (url) {
                return url
            }
            else {
                console.log("No avatar exists")
            }
        }).catch(function (error) {
            console.log("Error getting avatar:", error)
        })
    }

    getCurrentUser() {
        return this.auth.currentUser.email
    }
}

export default new Firebase()
