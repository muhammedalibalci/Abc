<template>
  <div class="modal">
    <div class="container w-50">
      <div class="modal-content p-5">
        <div class="text-center" v-show="pendingApiCall">
          <PendingApiCall />
        </div>
        <h3 class="modal-title text-center">Payment Details</h3>
        <hr />
        <div class="panel-body modal-body">
          <form role="form">
            <div class="form-group pb-2">
              <label for="cardNumber">CARD NUMBER</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="cardNumber"
                  placeholder="Valid Card Number"
                  required
                  autofocus
                />
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-lock"></span>
                </span>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-7 col-md-7">
                <div class="form-group">
                  <label for="expityMonth">EXPIRY DATE</label>
                  <div class="col-xs-6 col-lg-6 pl-ziro">
                    <input
                      type="text"
                      class="form-control"
                      id="expityMonth"
                      placeholder="MM"
                      required
                    />
                  </div>
                  <div class="col-xs-6 col-lg-6 pl-ziro">
                    <input
                      type="text"
                      class="form-control"
                      id="expityYear"
                      placeholder="YY"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="col-xs-5 col-md-5 pull-right">
                <div class="form-group">
                  <label for="cvCode">CV CODE</label>
                  <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                </div>
              </div>
            </div>
          </form>
        </div>
        <br />
        <button class="btn btn-pay" @click="payment">Pay</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import PendingApiCall from "../PendingApiCall";
export default {
  data(){
    return{
      pendingApiCall:false
    }
  },
  props: {
    currentAddress: Object
  },
  components: {
    PendingApiCall
  },
  methods: {
    payment() {
      this.pendingApiCall = true
      const id = localStorage.getItem("Id");

      Axios.post("https://abc-app-api.azurewebsites.net/api/payments/" + id)
        .then(res => {
          console.log(res);

          this.onClickPay = false;

          const order = {
            UserId: id,
            AddressId: this.currentAddress.id
          };
          Axios.post("https://abc-app-api.azurewebsites.net/api/orders", order).then(() => {
            this.pendingApiCall = false
            this.onClickPay = false;
            this.$router.push("/products");
            this.$store.commit('emptyCart');
          });
        })
        .catch(err => {
          console.log(err);
          this.onClickPay = false;
        });
    }
  }
};
</script>

<style>
.modal-content {
  background-color: white;
}

.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #f1f1f1;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.btn-pay {
  border-radius: 5px;
  background-color: orangered;
  color: white;
}
</style>