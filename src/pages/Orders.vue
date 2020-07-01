<template>
  <div class="orders">
    <TopBar />
    <div class="container">
      <h4 class="mt-3 pb-2">My Orders</h4>
      <button class="btn btn-back" @click="()=>this.$router.go(-1)">Back</button>
    </div>
    <div class="text-center" v-show="pendingApiCall">
      <PendingApiCall />
    </div>
    <h4 class="text-center mt-4" v-if="orders.length === 0 && !pendingApiCall">Not Found Anything :(</h4>
    <div class="card order shadow mt-2 w-50 mx-auto p-3" v-for="item in orders" :key="item.id">
      <div class="d-flex">
        <div>
          <img :src="item.productDetail.product.imageUrl" alt="..." width="100" height="70" />
        </div>
        <div class="mx-auto">
          <h5>{{item.productDetail.product.name}}</h5>
          <div>
            <i class="fa fa-calendar"></i>
            {{item.order.createdDate.split('T')[0]}}
          </div>
        </div>

        <div class="mx-auto" v-show="item.quantity <= 2 ">
          <i class="fa fa-check"></i>
        </div>
        <div class="mx-auto" v-show="item.quantity > 2 ">
          <div>
            <i class="fa fa-history"></i>
          </div>
        </div>
        <div class="ml-auto">
          <div class="o-price">${{item.quantity* item.productDetail.product.price}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar/TopBar";
import PendingApiCall from "../components/PendingApiCall";
import jwttoken from "jwt-decode";
import Axios from "axios";
export default {
  components: {
    TopBar,
    PendingApiCall
  },
  data() {
    return {
      orders: [],
      pendingApiCall: true
    };
  },
  created() {
    const token = localStorage.getItem("token");
    let decode;
    console.log(token);

    if (token !== null) {
      decode = jwttoken(token);
    }
    if (token == null || !decode.email) {
      this.$router.push("/products");
    }
  },
  mounted() {
    const token = localStorage.getItem("token");
    Axios.get("https://abc-app-api.azurewebsites.net/api/orders", {
      headers: { Authorization: "Bearer " + token }
    }).then(res => {
      this.orders = res.data;
      this.pendingApiCall = false;
    });
  }
};
</script>

<style>
.orders {
  background-color: #f1f1f1;
  min-height: 100vh;
  height: 100%;
}
.order {
  border-radius: 20px;
}
.btn-back {
  border-radius: 5px;
  background-color: rgb(68, 68, 68);
  color: white;
}
.fa-history {
  font-size: 1.3rem;
  color: #6610f2;
}
.fa-check {
  font-size: 1.3rem;
  color: green;
}
.o-price {
  font-size: 1.1rem;
  font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #5b5366;
}
</style>