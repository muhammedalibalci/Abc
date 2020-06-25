<template>
  <div class="w-50 mx-auto mt-5">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" name="email" class="form-control" @change="onChangeInput" />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" name="password" class="form-control" @change="onChangeInput" />
    </div>
    <div class="form-group form-check mt-2">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button
      type="submit"
      :disabled="disableButton"
      class="btn btn-primary w-100 mt-2"
      @click="onClickLoginButton"
    >Login</button>
    <div class="text-center mt-2">
      <PendingApiCall v-show="pendingApiCall" />
    </div>
  </div>
</template>

<script>
import PendingApiCall from "../components/PendingApiCall";
export default {
  name: "Login",
  data: function() {
    return {
      auth:{},
      pendingApiCall: false,
      disableButton: true
    };
  },
  components: {
    PendingApiCall
  },
  methods: {
    onChangeInput(e) {
      const { name, value } = e.target;

      this.auth[name] = value

      this.disableButton = false;
    },
    onClickLoginButton() {
      this.pendingApiCall = true;
      this.disableButton = true;
      
      this.$store
        .dispatch("login", this.auth)
        .then(res => {
          console.log(res);
          this.pendingApiCall = false;
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
          this.pendingApiCall = false;
        });
    }
  }
};
</script>