<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="onClickPay"
  >
    <div class="container modal-dialog" role="document">
      <div class="modal-content p-5">
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
        <button class="btn btn-success" @click="payment">Pay</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Checkout",
  data() {
    return {
      onClickPay: true
    };
  },
  methods: {
    payment() {
      const id = localStorage.getItem("Id");
      Axios.post("https://abc-app-api.azurewebsites.net/api/payments/" + id)
        .then(res => {
          this.$router.push("/products");
          this.onClickPay = false;

          console.log(res);
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

</style>