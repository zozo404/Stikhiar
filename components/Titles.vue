<template>
  <div :id="id" class="bg-transparent flex flex-col items-center mt-7">
    <div v-if="subtitle" class="flex w-3/4 justify-center items-center pb-8 bg-transparent rounded-full mb-4">
      <p class="lg:w-full sm:text-4xl lg:text-4xl text-3xl text-center">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlesApp',
  props: {
    subtitle: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>
