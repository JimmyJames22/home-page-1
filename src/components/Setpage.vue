<template>
  <div id="page">
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
      <div id="sets">
        <div class="noset" v-if="sets.includes('noval')">
          <h1>No sets yet :(</h1>
          <a href="./home">Make one!</a>
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
  name: 'Setpage',
  mounted: function (){
    this.makeSets(sets)
  },
  props: {
    /*sets: {
      type: Array,
      required: true,
      default: ['noval']
    }*/
  },
  data () {
    return {
      sets: sets
    }
  },
  methods: {
    getIndex: (array, element) => {
      let index = array.findIndex(element);
      return index;
    },
    makeSets(sets) {
      for(let i=0; i<this.sets.length; i++){
        let box = document.createElement('div');
        box.classList.add = "yesset";
        box.id = "box " + i;
        let button = document.createElement('button');
        if(this.sets[i].mastery > 90){
          button.classList.add("mastered");
        } else if (this.sets[i].mastery < 91 && this.sets[i].mastery > 20){
          button.classList.add("working");
        } else {
          button.classList.add("unseen");
        }
        button.id = "btn" + i;
        button.classList.add("set");
        let h1 = document.createElement('h1');
        h1.innerText = sets[i].title;
        button.append(h1);
        let h2 = document.createElement('h2');
        h2.innerText = sets[i].author;
        button.append(h2);
        let h3 = document.createElement('h3');
        h3.innerText = sets[i].studied;
        button.append(h3);
        if(sets[i].tags){
          makeTags(sets[i].tags, button);
        }
        box.append(button);
        document.getElementById('sets').append(box);
        styleBox(box);
        styleButton(button, sets[i].mastery);
        styleText(h1, h2, h3);
        
      }
    },
  },
  computed: {
     yesSetCols: () => {
      let yesSet = document.querySelector(".content.sets.yesset");
      let numCols;
      yesSet.style.display = "grid";
      for(let i=0; i<yesSet.offsetWidth; i+=200){
        numCols++;
      }
      return numCols;
    },
    yesSetRows: (numCols) => {
      let yesSet = document.querySelector(".content.sets.yesset");
      let numRows;
      numRows = math.ciel(this.sets.length/numCols);
      return numRows;
    }
  }
}

let sets = [ // temporary
  {
    title: "Chem",
    author: 'James',
    terms: 84,
    mastery: 99,
    location: 1,
    tags: ['blue', 'green', 'purple', 'yellow', 'orange', 'red', 'black'],
    studied: '7.10.2020',
    creation: '7.8.2020'
  },
  {
    title: "Chem",
    author: 'James',
    terms: 84,
    mastery: 44,
    location: 2,
    tags: ['blue', 'green', 'purple', 'yellow'],
    studied: '8.14.2020',
    creation: '7.8.2020'
  },
  {
    title: "Chem",
    author: 'James',
    terms: 84,
    mastery: 20,
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
  {
    title: "Chem",
    author: 'James',
    terms: 84,
    mastery: 20,
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
  {
    title: "Chem",
    author: 'James',
    terms: 84,
    mastery: 20,
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
  {
    title: "Chem",
    author: 'James',
    terms: 84,
    mastery: 20,
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
];

function styleBox(box){
  box.style.float = 'left';
  box.style.height = '190px';
  box.style.width = '240px';
  box.style.margin = '0 auto';
}

function styleButton(button, mastery){
  button.style.backgroundColor = 'rgb(235,235,235)';
  button.style.transitionDuration = '400ms';
  button.style.float = 'left';
  button.style.border = '0px solid black';
  button.style.display = 'grid';
  button.style.grid = '1fr / 11fr 2fr';
  button.style.borderRadius = '7px';
  button.style.padding = '10px';
  button.style.margin = '20px';
  button.style.height = '150px';
  button.style.width = '200px';

  button.onmouseout = () => {
    button.style.backgroundColor = 'rgb(235,235,235)';
  }

  if(mastery > 90){
    button.onmouseover = () => {
      button.style.backgroundColor = 'rgba(52, 202, 52, 0.24)';
      button.style.transitionDuration = '400ms';
    }
  } else if (mastery < 91 && mastery > 30){
    button.onmouseover = () => {
      button.style.backgroundColor = 'rgba(255, 216, 40, 0.438)';
      button.style.transitionDuration = '400ms';
    }
  } else {
    button.onmouseover = () => {
      button.style.backgroundColor = 'rgba(255, 0, 0, 0.247)';
      button.style.transitionDuration = '400ms';
    }
  }
}

function styleText(h1, h2, h3){
  for(let i=0; i<arguments.length; i++){
    arguments[i].style.textAlign = 'left';
    arguments[i].style.lineHeight = 'auto';
    arguments[i].style.margin = '17px';
    arguments[i].style.marginTop = '10px';
    arguments[i].style.fontSize = '29px';
    arguments[i].style.gridColumn = '1/1';
  }

  h1.style.height = '35px';
  
  h2.style.fontWeight = '200';
  h2.style.fontSize = '20px';
  h2.style.position = 'relative';
  h2.style.bottom = '60px';

  h3.style.fontSize = '13px';
  h3.style.fontWeight = '200';
  h3.lineHeight = '0px';
  h3.style.position = 'relative'; 
  h3.style.bottom = '80px';
}

function makeTags(tags, button){
  let tagHolder = document.createElement('div');
  tagHolder.id = 'tags';

  tagHolder.style.gridArea = '1/2';
  tagHolder.style.marginTop = '6px';
  tagHolder.style.marginRight = '9px';
  tagHolder.style.height = '120px';
  tagHolder.style.width = 'auto';
  tagHolder.style.display = 'grid';
  tagHolder.style.gridTemplateRows = 'repeat (7, 1fr)';
  tagHolder.style.gridGap = '4px';

  for(let i=0; i<sets.length; i++){
    let tag = document.createElement('div');
    tag.id = tags[i];
    tagHolder.append(tag);

    tag.style.borderRadius = '4px';
    tag.style.height = 'auto';

    switch(tag.id){
      case 'blue':
        tag.style.backgroundColor = 'rgba(0, 60, 255, 0.466)';
        break;
      case 'green':
        tag.style.backgroundColor = 'rgba(2, 109, 39, 0.699)';
        break;
      case 'purple':
        tag.style.backgroundColor = 'rgba(76, 0, 255, 0.5)';
        break;
      case 'yellow':
        tag.style.backgroundColor = 'rgb(244, 255, 88)';
        break;
      case 'orange':
        tag.style.backgroundColor = 'rgba(216, 140, 0, 0.788)';
        break;
      case 'red':
        tag.style.backgroundColor = 'rgba(255, 0, 0, 0.678)';
        break;
      case 'black':
        tag.style.backgroundColor = 'black';
    }
  }

  button.append(tagHolder);

}
      
</script>

<style scoped>
#page{
  display: grid;
  grid: 40px 1fr/10px minmax(250px, 1fr) 10px;
  grid-gap: 20px;
}

.header {
  grid-column: 1/span 3;
}

.navbar {
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

.content {
  grid-row: 2;
  grid-column: 2;
}

.content #sets .noset {
  width: 100%;
  white-space: nowrap;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: grid;
}

.content #sets .noset h1 {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);  font-size: 70px;
}

.content #sets .noset a {
  color: black;
  transform: translate(0px, 65px);
  text-decoration: none;
  font-size: 30px;
}

.content #sets .noset a:hover {
  color: rgb(182, 15, 15);
  transition-duration: 300ms;
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