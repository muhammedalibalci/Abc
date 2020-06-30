<template>
  <div class="collapse navbar-collapse float-right mr-5" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-link">
        <router-link to="/" class="account">My Account</router-link>
      </li>
      <li class="nav-link ">
        <span @click="()=>this.$store.dispatch('logout')">Log out</span>
      </li>
      <li class="nav-item ml-5">
        <router-link class="nav-link" to="/cart">
            <i class="fa fa-shopping-cart"></i>
            <span class="w-length">{{cartsLength}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IfLoginRightMenu",

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
.nav-link {
  color: white;
}
.w-length {
  font-size: 1.1rem;
}
.account {
  color: white;
  text-decoration: none;
}
a:hover() {
  color: white;
}
</style>