//this is a helper method to create a DOM node
function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, element) {
    return parent.appendChild(element);
  }

const ul = document.getElementById('people');
console.log(ul);
const cont = document.getElementsByClassName('container');

console.log(cont[0]);
async function getRandom() {
  let promise = await fetch('https://randomuser.me/api/');
  let commits = await promise.json();
  // console.log(commits.results[0].name.first);
  // console.log(commits.results[0].name.last);
  // console.log(commits.results[0].picture.large);
  let row1 = createNode("div");
  let col1 = createNode("div");
  let col2 = createNode("div");
  let ul1 = createNode("ul");
  row1.classList.add("row");
  col1.classList.add("col-sm");
  col2.classList.add("col-sm");
  // let newNode = createNode("li");
  let newNode2 = createNode("li");
  let newNode3 = createNode("li");
  // let br = createNode("br");
  // newNode.classList.add("pic");
  newNode2.classList.add("first");
  newNode3.classList.add("last");
  let newPic = createNode("img");
  newPic.classList.add("pic");
  newPic.src=commits.results[0].picture.large;
  newNode2.innerHTML="First Name: "+commits.results[0].name.first;
  
  newNode3.innerHTML="Last Name: "+commits.results[0].name.last;
  // append(newNode, newPic);
  append(col1, newPic);
  append(ul1, newNode2);
  append(ul1, newNode3);
  append(col2, ul1);
  append(row1, col1);
  append(row1, col2);
  append(cont[0], row1);
  // append(ul1, )
  // append(ul, newPic);
  // append(ul,newNode2);
  // append(ul,newNode3);
  
  // append(newNode3, br);
  // console.log(ul);
}
for (let i = 0; i < 10; i++) {
  getRandom();
}

//insert your code here to complete this activity
//feel free to use the helper code above ... or take a different approach