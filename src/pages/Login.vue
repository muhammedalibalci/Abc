<template>
  <div class="login">
    <TopBar />
    <div class="row container mx-auto">
      <div class="card c-login col-xl-4 col-md-6 col-12 col-sm-8 shadow pl-5 pr-5 pb-5 pt-3 mx-auto mt-5">
        <h5 class="text-center">Login</h5>
        <hr />
        <h6 class="text-center l-error" v-show="errors">{{errors.message}}</h6>
        <div class="form-group">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            @change="onChangeInput"
            @keydown="onChangeInput"
          />
        </div>
        <div class="form-group mt-3">
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
            @change="onChangeInput"
            @keydown="onChangeInput"
          />
        </div>
        <button
          type="submit"
          :disabled="disableButton"
          class="btn btn-login w-100 mx-auto mt-3"
          @click="onClickLoginButton"
        >Login</button>
        <div class="text-center mt-2" v-show="pendingApiCall">
          <PendingApiCall />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwttoken from "jwt-decode";
import PendingApiCall from "../components/PendingApiCall";
import TopBar from "../components/TopBar/TopBar";
export default {
  name: "Login",
  data: function() {
    return {
      auth: {},
      pendingApiCall: false,
      disableButton: true
    };
  },
  computed: {
    errors() {
      return this.$store.getters.getErrors;
    }
  },
  created() {
    const token = localStorage.getItem("token");
    let decode;
    console.log(token);

    if (token !== null) {
      decode = jwttoken(token);
    }
    if (!token === null && !decode.email) {
      this.$router.push("/products");
    }
  },
  components: {
    PendingApiCall,
    TopBar
  },
  methods: {
    onChangeInput(e) {
      const { name, value } = e.target;

      this.auth[name] = value;

      this.disableButton = false;
      this.error = false;
    },
    onClickLoginButton() {
      this.disableButton = true;

      this.pendingApiCall = true;
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

<style >
.login {
  background-color: #f1f1f1;
  height: 100vh;
}
.c-login {
  border-radius: 15px;
}
.btn-login {
  background-color: #6610f2;
  color: white;
  border-radius: 15px;
}
.l-error {
  color: #e45817;
  margin-bottom: 10px;
}
</style>