<template>
  <div>
    <TopBar />
    <div class="container mt-5 w-100">
      <div class="text-center">
        <PendingApiCall v-if="pendingApiCall" />
      </div>
      <div class="a-top mx-auto" v-show="!pendingApiCall && hasAddress">
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
      <div class="text-center mt-2 " v-show="!pendingApiCall && hasAddress">
        <button
          class="btn btn-success w-50"
          @click="visibleUpdateSection = !visibleUpdateSection "
        >Edit</button>
        <button class="btn btn-danger w-50 " @click="onClickContinue" > Continue</button>
      </div>
      <UpdateSection
        v-if="this.visibleUpdateSection || !hasAddress"
        :hasAddress="hasAddress"
        :address="address"
      />
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import TopBar from "../components/TopBar/TopBar";
import PendingApiCall from "../components/PendingApiCall";
import UpdateSection from "../components/Address/UpdateSection";
export default {
  name: "AddressSection",
  data() {
    return {
      address: {},
      hasAddress: true,
      pendingApiCall: false,
      visibleUpdateSection: false
    };
  },
  components: {
    TopBar,
    UpdateSection,
    PendingApiCall
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
    onClickContinue(){
      this.$router.push('/order')
    }
  }
};
</script>

<style>
.a-top {
  border: 1px solid gray;
  padding: 15px;
  text-align: center;
  font-size: 20px;
}
</style>