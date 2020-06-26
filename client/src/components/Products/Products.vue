<template>
  <div class="products">
    <div class="text-center">
      <PendingApiCall v-show="pendingApiCall" />
    </div>
    <section
      class="card ml-4 mb-2 p-2  card-product "
      v-for="product in products"
      :key="product.id"
    >
      <img :src="product.imageUrl" class="card-img-top" alt="..." />
      <div class="card-body text-center">
        <h5 class="card-title">{{product.name}}</h5>
        <div class="card-title">$ {{product.price}}</div>
        <button class="btn btn-primary w-100" @click="addToBasket(product.productDetails)">Add To Basket</button>
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
.products{
    display: flex;
  flex-wrap: wrap;
}
.card-product {
  width: 300px;
  font-family: monospace;
}
.card-product:hover {
  width: 320px;

}
</style>