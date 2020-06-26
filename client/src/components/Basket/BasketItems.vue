<template>
  <div class="row p-4">
    <div class="col-xl-4">
      <img src="../../assets/logo.png" class alt="..." />
    </div>
    <div class="col-xl-4 mt-4">
      <div class>{{cart.productDetail.product.name}}</div>
      <div class>Color :{{cart.productDetail.color}}</div>
      <div class>Size : {{cart.productDetail.size}}</div>
      <div>
        <button class="btn btn-danger btn-sm mt-3 ml-3" @click="onClickDelete(cart.id)">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
    <div class="col-xl-2 mt-5">
      <button class="btn btn-sm btn-secondary mr-1 mb-1" @click="decreaseProduct(cart)">-</button>
      <span class="quantity">{{cart.quantity}}</span>
      <button class="btn btn-sm btn-primary ml-1 mb-1" @click="increaseProduct(cart)">+</button>
    </div>
    <div class="col-xl-2 mt-5">
      <div class>$ {{cart.productDetail.product.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketItems",
  props: {
    cart: Object
  },
  methods: {
    onClickDelete(id) {
      this.$store.dispatch("deleteCartFromBasket", id);
    },
    increaseProduct(cart) {
      cart.quantity++;
    },
    decreaseProduct(cart) {
      if (cart.quantity > 0) {
        cart.quantity--;
      }
      if (cart.quantity === 0) {
        this.$store.dispatch("deleteCartFromBasket", cart.id);
      }
    }
  }
};
</script>

<style>
.quantity {
  font-size: 1.3rem;
  font-weight: 600;
}
</style>