<template>
  <div class="page">
    <div class="header">
      <div class="navbar">
        <button @click="()=>this.$router.push('home')">Logo</button>
        <button class="inactive" @click="()=>this.$router.push('sets')">Sets</button>
        <button class="active" @click="()=>this.$router.push('home')">Overview</button>
        <button class="inactive" @click="()=>this.$router.push('classes')">Classes</button>
        <button class="inactive" @click="()=>this.$router.push('info')">Info</button>
      </div>
      <div class="user">
        <h1>{{user.percent}}%</h1>
        <h2>Mastered</h2>
        <ProgressBar class="progressbar" :mastered="80" :working="4"/>
      </div>
    </div>
    <div class="content">
      <div class="sets">
        <div class="recent">
          <h1 class="title">Recent</h1>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>24%</h4>
          </button>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
        </div>
        <div class="needsWork">
          <h1 class="title">Work On</h1>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
        </div>
        <div class="new">
          <h1 class="title">New</h1>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
          <button class="set">
            <h2>Name</h2>
            <h3>By AUTHOR</h3>
            <h3>DATE</h3>
            <h4>xx%</h4>
          </button>
        </div>
      </div>
      <div class="add">
        <button>
          <h1>+</h1>
          <h2>Create Set</h2>
        </button>
      </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";
export default {
  name: 'Homepage',
  components: {
    ProgressBar
  },
  data () {
    return {
      user: {
        name: "nameString",
        percent: 82
      }
    }
  }, methods: {
    
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page {
  width: 100%;
  display: grid;
  grid-template-rows: 375px 635px 90px;
}

.header {
  grid-row: 1;
  display: grid;
  grid: 40px 300px 1fr/ 1fr 500px 1fr;
}

.navbar {
  grid-area: 1/1/span 1/span 3;
  background-color: rgb(15, 179, 72);
  display: grid;
  grid-template-columns: 15% repeat(3, 1fr) 15%;
}

.navbar h1 {
  font-size: 20px;
  font-weight: 700;
  margin-left: 0.5em;
  line-height: 10px;
  border: 4px solid green;
  text-align: center;
}

.navbar button {
  background-color: rgb(15, 179, 72);
  border: 0px solid black;
  font-weight: 700;
  font-size: 17px;
  padding: 10px 0;
}

.navbar .inactive:hover {
  color: rgba(255, 255, 255, 0.75);
  transition-duration: 300ms;
} 

.navbar .active {
  background-color: rgb(15, 138, 58);
}

.user {
  grid-area: 2/2/span 1/span 1;
  text-align: center;
  line-height: 0px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 185px 65px 50px;
}

.user h1 {
  font-size: 170px;
}

.user h2 {
  font-size: 35px;
  grid-row: 2;
  font-weight: 500;
}

.progressbar {
  grid-row: 3;
}

.content {
  grid-row: 2;
  display: grid;
  grid: 635px / 1fr 80% 1fr;
}

.content .sets {
  grid-area: 1/2/span 1/span 1;
  background-color: rgb(233, 233, 233);
  display: grid;
  grid: 30px 1fr 1fr 1fr/ 10px 1fr 1fr 1fr 10px;
  grid-gap: 7px;
  border-radius: 7px;
}

.content .sets button {
  border-radius: 7px;
  width: 92%;
  height: 24.8%;
  background-color: rgb(255, 255, 255);
  border: 0px solid rgb(196, 196, 196);
  margin: 4%;
  margin-top: 20px;
  margin-bottom: 25px;
  display: grid;
  padding: 0px;
  grid: 2fr 1fr 0.5fr 0.5fr/1fr;
}

.content .sets .recent button:hover {
  background-color: rgba(86, 219, 190, 0.3);
  transition-duration: 500ms;
}

.content .sets .needsWork button:hover {
  background-color: rgba(230, 133, 69, 0.3);
  transition-duration: 500ms;
}

.content .sets .new button:hover {
  background-color: rgba(219, 210, 86, 0.3);
  transition-duration: 500ms;
}

.content .sets button:hover h2 {
  color: rgb(30, 72, 209);
  transition-duration: 500ms;
}

.content .sets button:hover h3 {
  color: rgb(209, 30, 30);
  transition-duration: 500ms;
}

.content .sets button:hover h4 {
  background-color: rgba(17, 163, 37, 0.5);
  transition-duration: 500ms;
}

.content .sets h2 {
  text-align: left;
  margin: 10px;
  font-size: 25px;
  font-weight: 700;
}

.content .sets h3 {
  text-align: left;
  margin: 5px;
  font-size: 17px;
  font-weight: 400;
  margin-left: 10px;
  margin-top: 0px;
}

.content .sets h4{
  text-align: right;
  padding: 4px;
  grid-row: 4;
  font-size: 20px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: rgba(77, 77, 77, 0.658);
}

.content .sets h1 {
  text-align: center;
  padding: 6px;
  margin: 6px;
  margin-top: 20px;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
}

.content .recent{
  grid-area: 1/2/span 4/span 1;
}

.content .recent h1 {
  background-color: rgba(45, 111, 255, 0.5);
}

.content .needsWork{
  grid-area: 1/3/span 4/span 1;
}

.content .needsWork h1 {
  background-color: rgba(255, 45, 45, 0.5);
}

.content .new {
  grid-area: 1/4/span 4/span 1;
}

.content .new h1 {
  background-color: rgba(14, 173, 35, 0.5);
}

.content .add button {
  position: fixed;
  height: 50px;
  min-width: 50px;
  right: 3%;
  bottom: 5%;
  white-space: nowrap;
  border: 0px solid black;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.199);
  color: white;
}

.content .add button:hover {
  background-color: rgb(160, 160, 160);
  transition-duration: 300ms;;
}

.content .add button h1 {
  float: left;
  margin: 7px;
}

.content .add button:hover h1 {
  font-size: 0px;
  margin: 0px;
}

.content .add button h2 {
  font-size: 0px;
  float: right;
}

.content .add button:hover h2 {
  transition-duration: 300ms;
  font-size: 15px;
  float: right;
  margin: 14px;
}

</style>
