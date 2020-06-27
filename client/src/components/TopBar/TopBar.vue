<template>
  <nav class="navbar navbar-expand-lg  pl-5">
    <router-link to="/" class="navbar-brand">
       E-Commerce
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
  mounted(){
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
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  color: white;

}
</style>