<template>
  <div class="pd">
    <TopBar />
    <div @click="()=>this.$router.push('/products')">
      <i class="fa fa-arrow-circle-left"></i>
    </div>
    <div class="card shadow w-50 mx-auto p-3">
      <div class="text-center" v-show="pendingApiCall">
        <PendingApiCall />
      </div>
      <div class="d-flex">
        <div class="float-left">
          <img :src="product.imageUrl" width="300" height="300" alt />
        </div>
        <div class="ml-5">
          <div class="pd-name">{{product.name}}</div>
          <div class="pd-desc ml-2">{{product.description}}</div>
          <div class="mt-5">
            <div class="pd-price float-left">${{product.price}}</div>
            <div class="float-right">
              <button class="btn pd-button" @click="addToBasket(product.productDetails)">
                <i class="fa fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar/TopBar";
import PendingApiCall from "../components/PendingApiCall";
import Axios from "axios";
export default {
  name: "ProductDetail",
  data() {
    return {
      product: {},
      pendingApiCall:true
    };
  },
  components: {
    TopBar,
    PendingApiCall
  },
  mounted() {
    Axios.get(
      "https://abc-app-api.azurewebsites.net/api/products/" + this.$route.params.id
    ).then(res => {
      this.product = res.data;
      this.pendingApiCall = false
    });
  },
  methods: {
    addToBasket(productDetails) {
      const cart = {
        Quantity: 1,
        ProductDetailId: productDetails[0].id
      };
      this.$store.dispatch("addCartToBasket", cart);
    }
  }
};
</script>

<style >
.pd {
  background-color: #f1f1f1;
  height: 100vh;
}
.pd-name {
  font-size: 1.5em;
  font-weight: bold;
}
.pd-desc {
  font-size: 0.9em;
}
.pd-price {
  color: #341456;
  font-size: 1em;
  font-weight: bold;
}
.pd-button {
  background-color: #341456;
  color: white;
  border-radius: 50px;
}
.pd-button:hover {
  background-color: #ccc;
  color: black;
}
.fa-arrow-circle-left {
  font-size: 2em;
  color: #341456;
  padding-left: 10px;
  padding-top: 10px;
}
</style>