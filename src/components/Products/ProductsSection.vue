<template>
  <div class="pb-5">
    <div class="products w-100 container mt-5">
      <div class="text-center" v-show="pendingApiCall">
        <PendingApiCall />
      </div>
      <section
        class="card ml-5 mb-4 p-2 card-product shadow mx-auto"
        v-for="product in products"
        :key="product.id"
      >
        <div class="p-3">
          <img :src="product.imageUrl" alt="..." width="100%" height="100%" />
        </div>
        <div class="card-body text-center ">
          <router-link :to="'/product/'+ product.id" class="card-name-router">
            <h5 class="card-title">{{product.name}}</h5>
          </router-link>
          <hr />
          <div class="mx-auto">
            <div class="price-title float-left mt-2">$ {{product.price}}</div>
            <div class="float-right w-25" v-show="user">
              <button class="btn p-button" @click="addToBasket(product.productDetails)">
                <i class="fa fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PendingApiCall from "../PendingApiCall";
export default {
  name: "Products",
  components: {
    PendingApiCall
  },
  data: function() {
    return {
      pendingApiCall: true
    };
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    user() {
      return this.$store.getters.getUser;
    }
  },
  created: function() {
    this.$store.dispatch("fetchProducts");
    this.pendingApiCall = false;
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


<style>
.products {
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
}
.card-product {
  width: 300px;
  font-family: monospace;
  border-radius: 25px;
}
.card-product:hover {
  background-color: #eee8e8;
}
.p-button {
  background-color: #341456;
  color: white;
  border-radius: 50px;
}
.price-title {
  font-family: "Courier New", Courier, monospace;
  color: #341456;
  font-weight: 600;
  font-size: 1.1em;
}
.card-name-router {
  text-decoration-line: none;
  color: black;
}
.p-button:hover {
  background-color: #ccc;
  color: black;
}
</style>