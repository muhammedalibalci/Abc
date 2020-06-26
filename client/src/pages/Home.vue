<template>
  <div>
    <TopBar />
    <div class="container mt-5">
      <Category />
      <Products />
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar/TopBar";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";
export default {
  name: "Home",
  components: {
    TopBar,
    Category,
    Products
  }
};
</script>

<style >
.home {
  flex-wrap: nowrap;
  display: flex;
}
</style>