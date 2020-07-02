<template>
  <div class="register">
    <TopBar />
    <div class="row container mx-auto">
      <div
        class="card col-xl-4 col-md-6 col-sm-6 col-8 c-register shadow pl-5 pr-5 pt-3 pb-4  mx-auto mt-5"
      >
        <h5 class="text-center">Register</h5>
        <hr />
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.Name}}</div>
          <input
            type="text"
            name="Name"
            class="form-control"
            :class="{'m-alert':errors.Name}"
            placeholder="Name"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.LastName}}</div>

          <input
            type="text"
            name="LastName"
            class="form-control"
            :class="{'m-alert':errors.LastName}"
            placeholder="Last Name"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.UserName}}</div>

          <input
            type="text"
            name="UserName"
            class="form-control"
            :class="{'m-alert':errors.UserName}"
            placeholder="UserName"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.Email}}</div>
          <input
            type="email"
            name="Email"
            class="form-control"
            :class="{'m-alert':errors.Email}"
            placeholder="Email"
            @change="onChangeInput"
          />
        </div>
        <div class="form-group mb-2">
          <div class="text-center mb-1 m-error" v-show="errors">{{errors.Password}}</div>

          <input
            type="password"
            name="Password"
            class="form-control"
            :class="{'m-alert':errors.Password}"
            placeholder="Password"
            @change="onChangeInput"
          />
        </div>
        <button
          type="submit"
          :disabled="disableButton"
          class="btn btn-register w-75 mx-auto mt-2"
          @click="onClickLoginButton"
        >Register</button>
        <div class="text-center mt-2" v-show="pendingApiCall">
          <PendingApiCall />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PendingApiCall from "../components/PendingApiCall";
import TopBar from "../components/TopBar/TopBar";
import jwttoken from "jwt-decode";

export default {
  name: "Register",
  data: function() {
    return {
      user: {
        Name: "",
        UserName: "",
        Email: "",
        Password: "",
        LastName: ""
      },
      pendingApiCall: false,
      disableButton: true
    };
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
  computed: {
    errors() {
      return this.$store.getters.getErrors;
    }
  },
  methods: {
    onChangeInput(e) {
      const { name, value } = e.target;

      this.user[name] = value;

      this.disableButton = false;
    },
    onClickLoginButton() {
      this.pendingApiCall = true;
      this.disableButton = true;

      this.$store
        .dispatch("register", this.user)
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
.register {
  background-color: #f1f1f1;
  height: 100vh;
}
.c-register {
  border-radius: 15px;
}
.btn-register {
  background-color: blueviolet;
  color: white;
  border-radius: 20px;
}
.m-alert {
  border-color: rgb(192, 7, 7);
  font-weight: 500;
}
.m-error {
  font-weight: 200;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style> 