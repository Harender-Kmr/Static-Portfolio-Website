const ul = document.getElementById('git-api')

function createNade(element){
  return document.createElement(element);
}

function append(parent, child){
  return parent.appendChild(child)
}

fetch('git.json')
.then((resp) => resp.json)
.then(function (data){
  let git = data.Projects;
  return git.map(function (project){
    let li = createNade('li')
    let name = createNade('name')

    name.innerHTML = `${git.name}`

    append(li, name)
    append(ul, li)
  })

  .catch(function (error){
    console.log(error)
  })
})