//local reviews data 

const reviews = [
    {
    id: 1,
    name: "bugs bunny",
    job: "rabbit",
    img:  
    "https://i.pinimg.com/originals/7b/ef/a1/7befa18878eb7d0e471f4e148ef2a4c2.jpg",
    text: 
    "What’s up Doc?",
    },
{
    id: 2 ,
    name: "daffy duck",
    job: "duck",
    img: 
    "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/800px-Daffy_Duck.svg.png ",
    text: "What’s up bunny?",
},
{
    id: 3,
    name: "donald duck",
    job: "duck",
    img: 
    "https://www.desicomments.com/wp-content/uploads/2017/02/Image-Of-Donald-Duck.jpg",
    text: "What’s up duck?",
},
{
    id: 4,
    name: "tasmanian devil",
    job: "devil",
    img: 
        "https://wallpaperaccess.com/full/2446592.jpg",
    text: "What’s up guys?",
},


];

// select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set staring item
let currentItem = 0;
// load initial item
window.addEventListener("DOMContentLoaded",function(){
    // console.log("shake and bake");
    showPerson(currentItem);
    
});

//show person based on item 
function showPerson(){
    const item = reviews[currentItem];

    img.src = item.img 
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent=item.text;
}

// show next person 
nextBtn.addEventListener("click",function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson()
});

// show prev person 
prevBtn.addEventListener("click",function(){
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson()
});

// show random person
randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length)
    console.log(currentItem);
    showPerson();
})



 
//     {
//     id: 1,
//     name: "bugs bunny",
//     job: "rabbit",
//     img: 
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.tr%2FLooney-Tunes-%25C3%25BCzerine-bask%25C4%25B1s%25C4%25B1-polyester%2Fdp%2FB00UNAOBOI&psig=AOvVaw14BY5YVYPQzoB-q8Hr_qaw&ust=1669923054581000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMC6rabS1vsCFQAAAAAdAAAAABAE",

//     Text: "What’s up Doc?",
// },
// {
//     id: 2,
//     name: "daffy duck",
//     job: "duck",
//     img: 
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdragoart.com%2Ftut%2Fhow-to-draw-daffy-easy-12030&psig=AOvVaw2-PXKVb9t16I9JD4TueOP2&ust=1669924092031000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjN0JTW1vsCFQAAAAAdAAAAABAE",
//     Text: "What’s up bunny?",
// },
// {
//     id: 3,
//     name: "donald duck",
//     job: "duck"
//     img: 
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdragoart.com%2Ftut%2Fhow-to-draw-daffy-easy-12030&psig=AOvVaw2-PXKVb9t16I9JD4TueOP2&ust=1669924092031000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjN0JTW1vsCFQAAAAAdAAAAABAE",
//     Text: "What’s up duck?",
// },
// {
//     id: 4,
//     name: "tasmanian devil",
//     job: "devil"
//     img: 
//    " https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fdevil-cartoon&psig=AOvVaw29ApYu1hePfQOciSGCvo4Q&ust=1669924576355000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDpxPvX1vsCFQAAAAAdAAAAABAE",
//     Text: "What’s up guys?" ,
// },

// ]

