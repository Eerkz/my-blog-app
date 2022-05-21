<template>
  <div class="h-36 rounded-lg">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">
      {{ title }}
    </h5>
    <label class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">{{author}}</label>
    <div class="mt-4 text-l font-normal text-gray-700 truncate h-6">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    docid: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    }
  }
}
</script>
