let fee = 14
let money
let charge
let people
let change

document.getElementById("results").onclick = function(){
    money = document.getElementById("money").value
    people = document.getElementById("people").value
    charge = fee * people
    change = money - charge
    document.getElementById("display").innerHTML = "You must pay R" + charge + " and your change is R" + change
}