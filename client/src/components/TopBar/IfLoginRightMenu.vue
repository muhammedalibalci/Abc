<template>
  <div class="collapse navbar-collapse float-right mr-5" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <UserTopBar :userName="user.userName" />
      <li class="nav-item">
        <router-link class="nav-link" to="/basket">
          <i class="fa fa-shopping-cart"></i>
          {{cartsLength}} Basket
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import UserTopBar from "./UserTopBar";
export default {
  name: "IfLoginRightMenu",
  components: {
    UserTopBar
  },
  computed: {
    cartsLength() {
      return this.$store.getters.getCarts.length;
    }
  },
  props: {
    user: Object
  }
};
</script>

<style>

.nav-item{
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
}
</style>