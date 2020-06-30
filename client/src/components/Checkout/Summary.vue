<template>
  <div class="card mx-auto">
    <div class="card-body">
      <div class="pb-4">
        <div class="card-title float-left">1</div>
        <div class="card-title float-right">
          <i class="fa fa-shopping-bag"></i>
        </div>
      </div>
      <hr />
      <div>
        <span class="c-title">Your Items</span>
        <ul v-for="cart in carts" :key="cart.id" class="mt-2">
          <li>{{cart.quantity}} {{cart.productDetail.product.name}} ${{cart.productDetail.product.price}}</li>
        </ul>
      </div>
      <hr />
      <div>
        <span class="c-title">Delivery Address</span>
        <p v-show="!onClickRadio">Please select an address to ship</p>
        <p>{{currentAddress.address1}} {{currentAddress.city}} {{currentAddress.postCode }}</p>
      </div>
      <hr />
      <div>
        <span class="c-title">Payment Method</span>
        <p class="ml-3 mt-2">
          <i class="fa fa-credit-card"></i>Stripe
        </p>
      </div>
      <hr />
      <div>
        <div class="float-left c-title">Total Paid</div>
        <div class="float-right c-title">${{totalAmount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Summary",
  props: {
    currentAddress: Object,
    onClickRadio: Boolean
  },
  created() {
    const token = localStorage.getItem('token')
    if (this.carts.length === 0 && token) {
      this.$router.push("/products");
    }
  },
  computed: {
    carts() {
      return this.$store.getters.getCarts;
    },
    totalAmount() {
      let amount = 0;
      this.carts.forEach(cart => {
        amount += cart.productDetail.product.price * cart.quantity;
      });
      return amount;
    }
  }
};
</script>

<style>
.c-title {
  font-size: 1rem;

  font-weight: bold;
  color: #454f54;
}
</style>