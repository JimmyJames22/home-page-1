<template>
  <div class="page">
    <div class="header">
      <div class="navbar">
        <button class="inactive" @click="()=>this.$router.push('home')">Logo</button>
        <button class="active" @click="()=>this.$router.push('sets')">Sets</button>
        <button class="inactive" @click="()=>this.$router.push('home')">Overview</button>
        <button class="inactive" @click="()=>this.$router.push('classes')">Classes</button>
        <button class="inactive" @click="()=>this.$router.push('info')">Info</button>
      </div>
    </div>
    <div class="content">
      <div class="add">
        <button>
          <h1>+</h1>
          <h2>Create Set</h2>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
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

.navbar .active {
  background-color: rgb(15, 138, 58);
}

.navbar .inactive:hover {
  color: rgba(255, 255, 255, 0.75);
  transition-duration: 300ms;
}  



.content .add button {
  position: fixed;
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
  transition-delay: 250ms;
  transition-duration: 125ms;
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