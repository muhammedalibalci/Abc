<template>
  <div>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
      ><i class="fa fa-user"></i> {{userName}}</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Account</a>
        <span class="dropdown-item" @click="()=>this.$store.dispatch('logout')">Log out</span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "UserTopBar",
  props:{
    userName:String
  }
};
</script>

<style>
.dropdown-item{
  font-family: 'Courier New', Courier, monospace;
  font: 600;
}
.nav-link{
  color: white;
}
.nav-item :hover(){
  color: aqua;
}

</style>