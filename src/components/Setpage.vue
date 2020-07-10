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
          <button :class="{mastered: x.mastery>90, working: x.mastery<90 && x.mastery>30, unseen: x.mastery<30}" class="set">
            <div>
              <h1>{{ x.title }}</h1>
              <h2>By {{ x.author }}</h2>
            </div>
            <div class="tags">
              <div class="tag" v-for="tag in x.tags" :key="tag" :id="tag"></div>
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
          mastery: 99,
          tags: ['blue', 'green', 'purple', 'yellow', 'orange', 'red', 'black'],
          creation: '7.8.2020'
        },
        {
          title: "Chem",
          author: 'James',
          terms: 84,
          mastery: 44,
          tags: ['blue', 'green', 'purple'],
          creation: '7.8.2020'
        },
        {
          title: "Chem",
          author: 'James',
          terms: 84,
          mastery: 20,
          tags: ['blue', 'green', 'purple'],
          creation: '7.8.2020'
        },
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
  transition-duration: 300ms;
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
  transition-duration: 400ms;
  float: left;
  border: 0px solid black;
  display: grid;
  grid: 1fr / 11fr 2fr;
  border-radius: 7px;  
  padding: 5px;
  margin: 20px;
  height: 150px;
  width: 200px;
}

.content .sets .yesset .mastered:hover {
  background-color: rgba(52, 202, 52, 0.24);
  transition-duration: 400ms;
}

.content .sets .yesset .working:hover {
  background-color: rgba(255, 216, 40, 0.438);
  transition-duration: 400ms;
}

.content .sets .yesset .unseen:hover {
  background-color: rgba(255, 0, 0, 0.247);
  transition-duration: 400ms;
}

.content .sets .yesset button h1, h2 {
  text-align: left;
  line-height: 17px;
  margin: 17px;
  font-size: 29px;
}

.content .sets .yesset button h2 {
  font-weight: 200;
  font-size: 17px;
}


.content .sets .yesset button .tags {
  grid-column: 2;
  grid-row: 1;
  margin-top: 6px;
  margin-right: 9px;
  height: 90%;
  width: auto;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 4px;
}

.content .sets .yesset button .tags .tag {
  height: auto;
  border-radius: 4px;
}

#blue{
  background-color: rgba(0, 60, 255, 0.466);
} #green {
  background-color: rgba(2, 109, 39, 0.699);
} #purple {
  background-color: rgba(76, 0, 255, 0.5);
} #yellow {
  background-color: rgb(244, 255, 88);
} #orange {
  background-color: rgba(216, 140, 0, 0.788);
} #red {
    background-color: rgba(255, 0, 0, 0.678);
} #black {
  background-color: rgb(0, 0, 0);
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
  transition-duration: 300ms;
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
  margin: 0px;
}

.content .add button:hover h2 {
  transition-duration: 300ms;
  font-size: 15px;
  float: right;
  margin: 14px;
}
</style>