xhttp = new XMLHttpRequest()
xhttp.open("GET", "data.json", false)
xhttp.send()

xhttpData = xhttp.responseText;
console.log(xhttpData)

data = JSON.parse(xhttpData)
console.log(data);

for (let i = 0; i < data.length; i++) {
    document.getElementById("tablebody").innerHTML += `
    <div class="col">
    <div class="card h-100"  data-aos-offset="300">
      <img src="${data[i].img}" class="card-img-top" height="100%" width="100%" alt="...">
      <div class="card-body">
        <h5 class="card-title"><b>${data[i].name}</b></h5>
        <p class="card-text mb-2">${data[i].price} </p>
        <p class="card-text">${data[i].desc} </p>
      </div>
      <button class="btn btn-dark">${data[i].btn}</button>
    </div>
  </div>

  
    `
}