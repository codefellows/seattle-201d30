'use strict';

// TODO hey, what about an array of tree objects! that would have file path for picture, and the tree info
// TODO don't repeat the correct picture
// TODO randomize tree image placement
// TODO some way to play again without having to refresh

var treeNames = ['Big_Leaf_Maple', 'Douglas-fir', 'Madrona', 'Pacific_Silver_Fir', 'Ponderosa_Pine', 'Sitka_Spruce', 'Western_Hemlock', 'Western_Red_Cedar'];
var correctTree = '';
var wrongTree = '';
var treeNameParent = document.getElementById('treeName');
var treeImagesParent = document.getElementById('treeImages');
var responseParent = document.getElementById('response');

function setup () {
  // call this with a random name
  correctTree = generateRandomTree();
  wrongTree = generateRandomTree();
  renderTreeName(correctTree);
  renderTreeImage(correctTree);
  renderTreeImage(wrongTree);
}

setup();

treeImagesParent.addEventListener('click', function (event) {
  var answer = event.target.getAttribute('id');
  if (answer === correctTree) {
    renderResponse('woohoo!');
  } else {
    renderResponse('wrong! virus alert.');
  }
});

function generateRandomTree () {
  var index = Math.floor(Math.random() * treeNames.length);
  return treeNames[index];
}

function renderTreeName (treeName) {
  var h3 = document.createElement('h3');
  h3.textContent = treeName;
  treeNameParent.append(h3);
}

function renderTreeImage (treeName) {
  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + treeName + '.jpeg');
  img.setAttribute('id', treeName);
  treeImagesParent.append(img);
}

function renderResponse (response) {
  var p = document.createElement('p');
  p.textContent = response;
  responseParent.append(p);
}
