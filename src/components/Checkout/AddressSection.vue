<template>
  <div class="mx-auto">
    <div class="card pl-4 pr-5 pt-2 pb-4">
      <table>
        <thead>
          <tr class="head mt-2">
            <th class="p-3">
              <i class="fa fa-check-circle"></i>
            </th>
            <th>Address</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="address in addresses.filter(x=>x.isDeleted !== true)" :key="address.id">
            <th>
              <input
                type="radio"
                name="shipAddress"
                @click="onClickRadioAddress(address)"
                :value="address.id"
              />
            </th>
            <th class="pr-3">{{address.address1}}</th>
            <th class="pr-3">{{address.phone}}</th>
            <th>{{address.city}}</th>
          </tr>
        </tbody>
      </table>
      <div class="text-center" v-show="pendingApiCall ">
        <PendingApiCall />
      </div>
      <div v-show="isFound" class="alert alert-danger text-center">
        <span>Not Found</span>
      </div>
      <div></div>
    </div>
    <button
      class="btn btn-address btn-sm mt-2 mb-3"
      @click="()=>this.$router.push('add-address')"
    >New Address</button>
    <button class="btn btn-pay btn-sm mt-2 mb-3 ml-2" v-if="onClickRadio" @click="paymentSection=true">
      <i class="fa fa-credit-card"></i> Pay
    </button>
    <PaymentModal :currentAddress="currentAddress" v-if="paymentSection" />
  </div>
</template>

<script>
import Axios from "axios";
import PaymentModal from "../Checkout/PaymentModal";
import PendingApiCall from "../PendingApiCall";
export default {
  name: "AddressSection",
  components: {
    PaymentModal,
    PendingApiCall
  },

  data() {
    return {
      addresses: [],
      isFound: false,
      paymentSection: false,
      onClickPay: false,
      pendingApiCall: true
    };
  },
  props: {
    currentAddress: Object,
    onClickAddress: { type: Function },
    onClickRadio: Boolean
  },
  mounted() {
    this.fetchAddresses();
  },
  methods: {
    fetchAddresses() {
      const token = localStorage.getItem("token");

      Axios.get("https://abc-app-api.azurewebsites.net/api/users/address", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
        .then(res => {
          this.addresses = res.data;
          this.pendingApiCall = false;
        })
        .catch(() => {
          this.isFound = true;
          this.pendingApiCall = false;
        });
    },
    onClickRadioAddress(address) {
      this.onClickAddress(address);
    },
    payment() {}
  }
};
</script>

<style>
.head {
  color: #2a9af2;
}
.btn-address {
  border-radius: 5px;
  background-color: rgb(68, 68, 68);
  color: white;
}
.btn-pay {
  border-radius: 5px;
  background-color: orangered;
  color: white;
}
ul {
  list-style-type: none;
}
</style>