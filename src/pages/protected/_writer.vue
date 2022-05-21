<template>
  <client-only>
    <div
      class="w-screen min-h-screen flex flex-col items-center bg-slate-100 relative"
    >
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
            </ul>
          </div>
          <input
            v-model="query"
            type="search"
            class="form-control block w-2/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0"
            placeholder="Seach for a blog..."
          />
          <div class="flex flex-row items-center justify-center">
            <p v-if="isLoggedIn" class="font-medium mr-2">Logged in as: {{ userName }}</p>
            <LogoutBtn></LogoutBtn>
          </div>
        </div>
      </nav>

      <section
        class="flex flex-col items-center justify-center items-center w-screen"
      >
        <CreateBlog
          v-if="openModal"
          @close="closeModal"
          @getBlogData="createBlog"
        ></CreateBlog>

        <div>
          <button
            type="button"
            class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            @click="showModal"
          >
            Create new blog
          </button>
        </div>
        <div v-if="loading && !isError">
          <svg
            role="status"
            class="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-500 mt-8"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <div v-if="isError">
          <ErrorMessage :message="isError"></ErrorMessage>
        </div>

        <div
          v-if="!loading && !isError"
          class="flex flex-row flex-wrap items-center justify-center w-full"
        >
          <div
            v-for="post in filterBlogs(posts)"
            :key="post.id"
            class="p-6 w-1/4 bg-white rounded-xl gborder-gray-200 shadow-md m-3"
          >
            <PostCard
              :key="post.id"
              :title="post.blog.title"
              :author="post.blog.author"
              :content="post.blog.content"
            ></PostCard>
            <NuxtLink :to="`/posts/${post.id}`">
              <Readmore></Readmore>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </client-only>
</template>

<script>
import { getDocs, collection, doc, setDoc } from 'firebase/firestore'
import LogoutBtn from '~/components/LogoutBtn.vue'
import CreateBlog from '~/components/CreateBlog.vue'
import ErrorMessage from '~/components/ErrorMessage.vue'
import SuccessAlert from '~/components/SuccessAlert.vue'

export default {
  name: 'WriterHome',
  components: { LogoutBtn, CreateBlog, ErrorMessage, SuccessAlert },
  middleware({ store, redirect, app }) {
    if (!app.$fire.auth.currentUser) {
      return redirect('/loginPage')
    }
  },
  data() {
    return {
      query: '',
      author: '',
      loading: true,
      isError: '',
      success: false,
      openModal: false,
      isLoggedIn: '',
      posts: [],
      date: new Date().toDateString().toString(),
    }
  },
  async fetch() {
    const user = this.$fire.auth.currentUser

    if (user) {
      this.isLoggedIn = true
      this.userName = user.displayName
    }
    const blogs = []
    // removed firestore query because store state user displayName returns null despite being defined
    try {
      const querySnapshot = await getDocs(
        collection(this.$fire.firestore, 'blogs')
      )
      querySnapshot.forEach((doc) => {
        // return document id, will be needed to fetch invidiual data for each blog post
        if (doc.data().author === this.userName) {
          blogs.push({
            id: doc.id,
            blog: doc.data(),
          })
        }
      })

      // have success message fade away after 5s
    } catch (error) {
      this.isError = error
    }
    this.loading = false
    this.posts = [...blogs]
  },

  methods: {
    filterBlogs(data) {
      return data.filter((data) => {
        return Object.values(data.blog).find((el, index) => {
          const text = el.trim().toLowerCase()
          const query = this.query.trim().toLowerCase()

          return text.includes(query)
        })
      })
    },
    async createBlog(data) {
      const docData = {
        title: data.title,
        author: this.userName,
        date: this.date,
        content: data.content,
      }
      try {
        await setDoc(doc(this.$fire.firestore, 'blogs', data.title), docData)
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000)
      } catch (error) {
        this.isError = error + '.Please refresh the page'
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
