<template>
  <div class="checkout">
    <Topbar />
    <h4 class="text-center mt-2">Checkout</h4>
    <div class="d-flex justify-content-center mt-4">
      <AddressSection
        :currentAddress="currentAddress"
        :onClickAddress="onClickAddress"
        :onClickRadio="onClickRadio"
      />
      <Summary :currentAddress="currentAddress" :onClickRadio="onClickRadio" />
    </div>

  </div>
</template>

<script>
import Topbar from "../components/TopBar/TopBar";
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
  components: {
    Topbar,
    AddressSection,
    Summary,
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