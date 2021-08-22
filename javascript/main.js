//1

// const missions = [
//     {name: "runing",isComplited: true},
//     {name: "eating",isComplited: true},
//     {name: "sleeping",isComplited: true},
//     {name: "studing",isComplited: false},
//     {name: "working out",isComplited: true}
// ];

// //a

// var paragraph = document.getElementById("para");
// for (let i = 0; i < missions.length; i++) {
//     if(missions[i].isComplited){
//         paragraph.innerHTML += `<p style="background: red">${missions[i].name}</p>`;
        
//     }
//     else{
//         paragraph.innerHTML += `<p>${missions[i].name}</p>`;

//     }
// }

// //b
// var input =document.getElementById("input");
// var button =document.getElementById("butt");
// var newTask =[];
// button.addEventListener("click",function(){
//     newTask = {name: input.value, isComplited: false}
//     console.log(newTask);
//     missions.push(newTask)
//     console.log(missions);
//     paragraph.innerHTML += `<p>${newTask.name} ${newTask.isComplited}</p>`
// });

// for (let i = 0; i < missions.length; i++) {
//     missions[i].id = Math.floor(Math.random()* 2001);
//     Math.floor(Math.random()* 2001);
// }

//2

// const movies = [
//     {name: "titanic", img: "https://cdn.pixabay.com/photo/2017/03/31/00/58/titanic-2190169_960_720.jpg", playersNames:["haim","bari","ezra"]},
//     {name: "three", img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg", playersNames:["smuel","nadav","uri"]}
// ];

// var paragraph = document.getElementById("para");
// for (let i = 0; i < movies.length; i++) {
//     paragraph.innerHTML += `<p>${movies[i].name} </p>`,
//     paragraph.innerHTML += `<img src="${movies[i].img}">`,
//     paragraph.innerHTML += `<p>${movies[i].playersNames}</p>`
// }

//3

// var input = document.getElementById("input");
// var button = document.getElementById("butt");
// var paragraph = document.getElementById("para");
// button.addEventListener("click",function(){
//     paragraph.innerHTML = `<p>${input.value}</p>`
// })

//4

// var input1 = document.getElementById("input1");
// var input2 = document.getElementById("input2");
// var button = document.getElementById("butt");
// var inputObjects = [];
// button.addEventListener("click",function(){
//     inputObjects = {first: input1.value, second: input2.value}
//     console.log(inputObjects); 
// })

//5

// var input1 = document.getElementById("name");
// var input2 = document.getElementById("email");
// var input3 = document.getElementById("age");
// var button = document.getElementById("butt");
// var paragraph = document.getElementById("para");
// var newObject = [];
// button.addEventListener("click",function(){
//     newObject = {first: input1.value ,second: input2.value ,therd: input3.value}
//     paragraph.innerHTML += `<p>${input1.value} ${input2.value} ${input3.value}</p>`
// });


//6


// var input1 = document.getElementById("firstName");
// var input2 = document.getElementById("lastName");
// var button = document.getElementById("butt");
// var person = [];
// button.addEventListener("click",function(){
//     person = {first: input1.value ,second: input2.value}
//     console.log(person);
// })


//7

// var paragraph = document.getElementById("para");
// for (let i = 0; i < 10; i++) {
//     paragraph.innerHTML += `<p>${i}</p>`
// }

//8

// var words = ["haim","bari","ezra"];
// var input = document.getElementById("inputEmail");
// var paragraph = document.getElementById("para");
// var button = document.getElementById("butt");

// button.addEventListener("click",function(){
//     for (let i = 0; i < words.length; i++) {
//         if(words[i] == input.value){
//             paragraph.innerHTML += `<p>${"sorry"}</p>`
//             return;
//         } 
//     }
//     paragraph.innerHTML += `<p>${"welcome"}</p>`
// });

//9

// var input = document.getElementById("input");
// var button = document.getElementById("butt");
// var paragraph1 = document.getElementById("para1");
// var paragraph2 = document.getElementById("para2");
// button.addEventListener("click",function(){
//     paragraph1.innerHTML += `<p>${input.value}</p>`
//     paragraph2.innerHTML += `<p>${input.value} ${input.value.length}</p>`

// })

//10

// var input1 = document.getElementById("fullName");
// var input2 = document.getElementById("country");
// var input3 = document.getElementById("flag");
// var input4 = document.getElementById("age");
// var button = document.getElementById("butt");
// var paragraph = document.getElementById("para");
// button.addEventListener("click",function(){
//     var person = {name: input1.value ,country: input2.value ,flag: input3.value,age:input4.value};
//     console.log(person);
//     paragraph.innerHTML += `<p>${person.name} ${person.country} ${person.age}</p>`
//     paragraph.innerHTML += `<img src="${person.flag}">`});
