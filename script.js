let adjective1 = prompt("Enter an adjective.")
let creature = prompt("Enter the name of a spooky creature.")
let adjective2 = prompt("Enter an adjective.")
let friend = prompt("Enter the name of a friend.")
let adjective3 = prompt("Enter an adjective.")
let adjective4 = prompt("Enter an adjective.")
let creature2 = prompt("Enter the name of a spookey creature.")



let story =
`it was a ${adjective1} night in octoder every kid in the town \
put on a haloween costume like my little sister was a ${adjective2} ${creature} that looked kinda ${adjective3}.but i didnt want to celabrate halloween but my friend ${friend}, forced me to celabrate but i didnt dress up but she did. she dressed up like a  ${adjective4} ${creature2}. but then i remenbered that she thst she died last year`;

let madLibOutputDiv=document.getElementById("madLibOutput");
madLibOutputDiv.innerHTML= `<p>${story}</p>`
