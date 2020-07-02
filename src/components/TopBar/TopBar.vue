<template>
  <nav class="navbar navbar-expand-lg  pl-5">
    <router-link to="/" class="navbar-brand">
       eCommerce
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <NormalRightMenu v-if="!credentials" />

    <IfLoginRightMenu v-if="credentials" :user="credentials" />
  </nav>
</template>

<script>
import NormalRightMenu from "./NormalRightMenu";
import IfLoginRightMenu from "./IfLoginRightMenu";
export default {
  name: "TopBar",
  components: {
    NormalRightMenu,
    IfLoginRightMenu
  },
  created(){
    this.$store.commit('initCart')
  },
  computed: {
    credentials() {
      return this.$store.getters.getUser;
    }
  }
};
</script>

<style >
.navbar{
  background-color: #341456;
  
}
.navbar-brand {
  font-size: 1.2em;
  font-weight: 700;
  color: white;

}
.navbar-toggler-icon{
  background-color: white;
  border-radius: 15px;
  font-size: 0.5rem;
}
</style>