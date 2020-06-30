<template>
  <div class="add-address">
    <TopBar />
    <div class="container">
      <h4>Add Address</h4>
      <button class="btn btn-back" @click="()=>this.$router.push('checkout')">Back</button>
    </div>
    <div class="alert alert-success w-50 text-center mx-auto" v-show="messageVisible">Added Address Successfully</div>
    <div class="w-25 card shadow pt-3 pl-3 pr-3 mx-auto">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" name="FullName" class="form-control" @change="onChangeInput" />
      </div>
      <div class="form-group">
        <label>Address</label>
        <input type="text" name="Address1" class="form-control" @change="onChangeInput" />
      </div>
      <div class="form-group">
        <label>City</label>
        <input type="text" name="City" class="form-control" @change="onChangeInput" />
      </div>
      <div class="form-group">
        <label>Post Code</label>
        <input type="text" name="PostCode" class="form-control" @change="onChangeInput" />
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="text" name="Phone" class="form-control" @change="onChangeInput" />
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-add mt-2 w-50 mb-2"
          @click="onClickAddButton"
        >Add Address</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import TopBar from "../components/TopBar/TopBar";
export default {
  data() {
    return {
      newAddress: {},
      messageVisible: false
    };
  },
  components: {
    TopBar
  },
  methods: {
    onChangeInput(e) {
      const { name, value } = e.target;
      this.newAddress[name] = value;
    },
    onClickAddButton() {
      const token = localStorage.getItem("token");

      Axios.post("https://localhost:44360/api/users/address", this.newAddress, {
        headers: { Authorization: "Bearer " + token }
      })
        .then((this.messageVisible = true))
        .catch(err => {
          console.log(err);
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
.add-address{
    background-color: #f1f1f1;
}
</style>