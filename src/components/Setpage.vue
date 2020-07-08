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
      <div class="sets">
        <div class="noset" v-if="sets.includes('noval')">
          <h1>No sets yet :(</h1>
          <a href="./home">Make one!</a>
        </div>
        <div class="yesset" v-else v-for="x in sets" :key="x.title">
          <button class="set">
            <div>
              <h1>{{ x.title }}</h1>
              <h2>By {{ x.author }}</h2>
            </div>
            <div class="tags" v-for="tag in x.tags" :key="tag">
              <div id=tag :style="{backgroundColor:tag}"></div>
            </div>
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
  </div>
</template>

<script>
export default {
  props: {
    /*sets: {
      type: Array,
      required: true,
      default: ['noval']
    }*/
  },
  data () {
    return {
      sets: [ // temporary
        {
          title: "Chem",
          author: 'James',
          terms: 84,
          mastery: 44,
          tags: ['blue', 'green'],
          creation: '7.8.2020'
        },
        {
          title: 'English',
          author: 'Zoe',
          terms: 138,
          mastery: 32,
          tags: ['orange', 'yellow', 'green'],
          creation: '7.8.2020'
        },
        {
          title: 'Spanish',
          author: 'Sneha',
          terms: 45,
          mastery: 90,
          tags: ['purple', 'yellow', 'blue'],
          creation: '7.8.2020'
        }
      ]
    }
  }
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

.content .sets .noset {
  width: 100%;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: grid;
}

.content .sets .noset h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);  font-size: 70px;
}

.content .sets .noset a {
  color: black;
  transform: translate(0px, 65px);
  text-decoration: none;
  font-size: 30px;
}

.content .sets .noset a:hover {
  color: rgb(182, 15, 15);
  transition-duration: 300ms;
}

.content .sets .yesset {
  width: 100%;
  margin: 0 auto;
}

.content .sets .yesset button {
  float: left;
  width: 200px;
  height: 150px;
  margin: 30px;
  background-color: rgb(226, 226, 226);
  border: 0px;
  border-radius: 7px;
  display: grid;
  grid-template-columns: 90% 1fr;
}

.content .sets .yesset h1 {
  white-space: nowrap;
  text-align: left;
  margin-top: 40px;
  margin: 20px;
  line-height: 30px;
}

.content .sets .yesset h2 {
  font-size: 18px;
  text-align: left;
  font-weight: 200;
  line-height: 0px;
  margin: 20px;
}

.content .sets .yesset .tags {
  height: 100%;
  width: 100%;
  grid-column: 2;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 5px;
}

.content .sets .yesset .tags #tag {
  width: 100%;
  border-radius: 100%;
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