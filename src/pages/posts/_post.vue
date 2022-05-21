<template>
  <client-only>
    <div class="w-screen min-h-screen flex flex-col items-center bg-slate-100">
        <div v-if="success" class="fixed top-5 z-100">
        <SuccessAlert></SuccessAlert>
      </div>
      <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded w-screen mb-5"
      >
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
                <li v-if="isLoggedIn" class="block rounded bg-transparent text-blue-700 p-0">
                  Dashboard
                </li></NuxtLink
              >
            </ul>
          </div>
          <div v-if="!isLoggedIn">
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
          <div v-if="isLoggedIn" class="flex flex-row items-center justify-center">
            <p class="font-medium mr-2">Logged in as: {{ userName }}</p>
            <LogoutBtn></LogoutBtn>
          </div>
        </div>
      </nav>
      <div
        class="w-full py-5 px-8 lg:w-1/2 md:w-8/12 sm:w-9/12 bg-white rounded-lg flex flex-col shadow-lg"
      >
        <div v-if="isLoggedIn">
          <EditBlog
            v-if="openModal"
            :current="post"
            @close="closeModal"
            @getNewBlogData="editBlog"
          ></EditBlog>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            @click="showModal"
          >
            Edit blog
          </button>
        </div>
        <div v-if="isError">
          <ErrorMessage :message="isError"></ErrorMessage>
        </div>
        <div v-if="!loading && !isError">
          <div class="mb-5">
            <h1 class="font-bold text-3xl">{{ post.blog.title }}</h1>
            <h1>Author: {{ post.blog.author }}</h1>
            <h1>Date: {{ post.blog.date }}</h1>
          </div>
          <p>{{ post.blog.content }}</p>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import EditBlog from '../../components/EditBlog.vue'
import ErrorMessage from '~/components/ErrorMessage.vue'
import SuccessAlert from '~/components/SuccessAlert.vue'
export default {
  components: { EditBlog, ErrorMessage,SuccessAlert },
  data() {
    return {
      openModal: '',
      title: '',
      id: '',
      post: {},
      loading: true,
      isError: '',
      userName: '',
      isLoggedIn: '',
      success: '',
    }
  },
  async fetch() {
    const user = this.$fire.auth.currentUser

    if (user) {
      this.isLoggedIn = true
      this.userName = user.displayName
    }
    const blogs = []
    try {
      const blogRef = doc( this.$fire.firestore, 'blogs', this.$route.params.post )
      const blogSnap = await getDoc(blogRef)
      if (blogSnap.exists()) {
        this.post = { blog: blogSnap.data(), id: blogSnap.id }
        // check if currently logged in user is the same as the writer
        if (user) {
          this.isLoggedIn = user.displayName === blogSnap.data().author
        }
      } else {
        // if document does not exist, redirect user to home page
        redirect('/')
      }
    } catch (error) {
      this.isError = error
    }
    this.loading = false
    this.posts = [...blogs]
  },
  methods: {
    // eslint-disable-next-line require-await
    async editBlog(data) {
      const postRef = doc(this.$fire.firestore, 'blogs', this.post.id)
      try {
        await updateDoc(postRef, { title: data.title, content: data.content, })
        this.success=true
        setTimeout(() => {
          this.success=false
        },5000)
      } catch (error) {
        this.isError = error + ".Please refresh the page"
      }
    },
    showModal() {
      this.openModal = true
    },
    closeModal() {
      this.openModal = false
    },
  },
}
</script>
