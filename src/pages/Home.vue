<template>
  <div>
    <TopBar />
    <div>
      <div class="container-wrap">
        <img
          class="wallpaper"
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt
        />
        <div class="centered">
          <h1 class="title mb-4">Welcome to eCommerce</h1>
          <h5
            class="sub-title"
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eum error earum soluta voluptatum nisi laboriosam eos saepe asperiores dolorum.</h5>
          <button
            class="btn t-button mt-4"
            @click="()=>this.$router.push('/products')"
          >look products</button>
        </div>
        <WallPaperSub />
        <Three />
        <div class="w-sub p-5">
          <h3 class="mb-4">We handle all of your travel needs</h3>
          <div
            class="w-50 mx-auto"
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime nam rerum vel earum error fugiat cupiditate, dolore eius! Minus, explicabo.</div>
        </div>
        <Two/>
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
import Three from "../components/Home/Three";
import WallPaperSub from "../components/Home/WallPaperSub";
import Two from "../components/Home/Two";
export default {
  name: "Home",
  components: {
    TopBar,
    Footer,
    Three,
    WallPaperSub,
    Two
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
  top: 13%;
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
  font-weight: 600;
  font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.t-button {
  background-color: #6610f2;
  color: white;
  padding: 20px;
}
.t-button:hover {
  background-color: orangered;
  color: white;
}
.w-sub {
  color: black;
}
.sub-text-f {
}
</style>