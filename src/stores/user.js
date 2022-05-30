import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        loggedIn: !!document.cookie,
        userEmail: "",
        emailInput: "",
        passwordInput: "",
        errorMessage: ""
    }),
    getters: {
        signup: (state) => state.stage++
    },
    actions: {
        login(email) {
            this.loggedIn = true
            this.userEmail = email
            document.cookie = `loggedIn=true; email=${email}`
            console.log(document.cookie)
        },
        emailValue(value) {
            this.emailInput = value
        },
        passwordValue(value) {
            this.passwordInput = value
        },
        error(code) {
            this.errorMessage = code
        }
    }
})
