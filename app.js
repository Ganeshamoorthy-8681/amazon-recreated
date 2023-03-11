

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
        console.log(product_container_width)
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

