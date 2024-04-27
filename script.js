//create the html elements using function
function element(tag, classname, id, text) {
  let tags = document.createElement(tag);
  tags.classList = classname;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}
const h1 = element("h1", "text-center", "title", "🤍EMOJIS HUB🤍");
const container = element("div", "container", "", "");
const row = element("div", "row", "", "");

//getting the details from API using fetch
const url = fetch("https://emojihub.yurace.pro/api/all");
url
  .then((data) => data.json())
  .then((result) => {
    //console.log(result)
    //displaying the emojis details in cards
    for (i = 0; i < result.length; i++) {
      const col = document.createElement("div");
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
      col.innerHTML = `
   <div class="card h-100">
   <div class="card-header">
   <h5 class="card-title text-center">${result[i].name}</h5>
   </div>
   <div class="card-body">
   <div class="card-img-box text-center">${result[i].htmlCode[0]}</div>
   <button type="button" class="btn btn-info">UNICODE</button>
   <div class="card-text text-center">${result[i].group}</div>
   <div class="card-text text-center">Category:${result[i].category}</div>
   </div>
   </div>
   
   `;
      row.append(col);
    }
    //adding function to the button using eventlistener
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        alert(`UNICODE OF THIS EMOJI IS ${result[index].unicode}`);
      });
    });
  })
  .catch((err) => console.log(err)); //else catching the error

//appending the elements in the body of  the  html
container.append(row);
document.body.append(h1, container);
