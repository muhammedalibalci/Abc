<template>
  <div class="checkout">
    <Topbar />
    <h4 class="text-center mt-2">Checkout</h4>
    <div class="row container mt-4">
      <div class="col-xl-6 col-md-6 mx-auto">
 <AddressSection
        :currentAddress="currentAddress"
        :onClickAddress="onClickAddress"
        :onClickRadio="onClickRadio"
      />
      </div>
      <div class="col-xl-4 col-md-6 mb-5">
      <Summary :currentAddress="currentAddress" :onClickRadio="onClickRadio" />

      </div>
     
    </div>
  </div>
</template>

<script>
import Topbar from "../components/TopBar/TopBar";
import jwttoken from "jwt-decode";
import AddressSection from "../components/Checkout/AddressSection";
import Summary from "../components/Checkout/Summary";
export default {
  name: "Checkout",
  data() {
    return {
      currentAddress: {},
      onClickRadio: false
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
  components: {
    Topbar,
    AddressSection,
    Summary
  },
  methods: {
    onClickAddress(address) {
      this.onClickRadio = true;
      this.currentAddress = address;
    }
  }
};
</script>

<style>
.checkout {
  background-color: #f1f1f1;
  min-height: 100vh;
}
</style>