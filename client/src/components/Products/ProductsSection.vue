<template>
  <div class="products">
    <div class="text-center">
      <PendingApiCall v-show="pendingApiCall" />
    </div>
    <section
      class="card ml-4 mb-2 p-2 card-product shadow"
      v-for="product in products"
      :key="product.id"
    >
      <div class="p-3">
        <img :src="product.imageUrl"  alt="..." height="200" width="100%" />
      </div>
      <hr />
      <div class="card-body text-center">
        <h5 class="card-title">{{product.name}}</h5>

        <div class="card-title">$ {{product.price}}</div>
        <button
          class="btn p-button w-100"
          @click="addToBasket(product.productDetails)"
        >Add To Basket</button>
      </div>
    </section>
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
}
.card-product {
  width: 300px;
  font-family: monospace;
  border-radius: 5px;
}
.card-product:hover {
  width: 320px;
}
.p-button {
  background-color: #341456;
  color: white;
}
</style>