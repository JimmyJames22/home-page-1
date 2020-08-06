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
          <h2 @click="makeFolder()">Create Folder</h2>
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
          if(this.sets[i].type == 'set'){
          let box = document.createElement('div');
          box.classList.add("yesset");
          box.id = i;
          let button = document.createElement('button');
          button.draggable = true;
          button.id = i;
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
          styleButton(button);
          styleSet(button, sets[i].mastery);
          styleText(h1, h2, h3);

        } else if(this.sets[i].type == 'folder') {
          let box = document.createElement('div');
          box.classList.add("yesset");
          box.id = i;
          let folder = document.createElement('button');
          folder.classList.add('folder');
          folder.id = sets.length;
          folder.draggable = true;
          box.appendChild(folder);
          let div1 = document.createElement('div');
          div1.classList.add('folder');
          div1.id = 'div1';
          folder.appendChild(div1);
          let div2 = document.createElement('div');
          div2.classList.add('folder');
          div2.id = 'div2';
          folder.appendChild(div2);
          document.getElementById('sets').append(box);
          styleBox(box);
          styleButton(folder);
          styleFolder(folder, div1, div2);
        }
      }
      let newBox = document.createElement('div');
      newBox.id = 'newBox';
      let newButton = document.createElement('button');
      newButton.id = 'newButton';
      let newh1 = document.createElement('h1');
      newh1.innerText = '+';
      newButton.appendChild(newh1);
      newBox.appendChild(newButton);
      document.getElementById('sets').append(newBox);
      styleBox(newBox);
      styleButton(newButton);
      styleNewButton(newButton, newh1);
    },
    makeFolder() {
      let box = document.createElement('div');
      box.id = 'newBox';
      box.appendChild(document.getElementById('newButton'));
      document.getElementById('newBox').classList.add('yesset');
      document.getElementById('newBox').id = sets.length;
      let folder = document.createElement('button');
      folder.classList.add('folder');
      folder.id = sets.length;
      folder.draggable = true;
      document.getElementsByClassName('yesset')[sets.length].appendChild(folder);
      sets.push({type: 'folder', title: 'yesssssir'});
      console.log(sets.length);
      let div1 = document.createElement('div');
      div1.classList.add('folder');
      div1.id = 'div1';
      folder.appendChild(div1);
      let div2 = document.createElement('div');
      div2.classList.add('folder');
      div2.id = 'div2';
      folder.appendChild(div2);
      document.getElementById('sets').append(box);
      styleBox(box);
      styleButton(folder);
      styleFolder(folder, div1, div2);
    }
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
    type: 'set',
    title: "Chem1",
    author: 'James',
    terms: 84,
    mastery: 99,
    location: 1,
    tags: ['blue', 'green', 'purple', 'yellow', 'orange', 'red'],
    studied: '7.10.2020',
    creation: '7.8.2020'
  },
  {
    type: 'set',
    title: "Chem2",
    author: 'James',
    terms: 84,
    mastery: 44,
    location: 2,
    tags: ['blue', 'green', 'purple', 'yellow'],
    studied: '8.14.2020',
    creation: '7.8.2020'
  },
  {
    type: 'set',
    title: "Chem3",
    author: 'James',
    terms: 84,
    mastery: 20,
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
  {
    type: 'set',
    title: "Chem4",
    author: 'James',
    terms: 84,
    mastery: 20,
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
  {
    type: 'set',
    title: "Chem5",
    author: 'James',
    terms: 84,
    mastery: 20,  
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
  {
    type: 'set',
    title: "Chem6",
    author: 'James',
    terms: 84,
    mastery: 20,
    location: 3,
    tags: ['blue', 'green', 'purple'],
    studied: '1.1.2020',
    creation: '7.8.2019'
  },
  {
    type: 'folder'
  }
];

let dragged = null;

document.addEventListener('dragstart', function(event){
  if(event.target.className == 'set' || event.target.className == 'folder'){
    dragged = event.target;
    dragged.style.opacity = 0.5;
  }
});

document.addEventListener('dragover', function(event){
  if(event.target.className === 'yesset'){
    if(dragged.parentNode.id > event.target.id && !event.target.contains(dragged)){
      let start = dragged.parentNode.id;
      dragged.parentNode.removeChild(dragged);
      for(let i=start; i>=event.target.id; i--){
        let moveSet = document.getElementsByClassName('yesset')[i].children[0];
        if(moveSet){
          document.getElementsByClassName('yesset')[parseInt(i)+1].appendChild(moveSet);
        }
      }
      event.target.append(dragged);
    } else if(dragged.parentNode.id < event.target.id && !event.target.contains(dragged) && dragged.parentNode){
      let start = dragged.parentNode.id;
      dragged.parentNode.removeChild(dragged);
      for(let i=start; i<=event.target.id; i++){
        let moveSet = document.getElementsByClassName('yesset')[i].children[0];
        if(moveSet){
          document.getElementsByClassName('yesset')[parseInt(i)-1].appendChild(moveSet);
        }
      }
      event.target.append(dragged);
    }
  }
});

document.addEventListener('dragend', function(event){
  event.target.style.opacity = "";
    for(let i=0; i<sets.length; i++){
      document.getElementsByClassName('yesset')[i].children[0].id = i;
    }
});

document.addEventListener('drop', function(event){
  if(event.target.className === 'yesset'){
    event.preventDefault();
  }
});

function styleBox(box){
  box.style.float = 'left';
  box.style.height = '190px';
  box.style.width = '240px';
  box.style.margin = '0 auto';
}

function styleButton(button){
  button.style.height = '150px';
  button.style.width = '200px';
  button.style.borderRadius = '7px';
  button.style.padding = '10px';
  button.style.margin = '20px';
  button.style.backgroundColor = 'rgb(235,235,235)';
  button.style.transitionDuration = '400ms';
  button.style.float = 'left';
  button.style.border = '0px solid black';
}

function styleSet(button, mastery){
  button.style.display = 'grid';
  button.style.grid = '1fr / 11fr 2fr';
  
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

function styleFolder(button, div1, div2){
  button.style.backgroundColor = 'rgba(220,220,220,0)';
  button.style.padding = '0px';
  button.style.display = 'grid';
  button.style.gridTemplateRows = '1fr 6fr';
  button.style.gridTemplateColumns = '7fr 8fr';
  button.style.gridGap = '0px';

  div1.style.backgroundColor = 'rgb(235,235,235)';
  div1.style.gridRow = '1/3';
  div1.style.gridColumn = '1';
  div1.style.borderRadius = '7px 4px 0px 7px';
  
  div2.style.backgroundColor = 'rgb(235,235,235)';
  div2.style.gridRow = '2';
  div2.style.gridColumn = '2'
  div2.style.borderRadius = '0px 7px 7px 0px';
}

function styleNewButton(button, h1){
  button.style.display = 'grid';
  button.style.grid = '1fr / 11fr 2fr';

  button.onmouseover = () => {
    button.style.backgroundColor = 'rgb(225,225,225)';
  }
  button.onmouseout = () => {
    button.style.backgroundColor = 'rgb(245,245,245)';
  }

  h1.style.color = 'rgb(255,255,255)';
  h1.style.lineHeight = '110px';
  h1.style.margin = '0px';
  h1.style.marginLeft = '20px';
  h1.style.fontSize = '100px';
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
  tagHolder.style.gridTemplateRows = 'repeat (6, 1fr)';
  tagHolder.style.gridGap = '4px';

  for(let i=0; i<6; i++){
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
  min-height: 50px;
  min-width: 50px;
  right: 3%;
  bottom: 5%;
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
  transition-duration: 100ms;
}

.content .add button:hover h1 {
  font-size: 0px;
  margin: 0px;
}

.content .add button h2 {
  font-size: 0px;
  text-align: left;
  margin: 0px;
  transition-duration: 100ms;
}

.content .add button:hover h2 {
  transition-duration: 300ms;
  text-align: left;
  font-size: 15px;
  margin: 14px;
}

.content .add button h2:hover {
  color: rgba(255, 255, 255, 0.6)
}
</style>