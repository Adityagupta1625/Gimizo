// console.log("page is fully loaded");
const modalElem = document.querySelector(".pg-modal");
const inputElem = document.querySelector(".pg-modal input");
const data = [];
var category = document.getElementsByClassName("categorisedClass");
for (i = 0; i < category.length; i++) {
  data.push({ link: category[i], title: category[i].textContent });
}
// convert item object to html that we can insert
function getItemHTML(item) {
  return `
  <a href=${item.link}>
    <li tabindex="0">
            <span>${item.title}</span>
    </li>
    </a>
  `;
}
var url = window.location.pathname;
var urlCat=url.substring(1);
function fixingPlaceholder(){
if(urlCat.startsWith("share")){
  changePlaceholder("Shared Video");
}
else{
  changePlaceholder(urlCat);
}
}
function changePlaceholder(urlCat) {
  if(urlCat!=""){
  document.getElementById("changePlaceholder").placeholder = urlCat;
  }
  else{
  document.getElementById("changePlaceholder").placeholder = "Popular";
  }
}

// a function to render array of items to content
function render(items) {
  // console.log("RenderItems")
  const container = document.querySelector(".content > ul");
  // clean old data
  container.innerHTML = "";
  // put new items
  for (const item of items) {
    const itemHTML = getItemHTML(item);
    container.innerHTML += itemHTML;
  }
}

// listen for user's input
inputElem.addEventListener("input", (e) => {
  const value = e.target.value;
  const filtered = data.filter((item) => {
    // check if user's input is inside title
    // very basic search
    const title = item.title.toLowerCase();
    return title.includes(value.toLowerCase());
  });
  // render the filtered data
  render(filtered);
});

// runs whenever user clicks a key
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "/") {
    event.preventDefault();
    // when user clicks "ctrl + /" we toggle the modal
    modalElem.classList.toggle("open");
  } else if (event.key === "esc") {
    event.preventDefault();
    // when user clicks "esc" we close modal
    modalElem.classList.remove("open");
  }
});
render(data);
// console.log("belowRenderData");

const content = document.querySelector(".content");
const cardshift = document.querySelector(".cards");
const body = document.querySelector(".body");
const bg = document.querySelector(".main-bg");

var i=0;
function ShowContent() {
    if(content.style.display = "none"){
      // console.log(content.style.display);
      content.style.display = "block";
      if(cardshift.classList.contains("cards")){
        cardshift.classList.remove("cards");
        cardshift.classList.add("shift");
        bg.style.height="700px";
        i=1;
      }
    }
  // console.log(i);
  // console.log(content.style.display);
  // console.log(cardshift.classList);
}
function HideContent(){
  if(i!==1){
  if(content.style.display="block"){
    content.style.display="none";
    if(cardshift.classList.contains("shift")){
      cardshift.classList.remove("shift");
      cardshift.classList.add("cards");
      bg.style.height="450px";
    }
  }
  }
  i=0;
  // console.log(i);
  // console.log(content.style.display);
  // console.log(cardshift.classList);
}

window.addEventListener('onload',fixingPlaceholder(),false);