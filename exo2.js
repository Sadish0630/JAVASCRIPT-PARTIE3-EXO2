let ul = document.createElement("ul")
for(let number = 1; number <= 100; number++){
    let li = document.createElement("li")
    li.innerText = number
    if (number % 15 == 0){
        li.innerText = "'...'"
    }
    ul.append(li)
}
document.body.append(ul)