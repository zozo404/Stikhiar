<template>
  <div>
    <footer id="footer" class="font-fuzzy bg-gray-1000">
      <div class="max-w-7xl mx-auto pt-4 px-4 overflow-hidden sm:px-6 lg:px-8 flex flex-col items-center md:text-lg">
        <!-- insert the link of the facebook page with an icon  -->
        <!-- <div class="relative pt-4 flex flex-col sd:gap-9">
          <a
            v-for="item in navigation.tacos"
            :key="item.name"
            :href="item.href"
            class="text-orange-1000 flex flex-col items-center sd:gap-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Vous pouvez également nous trouver ici</p>
            <span class="sr-only">{{ item.name }}</span>
            <i :class="item.icon" class="h-6 w-6 text-blue-700 bg-white rounded-full" />
          </a>
        </div> -->
        <!-- © zozoy -->
        <p class="text-center text-base text-orange-1000 md:text-lg pt-8 xl:pt-20">
          &copy; 2022 zozoy, Inc. All rights reserved.
        </p>
        <div class="flex justify-center space-x-6">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            :href="item.href"
            class="text-orange-1000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">{{ item.name }}</span>
            <i :class="item.icon" class="h-6 w-6 text-orange-1000" />
          </a>
        </div>
        <!-- end of ©  -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterApp',
  data () {
    return {
      navigation: {
        social: [
          {
            name: 'Github',
            href: 'https://github.com/zozo404',
            icon: 'fab fa-github'
          },
          {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/enzo-cuny/',
            icon: 'fab fa-linkedin'
          }
        ]
      }
    }
  }
}
</script>
