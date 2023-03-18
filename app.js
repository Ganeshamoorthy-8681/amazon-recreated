

//preloader

let preloader  = document.querySelector("#preloader");
window.addEventListener("load",()=>{
    preloader.style.display = "none";
})
//variables for image slider
const slide_container = [...document.querySelectorAll('.slides')];
const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');

//this is for product slider 
let nextbtn = [...document.querySelectorAll('.right-but')]
let prevbtn  = [...document.querySelectorAll('.left-but')]

//image slider events 
// nextButton.addEventListener('click', () => {
//     let containerDimensions = slide_container.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;
//         slide_container.scrollLeft += containerWidth;
//     })

// prevButton.addEventListener('click', () => {
//     let containerDimensions = slide_container.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;
//     slide_container.scrollLeft -= containerWidth;
// })


//image -slider OTHER WAY TO AVOID THE problem WHILE RESIZING 

let slideindex = 1

displayslide(slideindex)

//this function is used to display the slide at the index 
function displayslide(req_num){

    // this conditions is used  to make a  circular slider 
    if (req_num > slide_container.length) {slideindex=1}

    if (req_num < 1){slideindex = slide_container.length}

    //this loop will make every slides to hide
    for (let i=0 ; i<slide_container.length ; i++){
        slide_container[i].style.display = "none";
    }
    //this will display only the  slide that needs to be displayed
    slide_container[slideindex-1].style.display = "block";
}


//this function is trggered when the buttton clicked 
function changeslide(n){
    displayslide(slideindex += n);
}
//event listeners for next and prev slides 
nextButton.addEventListener("click",()=>{
    changeslide(1)
})
prevButton.addEventListener("click",()=>{
    changeslide(-1)
})


// for automatic slide change after 30seconds 
setInterval(()=>{
    displayslide(++slideindex)
},30000)





// product sliders events 
for(let next of nextbtn){
    next.addEventListener("click",()=>{
        let product_container_dimension = next.nextElementSibling.getBoundingClientRect();
        let product_container_width = product_container_dimension.width;
        next.nextElementSibling.scrollLeft += product_container_width + 30;
    })
}
for(let previous of prevbtn){
    previous.addEventListener("click",()=>{
        let product_container_dimension = previous.nextElementSibling.nextElementSibling. getBoundingClientRect();
        let product_container_width = product_container_dimension.width;
        previous.nextElementSibling.nextElementSibling.scrollLeft -= product_container_width + 30;
    })
}


//for end ad recomendations 

let finalAdContainer =  document.querySelector('.end-ads-detail');
let finalAdPrevbtn = document.querySelector('.end-ad-change-left-btn')
let finbalAdNextbtn = document.querySelector('.end-ad-change-right-btn')


finbalAdNextbtn.addEventListener("click",()=>{
    let product_container_dimension = finalAdContainer.getBoundingClientRect();
    let product_container_width =  product_container_dimension.width;
    finalAdContainer.scrollLeft += product_container_width;
})


finalAdPrevbtn.addEventListener("click",()=>{
    let product_container_dimension = finalAdContainer.getBoundingClientRect();
    let product_container_width =  product_container_dimension.width;
    finalAdContainer.scrollLeft -= product_container_width ;
})


//to make the side bar
window.addEventListener("scroll",()=>{
    document.querySelector(".sidebar").classList.remove("hide");
    // document.querySelector(".sign-in-tooltip").style.display ="none";
    // document.querySelector(".prime-tooltip").style.display = "none";
    // document.querySelector(".tooltip").style.display = "none";
})
let menus  = document.getElementsByClassName('menu-btn');
for(let menu of menus){
    menu.addEventListener('click',()=>{
        document.querySelector(".sidebar").classList.toggle("hide");
    })
}
  
let see_all =  document.querySelectorAll('.compress-expand');

for(let i of see_all){
    i.addEventListener("click",()=>{
        document.querySelector(".expanded").classList.toggle("hide2")
        document.querySelector(".compress-expand").classList.toggle("hide3")
})
}


let sidebar_compressed = document.querySelectorAll(".sidebar-list-compress");
let sidebar_expanded = document.querySelectorAll(".sidebar-expanded");

for(let i of sidebar_compressed){
    i.addEventListener("click",()=>{
        for(let j of sidebar_expanded){
            if(i.getAttribute("data-menu-number") == j.getAttribute("data-menu-number") || j.classList.contains('hide')){
                j.classList.toggle("hide");
            } 
        }
    })    
}


//variable images for ad
let  variant_image = document.getElementById('ad-img')
let  variant_text = document.getElementById('ad-text')
let offer_price = document.getElementById('offer-price')
let original_price  = document.getElementById('actual-price')

let variant_1= document.getElementById('ad99')
let variant_2= document.getElementById('ad100')
let variant_3= document.getElementById('ad101')
let variant_4= document.getElementById('ad102')

//  for each variant there is separte event listener 
variant_1.addEventListener("click",()=>{
    offer_price.textContent = '21,999'
    original_price.textContent = '29,999'
    variant_text .textContent = "Mi Robot Vacuum-Mop P, Best-in-class Laser Navigation in 10-20K INR price ba…"
    variant_image.src = 'file:///home/ganeshamoorthy/vscode/amazon/images/innerad99.jpg'
})  

variant_2.addEventListener("click",()=>{
    offer_price.textContent = '19,900'
    original_price.textContent = '34,000'
    variant_text .textContent = "ILIFE A80 Pro Vacuum and Mop 2-in-1 Robot Vacuum Cleaner,Auto Carpet"
    variant_image.src = 'file:///home/ganeshamoorthy/vscode/amazon/images/innerad100.jpg'
})

variant_3.addEventListener('click',()=>{
    offer_price.textContent = '14,299'
    original_price.textContent = '17,999'
    variant_text .textContent = "Eureka Forbes Robo iVac with Powerful Suction 2 in 1 (Dry Suction+Mopping)"
    variant_image.src = 'file:///home/ganeshamoorthy/vscode/amazon/images/innerad101.jpg'
})


variant_4.addEventListener('click',()=>{
      offer_price.textContent = '16,900'
    original_price.textContent = '29,900'
    variant_text .textContent = "Irobot Roomba 692 Vacuum Cleaning Robot (Black, Charcoal Grey)"
    variant_image.src = 'file:///home/ganeshamoorthy/vscode/amazon/images/innerad102.jpg'
})


//js does not support method overloading
// encapsulation is done by using get and set keywords or by our methods in class
//polymorphism is done by using the method overriding with help of inheritance 
//in js abstraction is done by abstract class we have to change the constructor to  make the class abstract
// class animal{
    
//     #name;
//     constructor(name){
//         if(new.target == animal){
//             throw new Error("Abstract class cannot be instaniated")
//         }
//         this.#name = name;
//         // Object.preventExtensions(this);  // this makes not to add property
//     }

//     get getname() {
//         return this.#name;
//     }
   
//     set setname(name){
//         this.#name = name;
//     }

//     animalsound(name){
//         console.log(name)
//         console.log("aniaml sound")
//     }
// }

// class cat extends  animal{
//     constructor(name,year){
//         super(name);
//         this.year = year;
//     }

//     animalsound(name){
//         console.log(name)
//         console.log("this is a cat sound");
//     }

// }

// let ruby = new cat("ruby",2020);
// ruby.animalsound();






