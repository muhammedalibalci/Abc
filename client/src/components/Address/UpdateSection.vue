<template>
  <div class="w-50 mx-auto mt-4">
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
    <button
      type="submit"
      class="btn btn-primary mt-2 w-100 mb-5"
      v-show="hasAddress"
      @click="onClickUpdateButton"
    >Update</button>
    <button
      type="submit"
      class="btn btn-primary mt-2 w-100 mb-5"
      v-show="!hasAddress"
      @click="onClickAddButton"
    >Add</button>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      newAddress: {},
      pendingApiCall: false
    };
  },
  props: {
    address: Object,
    hasAddress: Boolean
  },
  methods: {
    onChangeInput(e) {
      const { name, value } = e.target;
      if (this.hasAddress === false) {
        this.newAddress[name] = value;
      } else {
        this.address[name] = value;
      }
    },
    onClickAddButton() {
      this.pendingApiCall = true;

      const token = localStorage.getItem("token");

      Axios.post("https://localhost:44360/api/users/address", this.newAddress, {
        headers: { Authorization: "Bearer " + token }
      })
        .then((this.messageVisible = true))
        .catch(err => {
          console.log(err);
        });
    },
    onClickUpdateButton() {
      this.pendingApiCall = true;

      const token = localStorage.getItem("token");

      Axios.put("https://localhost:44360/api/users/address", this.address, {
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
</style>