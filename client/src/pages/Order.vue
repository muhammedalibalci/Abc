<template>
  <div>
    <TopBar />

    <div class="container card w-50 pt-2 pb-2 text-center mt-5" v-show="!pendingApiCall">
      <div>
        <b>Fulll Name :</b>
        {{address.fullName}}
      </div>
      <div>
        <b>Address :</b>
        {{address.address1}}
      </div>
      <div>
        <b>City :</b>
        {{address.city}}
      </div>
      <div>
        <b>Post Code :</b>
        {{address.postCode}}
      </div>
      <div>
        <b>Phone :</b>
        {{address.phone}}
      </div>
    </div>

    <div class="container mt-4">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cart,index) in carts" :key="cart.id">
            <th scope="row">{{++index}}</th>
            <td>
              <img :src="cart.productDetail.product.imageUrl" alt="..." width="100" />
            </td>
            <td>{{cart.productDetail.product.name}}</td>
            <td>{{cart.quantity}}</td>
            <td>$ {{cart.productDetail.product.price * cart.quantity}}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success w-100 mt-2" @click="createOrder">Create Order</button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import TopBar from "../components/TopBar/TopBar";
export default {
  name: "Order",
  components: {
    TopBar
  },
  data() {
    return {
      address: {},
      pendingApiCall: true
    };
  },
  computed: {
    carts() {
      return this.$store.getters.getCarts;
    }
  },
  mounted() {
    this.pendingApiCall = true;
    this.getAddress();
  },
  methods: {
    getAddress() {
      const token = localStorage.getItem("token");
      Axios.get("https://localhost:44360/api/users/address", {
        headers: { Authorization: "Bearer " + token }
      })
        .then(res => {
          this.address = res.data;
          this.pendingApiCall = false;
        })
        .catch(err => {
          this.pendingApiCall = false;
          this.hasAddress = false;
          console.log(err);
        });
    },
    createOrder() {
      const token = localStorage.getItem("token");
      Axios.post("https://localhost:44360/api/orders/" + this.address.id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
        .then((this.pendingApiCall = false))
        .catch(err => {
          this.pendingApiCall = false;
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>