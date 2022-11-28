<template>
  <header class="bg-orange-1000 h-24 w-full z-20 sticky top-0 font-fuzzy">
    <nav
      class="lg:max-h-40 max-h-20 w-full py-4 lg:py-6 grid grid-cols-2 grid-rows-1 lg:grid-cols-2 items-center justify-between lg:border-none bg-orange-1000"
      aria-label="Top"
    >
      <!-- logo -->
      <nuxt-link to="/" class="flex justify-center lg:col-span-1 h-full text-white hover:text-gray-25 dura">
        <span class="sr-only">Logo</span>
        <!-- mettre img -->
        <nuxt-img
          provider="sanity"
          :src="Logo.imageId.asset._ref"
          alt="logo"
          class="h-20"
          sizes="xs:100vw"
        />
      </nuxt-link>
      <div class="text-right pr-8 lg:hidden flex justify-end " @click="toggle">
        <i class="fas fa-bars h-8 w-8 text-white hover:text-gray-25 duration-100" />
      </div>
      <!-- navigation -->
      <div
        class="hidden col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex flex-row gap-2 xl:gap-8 items-center"
      >
        <div v-for="lien in liens" :key="lien.texte" class="mb-4 py-4 flex space-x-6">
          <a
            key="Index"
            :href="lien.lien"
            class="text-base lg:text-xl 2xl:text-2xl font-medium text-white hover:text-gray-25 duration-100"
            @click="toggle"
          >
            {{ lien.texte }}
          </a>
        </div>
      </div>
      <!-- fin nav fermée -->
    </nav>
    <!-- nav ouverte -->
    <nav :class="{hidden:isActive}" class="lg:hidden w-screen absolute top-0 h-screen z-40 bg-orange-1000 grid grid-cols-2 grid-rows-6 ">
      <div class="grid grid-cols-2 grid-rows-1 col-span-2  my-4 h-12 justify-items-center w-full">
        <!-- logo -->
        <nuxt-link to="/" class="flex justify-center lg:col-span-1 h-full ">
          <span class="sr-only">Logo</span>
          <!-- mettre img -->
          <nuxt-img
            provider="sanity"
            :src="Logo.imageId.asset._ref"
            alt="logo"
            class="h-20"
            sizes="xs:100vw"
          />
        </nuxt-link>
        <!-- hamburger icon -->
        <div class="w-full h-full pr-8 lg:hidden flex justify-end  " @click="toggle">
          <i class="fas fa-bars h-8 w-8 z-50 place-self-center text-white hover:text-gray-25 duration-100" />
        </div>
      </div>
      <!-- liens -->
      <div v-for="lien in liens" :key="lien.texte" class="mb-4 py-4 flex flex-col items-center">
        <nuxt-link
          key="Index"
          :to="lien.lien"
          class="text-2xl font-medium text-white hover:text-gray-25 duration-100"
          @click.native="toggle"
        >
          {{ lien.texte }}
        </nuxt-link>
      </div>
      <!--  -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderApp',
  data () {
    return {
      isActive: true,
      liens: [
        {
          texte: 'Accueil',
          lien: '/'
        },
        {
          texte: 'Notre Carte',
          lien: '/#carte'
        },
        {
          texte: 'Retrouvez-nous',
          lien: '/#retrouvez'
        },
        {
          texte: 'Nos Horaires',
          lien: '/#horaires'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getPages']),
    Logo () {
      return this.getPages.find(el => el.name === 'Logo')
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
