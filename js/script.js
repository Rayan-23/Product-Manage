var prodeutNameInput = document.getElementById("prodeutNameInput");
var prodeutPriceInput = document.getElementById("prodeutPriceInput");
var prodeutCategoryInput = document.getElementById("prodeutCategoryInput");
var prodeutDescriptionInput = document.getElementById(
  "prodeutDescriptionInput"
);
var prodeutContainer;
if (localStorage.getItem("myProduct") == null) {
  prodeutContainer = [];
} else {
  prodeutContainer = JSON.parse(localStorage.getItem("myProduct"));
  disPlayProduct();
}
function addProdeut() {
  var prodeut = {
    name: prodeutNameInput.value,
    price: prodeutPriceInput.value,
    cat: prodeutCategoryInput.value,
    des: prodeutDescriptionInput.value,
  };
  prodeutContainer.push(prodeut);
  localStorage.setItem("myProduct", JSON.stringify(prodeutContainer));
  disPlayProduct();
  deleteForm();
  console.log(prodeutContainer);
}
function deleteForm() {
  prodeutNameInput.value = "";
  prodeutPriceInput.value = "";
  prodeutCategoryInput.value = "";
  prodeutDescriptionInput.value = "";
}
function disPlayProduct() {
  var cortoona = ``;
  for (let i = 0; i < prodeutContainer.length; i++) {
    cortoona += `
        <tr>
          <th scope="row"> ${i + 1}  </th>
          <td>${prodeutContainer[i].name}</td>
          <td>${prodeutContainer[i].price}</td>
          <td>${prodeutContainer[i].cat}</td>
          <td>${prodeutContainer[i].des}</td>
          <td><button class="btn btn-outline-warning" onclick="editProduct(${i})">update</button></td>
          <td><button onclick="deleteProdeut(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cortoona;
}
function deleteProdeut(ProdeutIndex) {
  prodeutContainer.splice(ProdeutIndex, 1);
  localStorage.setItem("myProduct", JSON.stringify(prodeutContainer));
  disPlayProduct();
}
function searchProduct(searchTerm) {
  var cortoona = ``;
  for (let i = 0; i < prodeutContainer.length; i++) {
    if (
      prodeutContainer[i].name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      prodeutContainer[i].price.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      cortoona += `<tr>
          <th scope="row"> ${i + 1}  </th>
          <td>${prodeutContainer[i].name}</td>
          <td>${prodeutContainer[i].price}</td>
          <td>${prodeutContainer[i].cat}</td>
          <td>${prodeutContainer[i].des}</td>
          <td><button class="btn btn-outline-warning" onclick="editProduct(${i})">update</button></td>
          <td><button onclick="deleteProdeut(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML = cortoona;
}

function editProduct(index) {
  var product = prodeutContainer[index];
  prodeutNameInput.value = product.name;
  prodeutPriceInput.value = product.price;
  prodeutCategoryInput.value = product.cat;
  prodeutDescriptionInput.value = product.des;
  document.getElementById("updateButton").onclick = function () {
    updateProduct(index);
  };
}

function updateProduct(index) {
  prodeutContainer[index].name = prodeutNameInput.value;
  prodeutContainer[index].price = prodeutPriceInput.value;
  prodeutContainer[index].cat = prodeutCategoryInput.value;
  prodeutContainer[index].des = prodeutDescriptionInput.value;
  localStorage.setItem("myProduct", JSON.stringify(prodeutContainer));
  displayProduct();
  deleteForm();
}

function validateProductName() {
  var regex = /^[A-Z][a-z]{5,50}$/;
  if (regex.test(prodeutNameInput.value) == true) {
    prodeutNameInput.classList.add("is-valid");
    prodeutNameInput.classList.remove("is-invalid");
  } else {
    prodeutNameInput.classList.remove("is-invalid");
    prodeutNameInput.classList.add("is-valid");
  }
}
prodeutNameInput.addEventListener("blur".validateProductNam);




 




var posts=[]

var myRquest = new XMLHttpRequest();
myRquest.open("get","https://jsonplaceholder.typicode.com/posts")
myRquest.send()
myRquest.addEventListener("readystatechange" ,function(){
  if(myRquest.readyState ==4 &&myRquest.status ==200){
    posts= JSON.parse(myRquest.response)
    console.log(posts)
    

  }
})

function disPlayPosts(){
  var catoona = ``
  for (var i =0 ; i<posts.length ;i++)
    catoona+=`
  
<div class=" col-md-3">
  <div class="item">
  <h1> ${posts[i].title}</h1>
  <p> ${posts[i].body}</p>
  </div>
  
</div>

  `
}
