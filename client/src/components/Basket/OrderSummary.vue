<template>
  <div class="text-center summary card p-4">
    <h4>Order Summary</h4>
    <hr />
    <div class="amount mb-4 mt-4">
      <b>Subtotal : </b>
      <span>$ {{amount}}</span>
    </div>
    <button class="btn btn-success w-100">Buy</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0
    };
  },
  computed: {
    carts() {
      return this.$store.getters.getCarts;
    }
  },
  created() {
    this.calculateTotalAmount();
  },
  methods: {
    calculateTotalAmount() {
      this.carts.forEach(cart => {
        this.amount += cart.productDetail.product.price + cart.quantity;
      });
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