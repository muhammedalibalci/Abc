<template>
  <div class="categories">
    <h6 class="text-center">Categories</h6>
    <div class="text-center">
      <PendingApiCall v-show="pendingApiCall" />
    </div>
    <ul class="list-group " v-for="category in categories" :key="category.id">
      <li class="list-group-item">{{category.name}}</li>
    </ul>
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
  created: function() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      Axios.get("https://localhost:44360/api/categories")
        .then(res => {
          let categories = [...res.data];
          this.categories = categories;
          this.pendingApiCall = false
        })
        .catch(err => {
          console.log("Categories", err);
           this.pendingApiCall = false
        });
    }
  }
};
</script>

<style >
.categories{
border: 1px solid gray;
padding: 10px;
}
</style>