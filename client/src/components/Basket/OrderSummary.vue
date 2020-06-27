<template>
  <div class="text-center summary card p-4">
    <h4>Order Summary</h4>
    <hr />
    <div class="amount mb-4 mt-4">
      <b>Total :</b>
      <span>$ {{totolAmount}}</span>
    </div>
    <button class="btn btn-success w-100" @click="()=>this.$router.push('/address')">Buy</button>
  </div>
</template>

<script>
export default {
  computed: {
    carts() {
      return this.$store.getters.getCarts;
    },
    totolAmount() {
      let amount = 0;
      this.carts.forEach(cart => {
        amount += cart.productDetail.product.price * cart.quantity;
      });
      return amount   
    }
  }
};
</script>

<style>
.amount {
  font-size: 24px;
}
.summary {
  min-height: 150px;
}
</style>