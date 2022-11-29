<template>
  <div>
    <footer id="footer" class="font-fuzzy border-t border-yellow-500 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8 flex flex-col items-center md:text-lg">
        <!-- © zozoy -->
        <p class="text-center text-base md:text-lg pt-8">
          &copy; 2022 zozoy, Inc. All rights reserved.
        </p>
        <div class="flex justify-center space-x-6">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            :href="item.href"
            class=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">{{ item.name }}</span>
            <i :class="item.icon" class="h-6 w-6" />
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
