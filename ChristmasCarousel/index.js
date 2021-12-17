const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const imgs = [
    {src: "imgs/village.jpg",
    alt: "house in the woods with small dog in front"},
    {src: "imgs/present.jpg",
    alt: "white ice skates and christmas wreath"},
    {src: "imgs/doggies.jpg",
    alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"}]

// Carousel is slow because size of imgs are massive at 3mb
// Grabbed pictures from users listed but not exact pictures used in the video

let imgNum = 0

next.addEventListener('click', () => {
    imgNum++;
    if(imgNum > imgs.length-1){
        imgNum = 0;
    }    
    img.src = imgs[imgNum].src
    img.alt = imgs[imgNum].alt
})
  
previous.addEventListener('click', () => {
    imgNum--;
    if(imgNum < 0){
        imgNum = imgs.length-1;
    }
    img.src = imgs[imgNum].src
    img.alt = imgs[imgNum].alt
})

// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.