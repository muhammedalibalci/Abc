<template>
  <div class="my-account">
    <TopBar />
    <div class="container mt-4">
      <h5>My Account</h5>
      <div class="ml-2">
        <span class="wlcome">Welcome</span>
        <span class="u-name-text ml-2">{{user.name}}</span>
      </div>
      <div class="d-flex ml-4 mt-4">
        <button class="btn btn-o mr-4" @click="()=>this.$router.push('/add-address')">
          <i class="fa fa-map-marker"></i> Add Address
        </button>
        <button class="btn btn-o" @click="()=>this.$router.push('/orders')">
          <i class="fa fa-shopping-basket"></i> My Shopping
        </button>
      </div>

      <div class="mt-4">
        <h5>My Address</h5>
        
        <table class="table">
        
          <thead class="head">
            
            <tr>
              <th class="pl-5 pr-5 thead-f">Address</th>
              <th class="pl-5 pr-5 thead-f">Post Code</th>
              <th class="pl-5 pr-5 thead-f">City</th>
              <th class="pl-5 pr-5 thead-f">Phone</th>
              <th class="pl-5 pr-5 thead-f">Delete</th>
            </tr>
          </thead>
            
          <tbody>
            <tr v-for="address in addresses" :key="address.id">
              <th class="pl-5 pr-5 thead-f">{{address.address1}}</th>
              <th class="pl-5 pr-5 thead-f">{{address.postCode}}</th>
              <th class="pl-5 pr-5 thead-f">{{address.city}}</th>
              <th class="pl-5 pr-5 thead-f">{{address.phone}}</th>
              <th class="pl-5 pr-5 thead-f" @click="deleteAddress(address.id)">
                <i class="fa fa-minus-circle"></i>
              </th>
            </tr>
          </tbody>
        </table>
        <div class="text-center" v-show="pendingApiCall">
          <PendingApiCall />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import jwttoken from "jwt-decode";
import TopBar from "../components/TopBar/TopBar";
import PendingApiCall from "../components/PendingApiCall";
export default {
  components: {
    TopBar,
    PendingApiCall
  },
  data() {
    return {
      user: {},
      addresses: [],
      pendingApiCall:true
    };
  },
  created() {
    const token = localStorage.getItem("token");
    let decode;

    if (token !== null) {
      decode = jwttoken(token);
    }
    if (token == null || !decode.email) {
      this.$router.push("/products");
    }
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const Id = localStorage.getItem("Id");
      Axios.get("https://abc-app-api.azurewebsites.net/api/users/" + Id).then(
        res => {
          this.user = res.data;
          console.log(res);
          
          this.addresses = res.data.addresses.filter(x => x.isDeleted !== true);
          this.pendingApiCall = false
        }
      ).catch(
        this.pendingApiCall = false
      )
    },
    deleteAddress(id) {
      Axios.delete(
        `https://abc-app-api.azurewebsites.net/api/users/${id}/address`
      ).then(res => {
        console.log(res);
        this.fetchUser();
      });
    }
  }
};
</script>

<style>
.my-account {
  background-color: #f1f1f1;
  height: 100vh;
  color: black;
}
.btn-o {
  border-radius: 5px;
  background-color: #341456;
  color: white;
}
.btn-o:hover {
  background-color: black;
  color: white;
}
.head {
  color: #2a9af2;
}
.thead-f {
  font-weight: 300;
}
tbody {
  font-size: 1em;
  font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 500;
}
.wlcome {
  font-weight: 300;
  font-size: 1.5rem;
}
.u-name-text {
  font-weight: 600;
  text-decoration: underline;
  font-size: 1.2rem;
}
.fa-minus-circle {
  color: rgb(221, 14, 14);
}
</style>