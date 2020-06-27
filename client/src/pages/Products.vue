<template>
  <div>
    <TopBar />
    <div class="p-wrap pt-5">
      <Category />
      <ProductsSection />
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar/TopBar";
import Category from "../components/Category/Category";
import ProductsSection from "../components/Products/ProductsSection";
export default {
  name: "Products",
  components: {
    TopBar,
    Category,
    ProductsSection
  }
};
</script>

<style >
.home {
  flex-wrap: nowrap;
  display: flex;
}
.p-wrap{
  background-color: #f1f1f1;

}
</style>