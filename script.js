let arr = [];
for (let i = 0; i < 30; i++){
  arr.push(Math.floor(Math.random() * 100));
}
let newEl = document.createElement('table');
document.body.append(newEl);
for (let i = 0; i < 5; i++) {
  let newRow = document.createElement('tr');
  for (let j = 0; j < 6; j++){
    let newTd = document.createElement('td');
    newTd.innerText = arr[i*6+j];
    if (arr[i*6+j] >= 50) {
      newTd.style.backgroundColor = "orange";
    }
    newRow.append(newTd);
  }
  newEl.append(newRow);
}

let btn = document.createElement('button')
btn.innerText = 'Добавить число'
document.body.append(btn)

btn.onclick = foo

function foo(){    
  let newt = document.querySelector("table");    
  let row = newt.querySelector("tr:last-child");        
  if (row.children.length < 6) {
    let newcell = Math.floor(Math.random() * 100);
    let cell = row.insertCell(-1);
    cell.innerHTML = newcell;
    if (newcell >=50){
      cell.style.backgroundColor = "orange"
    }
  } else {
    let newRow = document.createElement('tr');
    let newcell = Math.floor(Math.random() * 100);
    let cell = newRow.insertCell(-1);
    cell.innerHTML = newcell;
    if (newcell >=50){
      cell.style.backgroundColor = "orange"
    }
    newt.append(newRow);
  }
}