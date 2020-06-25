<template>
  <div class="col-xl-8 col-md-4 row">
    <div class="text-center">
      <PendingApiCall v-show="pendingApiCall" />
    </div>
    <section
      class="card ml-4 mb-2"
      style="width: 15rem;"
      v-for="product in products"
      :key="product.id"
    >
      <img src="../../assets/logo.png" class="card-img-top" alt="..." />
      <div class="card-body text-center">
        <h5 class="card-title">{{product.name}}</h5>
        <div class="card-title">$ {{product.price}}</div>
        <button class="btn btn-primary w-100" @click="addToBasket(product.id)">Add To Basket</button>
      </div>
    </section>
  </div>
</template>

<script>
import Axios from "axios";
import PendingApiCall from "../PendingApiCall";
export default {
  name: "Products",
  components: {
    PendingApiCall
  },
  data: function() {
    return {
      products: [],
      pendingApiCall: true
    };
  },
  created: function() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      Axios.get("https://localhost:44360/api/products")
        .then(res => {
          let products = [...res.data];
          this.products = products;
          this.pendingApiCall = false;
        })
        .catch(err => {
          console.log("Productss", err);
          this.pendingApiCall = false;
        });
    },
    addToBasket(id){
      
      const cart ={
        Quantity:1,
        ProductDetailId:id
      }

      this.$store.dispatch('addCartToBasket',cart)
      
    }
  }
};
</script>