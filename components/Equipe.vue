<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Titles subtitle="Notre équipe" class="scroll-mt-60 lg:scroll-mt-40" />
    <div class="flex flex-wrap justify-around">
      <!-- nous mettons un for qui permet de faire une boucle pour afficher autant d'employes qu'il y a inscrit dans la bdd -->
      <div
        v-for="team in equipe"
        :key="team._id"
        class="flex flex-col items-center"
      >
        <nuxt-img
          provider="sanity"
          :src="team.imageId.asset._ref"
          :alt="team.imageId.logo"
          class="h-20"
          sizes="xs:100vw"
        />
        <p>{{ team.name }}</p>
        <i>({{ team.role }})</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquipeComponent',
  props: {
    equipe: {
      default: null,
      type: Array
    }
  }
}
</script>
