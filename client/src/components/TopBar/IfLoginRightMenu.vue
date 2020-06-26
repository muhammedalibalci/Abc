<template>
  <div class="collapse navbar-collapse float-right mr-5" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <UserTopBar :userName="user.userName" />
      <li class="nav-item">
        <router-link class="nav-link" to="/basket">
          <div class="shopping-cart">
            <i class="fa fa-shopping-cart"></i>
          </div>
          <div class="c-length ml-3 pl-1">
            <span class="w-length">{{cartsLength}}</span>
          </div>
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
.nav-item {
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
}
.shopping-cart {
  position: absolute;
}
.fa-shopping-cart {
  color: white;
  font-size: 1.2rem;
}

.c-length {
  background: #ff4747;
  max-width: 20px;
  min-width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 10px;
}
.w-length {
  font-size: 0.8rem;
}
</style>