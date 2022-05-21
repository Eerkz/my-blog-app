<template>
  <div class="flex flex-col bg-slate-200 min-h-screen">
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded w-screen">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <div class="justify-between items-center flex w-auto">
          <ul class="flex mt-4 flex-row space-x-8 mt-0 text-sm font-medium">
            <NuxtLink to="/">
              <li class="block rounded bg-transparent text-blue-700 p-0">
                Home
              </li></NuxtLink
            >
            <NuxtLink to="/protected">
              <li v-if ="isLoggedIn" class="block rounded bg-transparent text-blue-700 p-0">
                Dashboard
              </li></NuxtLink
            >
          </ul>
        </div>
        <div>
          <NuxtLink to="/loginPage">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </NuxtLink>
          <NuxtLink to="/registerPage">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
            >
              Register
            </button>
          </NuxtLink>
        </div>
      </div>
    </nav>
    <section class="flex flex-col items-center justify-center w-screen mt-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md mb-2">
        <h2
          class="my-4 text-3xl font-extrabold text-center text-gray-900 leading-9"
        >
          Welcome Back!
        </h2>
      </div>
      <form
        class="px-4 py-6 lg:w-2/5 w-3/4 h-auto bg-white shadow-xl rounded-lg px-10"
        @submit.prevent="signIn"
      >
        <div class="mb-6">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 leading-5"
            >Your email</label
          >
          <input
            v-model="email"
            type="email"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 leading-5"
            >Your password</label
          >
          <input
            v-model="password"
            type="password"
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            required
          />
        </div>
        <button
          type="submit"
          class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
        >
          Submit
        </button>
        <div v-if="error">
           <ErrorMessage :message="error"></ErrorMessage>
        </div>
      
      </form>
    </section>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import ErrorMessage from '../components/ErrorMessage.vue'
export default {
  components: { ErrorMessage },
    middleware({ store, redirect, app }) {
        const user = app.$fire.auth.currentUser;
        // if already logged in, redirect user to their dashboard
        if (user) {
            return redirect(`/protected/${user.uid}`);
        }
    },
    data() {
        return {
            email: "",
            password: "",
            error: "",
            isLoggedIn: this.$fire.auth.currentUser
        };
    },
    methods: {
        async signIn() {
            try {
                const { user } = await signInWithEmailAndPassword(this.$fire.auth, this.email, this.password);
                this.$router.push(`/protected/${user.uid}`);
            }
            catch (error) {
                this.error = error;
                setTimeout(() => {
                    this.error = "";
                }, [7000]);
            }
        },
    },
} 
</script>
