<template>
  <div>
    <TopBar />
    <div class="container mt-5">
      <div class="row d-flex">
        <div class="col-xl-8 card">
          <div class="">
            <h4 class="text-center mt-4 mb-4">Products</h4>
          <hr>
            <BasketItems v-for="(cart,index) in carts" :key="index" :cart="cart" />
            <hr />
          </div>
        </div>
        <div class="col-xl-4 ">
          <OrderSummary :carts="carts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar/TopBar";
import BasketItems from "../components/Basket/BasketItems";
import OrderSummary from "../components/Basket/OrderSummary";
export default {
  name: "Basket",
  components: {
    TopBar,
    BasketItems,
    OrderSummary
  },
  computed: {
    carts() {
      return this.$store.getters.getCarts;
    }
  }
};
</script>

<style>
</style>