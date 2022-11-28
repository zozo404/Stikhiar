<template>
  <div>
    <CarouselVue :id="'realisations'" class="scroll-mt-60 lg:scroll-mt-40" />
    <Equipe :id="'equipe'" :equipe="Equipe" class="scroll-mt-60 lg:scroll-mt-40" />
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
