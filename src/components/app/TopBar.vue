<template>
  <section>
    <div>
      <img alt="Logo" src="../../assets/images/logo.png" width="88">
    </div>
    <nav>
      <ul>
        <li><a href="#">Liquids</a></li>
        <li><a href="#">Coils &amp; Replacement Pods</a></li>
        <li><a href="#">Starter Kits</a></li>
        <li><a href="#">Vape Pens &amp; Mods</a></li>
        <li><a href="#">Tanks</a></li>
        <li><a href="#">DIY</a></li>
        <li><a href="#">Accessories</a></li>
      </ul>
    </nav>
    <aside>
      <nav>
        <a href="#" content="Search" v-tippy>
          <icon-search/>
        </a>
        <a href="#" content="Contact" v-tippy>
          <icon-contact/>
        </a>
        <a href="#" content="Basket" v-tippy>
          <icon-basket/>
        </a>
      </nav>
    </aside>
  </section>
</template>

<script>
import IconBasket from '../app/icons/Basket.vue'
import IconContact from '../app/icons/Contact.vue'
import IconSearch from '../app/icons/Search.vue'

export default {
  name: 'AppTopBar',
  components: {
    IconBasket,
    IconContact,
    IconSearch
  }
}
</script>

<style lang="postcss" scoped>
section {
  @apply bg-white shadow-lg flex items-center justify-between flex-wrap p-3 fixed w-full z-10 top-0;

  nav ul {
    @apply flex;

    li+li {
      @apply ml-2;
    }

    li a {
      @apply rounded-lg px-2 py-3 transition-colors;

      &:hover {
        @apply bg-purple-600 text-white;
      }
    }
  }

  aside nav {
    @apply flex;

    a {
      @apply px-2 py-4;
    }

    a+a {
      @apply ml-2;
    }
  }

  .app-icon {
    @apply h-6 w-6;
  }
}
</style>
