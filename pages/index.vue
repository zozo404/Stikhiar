<template>
  <div>
    <CarouselVue />
    <Equipe :equipe="Equipe" />
    <RetrouvezNous :id="'retrouvez'" class="scroll-mt-60 lg:scroll-mt-40" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters(['getEquipe']),
    Equipe () {
      return this.getEquipe
    }
  }
}
</script>
