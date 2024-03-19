import "./style.css";

function create() {
  let file = document.getElementById("file").value;
  let link = document.createElement("a");
  link.href = window.location.href+"/" + file;
  link.innerText = file;
  document.body.appendChild(link);
}

document.querySelector("#app").innerHTML = `
  <div>
  <input id="file" type="text"/>
  <button id="button">Create Link</button>
  </div>
`;

document.getElementById("button").addEventListener("click",create);
