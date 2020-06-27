<template>
  <div>
    <TopBar />
    <div>
      <div class="container-wrap">
        <img
          class="wallpaper"
          src="https://searchengineland.com/figz/wp-content/seloads/2015/05/ecommerce-shopping-retail-ss-1920.jpg"
          alt
        />
        <div class="centered">
          <h1 class="title mb-3">Welcome to eCommerce</h1>
          <h5
            class="sub-title"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</h5>
          <button class="btn t-button" @click="()=>this.$router.push('/products')">look products</button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar/TopBar";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    TopBar,
    Footer
  }
};
</script>

<style>
.wallpaper {
  width: 100%;
  height: 600px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.container-wrap {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  font-size: 2.5em;
  color: orangered;
  font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.sub-title {
  color: black;
}
.t-button {
  background-color: #6610f2;
  color: white;
  padding: 20px;
}
.t-button:hover {
  background-color: orangered;
  color: #6610f2;
}
</style>