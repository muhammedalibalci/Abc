<template>
  <div class="collapse navbar-collapse float-right mr-5" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto ">
      <li class="nav-link">
        <router-link to="/my-account" class="account">
          <span>My Account</span>
        </router-link>
      </li>
      <li class="nav-link mr-5">
        <span @click="logout">Log out</span>
      </li>
      <li class="nav-item ">
        <router-link class="nav-link" to="/cart">
          <i class="fa fa-shopping-cart"></i>
          <span class="w-length ml-2">{{cartsLength}}</span>
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
  },
  methods: {
    logout() {
      location.reload();
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
.nav-item {
  font-weight: 500;
  font-size: 1em;
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