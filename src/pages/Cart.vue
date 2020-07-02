<template>
  <div>
    <TopBar />
    <div class="container mt-4 mb-4">
      <div class="card shadow pb-4">
        <div class="card-title ml-2 mt-2">
          <i class="fa fa-shopping-bag"></i> Items in Your Bag
        </div>
        <hr />
        <div class="card-body row text-center" v-for="(cart,index) in carts" :key="index">
          <div class="col-xl-1 col-md-1 p-2" @click="onClickDelete(cart.id)">
            <i class="fa fa-times-circle i-remove-color"></i>
          </div>
          <div class="col-xl-2 col-md-2 ">
            <img :src="cart.productDetail.product.imageUrl" alt="..." width="100" height="70" />
          </div>
          <div class="col-xl-2 col-md-2 p-name p-2">
            <div class>{{cart.productDetail.product.name}}</div>
          </div>
          <div class="col-xl-2 col-md-2 p-2">
            <div class>$ {{cart.productDetail.product.price}}</div>
          </div>
          <div class="col-xl-2 col-md-2 p-2">
            <button class="btn btn-sm btn-secondary mr-1 mb-1" @click="decreaseProduct(cart)">-</button>
            <span class="quantity">{{cart.quantity}}</span>
            <button class="btn btn-sm btn-primary ml-1 mb-1" @click="increaseProduct(cart)">+</button>
          </div>
          <div class="col-xl-2 col-md-2 p-2">
            <div class>$ {{cart.productDetail.product.price * cart.quantity}}</div>
          </div>
        </div>
        <hr />
        <div class="ml-auto sub-text">
          <div class="mr-2">
            <span class="float-right mb-4">
              Items :
              {{carts.length}}
            </span>
          </div>
          <div class="mr-2">
            <span class="float-right">Total : $ {{totalAmount}}</span>
          </div>
          <button
            class="btn btn-checkout float-right mr-2 mt-2"
            @click="()=>this.$router.push('/checkout')"
          >Checkout</button>
        </div>
      </div>

      <div></div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar/TopBar";

export default {
  name: "Deneme",
  components: {
    TopBar
  },
  mounted() {
    if (this.carts.length === 0) {
      this.$router.push('/products')
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
  },
  methods: {
    onClickDelete(id) {
      this.$store.dispatch("deleteCartFromBasket", id);
    },
    increaseProduct(cart) {
      cart.quantity++;
      this.$store.dispatch("updateCart", cart);
    },
    decreaseProduct(cart) {
      console.log(cart);

      if (cart.quantity > 0) {
        cart.quantity--;
        this.$store.dispatch("updateCart", cart);
      }
      if (cart.quantity === 0) {
        this.$store.dispatch("deleteCartFromBasket", cart.id);
      }
    }
  }
};
</script>

<style>
.container {
}
.card-title {
  color: #444;
  padding: 5px;
  font-weight: 300;
  font-size: 1.5em;
  font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.card-body {
  font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.fa-times-circle {
  font-weight: 900;
}
.p-name {
  font-weight: bold;
  font-size: 1.1em;
  font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.sub-text {
  color: rgb(68, 68, 68);
  font-weight: 900;
  font-size: 1.17em;
}
.btn-checkout {
  border-radius: 5px;
  background-color: rgb(68, 68, 68);
  color: white;
}
.btn-checkout :hover {
  color: white;
}
</style>