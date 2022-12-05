function changeH1Text(newTitle) {
  let titleNode = document.getElementById("title");
  titleNode.innerText = newTitle;
}

function changePageBackgroundColor(newBackgroundColor) {
  let bodyNode = document.body;
  bodyNode.style.backgroundColor = newBackgroundColor;
}

function changeTheFooterAddress(fakeAddress) {
  let addressNode = document.getElementById("address");
  addressNode.innerText = fakeAddress;
}

function addClass(classToBeAdded) {
  let linksNode = document.querySelectorAll("td a");
  for (let i = 0; i < linksNode.length; i++) {
    let linkNode = linksNode[i];
    linkNode.classList.add(classToBeAdded);
  }
}

function changeVisibility(classToBeAdded) {
  let imagesNode = document.getElementsByClassName("image-container");
  for (let i = 0; i < imagesNode.length; i++) {
    let imageNode = imagesNode[i];
    imageNode.classList.toggle(classToBeAdded);
  }
}

function changeTheColorOfPrices() {
  let pricesNode = document.getElementsByClassName("phone-price");
  let colors = ["red", "blue", "pink", "green", "purple"];
  for (let i = 0; i < pricesNode.length; i++) {
    let random = Math.floor(Math.random() * colors.length);
    let priceNode = pricesNode[i];
    priceNode.style.color = colors[random];
  }
}
