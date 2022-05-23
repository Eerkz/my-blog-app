<template>
  <client-only>
    <div class="w-screen h-screen flex flex-col items-center bg-slate-100">
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
                <li
                  v-if="isLoggedIn"
                  class="block rounded bg-transparent text-blue-700 p-0"
                >
                  Dashboard
                </li></NuxtLink
              >
            </ul>
          </div>
          <input
            v-model="query"
            type="search"
            class="form-control w-full md:w-2/4 my-2 md:my-0 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Seach for a blog..."
          />
          <div>
            <NuxtLink to="/loginPage">
              <button
                v-if="!isLoggedIn"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
              >
                Login
              </button>
            </NuxtLink>
            <NuxtLink to="/registerPage">
              <button
                v-if="!isLoggedIn"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
              >
                Register
              </button>
            </NuxtLink>
            <div
              v-if="isLoggedIn"
              class="flex flex-row items-center justify-center"
            >
              <p class="font-medium mr-2">Logged in as: {{ userName }}</p>
              <LogoutBtn></LogoutBtn>
            </div>
          </div>
        </div>
      </nav>

      <section
        class="flex flex-col items-center justify-center items-center w-screen"
      >
        <div class="flex flex-row flex-wrap w-full items-center justify-center">
          <div
            v-for="post in filterBlogs(posts)"
            :key="post.id"
            class="p-6 lg:w-1/4 md:w-1/2 w-4/5 bg-white rounded-xl gborder-gray-200 shadow-md m-3"
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
import { getDocs, collection } from 'firebase/firestore'
import LogoutBtn from '../components/LogoutBtn.vue'
import PostCard from '~/components/PostCard.vue'
import Readmore from '~/components/Readmore.vue'

export default {
  name: 'IndexPage',
  components: { PostCard, Readmore, LogoutBtn },
  data() {
    return {
      query: '',
      isLoggedIn: '',
      isError: '',
      userName: '',
      posts: [],
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
        blogs.push({
          id: doc.id,
          blog: doc.data(),
        })
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
          const text = el.replace(/\s/g, '').toLowerCase()
          const query = this.query.replace(/\s/g, '').toLowerCase()
          return text.includes(query)
        })
      })
    },
  },
}
</script>
