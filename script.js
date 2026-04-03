const webhook = "https://discord.com/api/webhooks/1489420921453150239/pOZm-q0RUQmQoVgn94JY7RVZPaa00GD51x_w1x2CjIZCDAD2Cmz4_KqKFCYHl2H19yO7"

let plan = ""
let price = ""

function openBuy(p,pr){

plan = p
price = pr

document.getElementById("popup").style.display="flex"

document.getElementById("planName").innerText = p

const cmd = `#credit 1266569651664457738 ${pr}`

document.getElementById("commandBox").innerText = cmd

}

function closePopup(){
document.getElementById("popup").style.display="none"
}

function copy(){
let text = document.getElementById("commandBox").innerText
navigator.clipboard.writeText(text)
alert("تم النسخ")
}

function send(){

let user = document.getElementById("user").value

fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
embeds:[{
title:"طلب شراء",
color:3447003,
fields:[
{name:"الخطة",value:plan},
{name:"السعر",value:price+" Credit"},
{name:"المستخدم",value:user}
]
}]
})
})

alert("تم ارسال الطلب")
closePopup()

}