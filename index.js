

function createNode(element){
  return document.createElement(element);
}

function append(parent, child){
  return parent.appendChild(child)
}

var htmlElements = "";
for (var i = 0; i < 3; i++) {
   htmlElements += '<div class="box"></div>';
}
var container = document.getElementById("project-box");
container.innerHTML = htmlElements;


// const ul = document.getElementsByClassName('box')

fetch('https://api.github.com/users/Harender-Kmr/repos')
.then((resp) => resp.json())
.then(function (data) {
  let git = data;
  return git.map(function (Project){
    // console.log(git)
    let li = createNode('li');
    let name = createNode('name');
    let desc = createNode('desc')
    
    name.innerHTML  = `${Project.name}`;
      desc.innerHTML = `${Project.description}`;

      append(li, name)
      append(li, desc)
      // append(ul,li)
    })
  })
  
  .catch((error) => {
    console.log(error)
  });
  
  
  // fetch('git.json')
  // .then((resp) => resp.json())
  // .then(function (data){
    //   let git = data.projects;
    //   return console.log(git)
    
    
  // return git.map(function (project){
  //   let li = createNade('li')
  //   let name = createNade('name')

  //   // name.innerHTML = `${git.name}`;
  //   name.innerHTML = `${project.name.title} ${project.name.first} ${project.name.last}`;

  //   append(li, name)
  //   append(ul, li)
  // })

  // .catch(function (error){
  //   console.log(error)
  // })
// })