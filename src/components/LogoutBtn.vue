<template>
  <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
    @click="SignOut"
  >
    Logout
  </button>
</template>

<script>
export default {
  methods: {
    async SignOut() {
      await this.$fire.auth.signOut()
      if (this.$route.path === '/') {
        location.reload()
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>
