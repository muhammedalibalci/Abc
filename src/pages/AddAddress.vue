<template>
  <div class="add-address">
    <TopBar />
    <div class="container">
      <h4 class="mt-3">Add Address</h4>
      <button class="btn btn-back" @click="()=>this.$router.go(-1)">Back</button>
    </div>
    <div
      class="alert alert-success w-50 text-center mx-auto"
      v-show="messageVisible"
    >Added Address Successfully</div>
    <div class="row">
      <div class="col-xl-4 col-md-6 col-sm-8 mt-2 card shadow p-5 pt-4 mx-auto">
        <div class="text-center mb-2" v-if="pendingApiCall">
          <PendingApiCall />
        </div>
        <div class="text-center mb-1 m-error" v-show="errors">{{errors.FullName}}</div>
        <div class="form-group mb-2">
          <input
            type="text"
            placeholder="Full Name"
            :class="{'m-alert':errors.FullName}"
            name="FullName"
            class="form-control"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.Address1}}</div>
          <input
            type="text"
            name="Address1"
            placeholder="Address"
            :class="{'m-alert':errors.Address1}"
            class="form-control"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.City}}</div>
          <input
            type="text"
            name="City"
            placeholder="City"
            :class="{'m-alert':errors.City}"
            class="form-control"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.PostCode}}</div>

          <input
            type="text"
            name="PostCode"
            placeholder="Post Code"
            :class="{'m-alert':errors.PostCode}"
            class="form-control"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.Phone}}</div>

          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            :class="{'m-alert':errors.Phone}"
            class="form-control"
            @change="onChangeInput"
          />
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-add mt-4 w-50" @click="onClickAddButton">Add Address</button>
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
  data() {
    return {
      newAddress: {
        FullName: "",
        Address1: "",
        City: "",
        PostCode: "",
        Phone: ""
      },
      errors: {},
      messageVisible: false,
      pendingApiCall: false
    };
  },
  components: {
    TopBar,
    PendingApiCall
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
  methods: {
    onChangeInput(e) {
      this.errors = {};
      const { name, value } = e.target;
      this.newAddress[name] = value;
    },
    onClickAddButton() {
      this.pendingApiCall = true;
      const token = localStorage.getItem("token");

      Axios.post(
        "https://abc-app-api.azurewebsites.net/api/users/address",
        this.newAddress,
        {
          headers: { Authorization: "Bearer " + token }
        }
      )
        .then(() => {
          this.messageVisible = true;
          this.pendingApiCall = false;
        })
        .catch(err => {
          this.pendingApiCall = false;
          this.messageVisible = false;
          this.errors = err.response.data.errors;
        });
    }
  }
};
</script>

<style>
.btn-back {
  border-radius: 5px;
  background-color: rgb(68, 68, 68);
  color: white;
}
.btn-add {
  border-radius: 10px;
  background-color: #341456;
  color: white;
}
.add-address {
  background-color: #f1f1f1;
  min-height: 100vh;
  height: 100%;
}
.m-alert {
  border-color: rgb(192, 7, 7);
  font-weight: 500;
}
.m-error {
  font-weight: 200;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
@media only screen and (min-width: 768px) {
  .card-address {
    width: 500px;
  }
}
</style>