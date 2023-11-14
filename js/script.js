let elList = document.querySelector('.list');
let elItem = document.querySelectorAll('.item');

const data = [
    {
      price: "4$",
      type: "Kartoshka",
    },
    {
      price: "5$",
      type: "Tovuq",
    },
    {
      price: "6$",
      type: "Go'sht",
    },
  ]


const blockedUser1 = prompt("Kimni kirg'izmimiz?").toLowerCase()
const blockedUser2 = prompt("Kimni kirg'izmimiz?").toLowerCase()

const userName = prompt("Ismingizni kiriting").toLowerCase()

if(userName === blockedUser1 || userName === blockedUser2){
    elItem[0].textContent = 'sizga hech narsa berilmidi';
    elItem[1].textContent = 'sizga hech narsa berilmidi';
    elItem[2].textContent = 'sizga hech narsa berilmidi';
}else {
  elItem[0].textContent = `${data[0].price}  ${data[0].type}li`
  elItem[1].textContent = `${data[1].price}  ${data[1].type}li`
  elItem[2].textContent = `${data[2].price}  ${data[2].type}li`
}