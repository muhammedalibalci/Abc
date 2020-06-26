<template>
  <div class="ml-3 mb-4 text-center">
    <div class="text-center">
      <PendingApiCall v-show="pendingApiCall" />
    </div>

    <div class="category mr-2" v-for="category in categories" :key="category.id">
      <span
        class="card-inline"
        :class="{'current-category':currentCategoryId === category.id}"
        @click="switchProducts(category.id)"
      >{{category.name}}</span>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import PendingApiCall from "../PendingApiCall";

export default {
  name: "Category",
  components: {
    PendingApiCall
  },
  data: function() {
    return {
      categories: [],
      pendingApiCall: true
    };
  },
  computed: {
    currentCategoryId() {
      return this.$store.getters.getCurrentCategoryId;
    }
  },
  created: function() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      Axios.get("https://localhost:44360/api/categories")
        .then(res => {
          let categories = [...res.data];
          this.categories = categories;
          this.pendingApiCall = false;
        })
        .catch(err => {
          console.log("Categories", err);
          this.pendingApiCall = false;
        });
    },
    switchProducts(id) {
      this.$store.dispatch("fetchProducts", id);
    }
  }
};
</script>

<style >
.category {
  display: inline-block;
  padding: 15px;
  border: 1px dashed gray;
}
.card-inline {
  display: inline-block;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 18px;
}

.current-category {
  background: pink;
}
</style>