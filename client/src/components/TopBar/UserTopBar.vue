<template>
  <div>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
      ><i class="fa fa-user"></i> {{this.userName}}</a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Account</a>
        <a class="dropdown-item" href="#">Log out</a>
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
</style>