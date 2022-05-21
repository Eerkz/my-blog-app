<template>
  <div
    class="overflow-y-auto overflow-x-hidden bg-gray-400/50 fixed top-0 right-0 left-0 z-10 md:inset-0 w-screen h-screen flex items-center justify-center"
  >
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex justify-between items-start p-4 rounded-t border-b">
          <h3 class="text-xl font-semibold text-gray-900">Create a blog</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="$emit('close')"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <form @submit.prevent="emitBlogData">
          <div class="p-6 space-y-6">
            <div class="mb-6">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Title</label
              >
              <input
                v-model="title"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                for="content"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Content</label
              >
              <textarea
                v-model="content"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter content..."
              ></textarea>
            </div>
          </div>
          <div
            class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200"
          >
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateBlog',
  data() {
    return {
      title: '',
      content: '',
    }
  },
  methods: {
    emitBlogData() {
      this.$emit('getBlogData', {
        title: this.title,
        content: this.content,
      })
      this.title = ''
      this.content = ''
    },
  },
}
</script>
