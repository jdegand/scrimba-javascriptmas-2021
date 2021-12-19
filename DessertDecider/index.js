const btn = document.getElementById("btn")
btn.addEventListener("click", findYum)
const foodHolder = document.getElementById('foodHolder');

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/


function findYum(){
 fetch('https://foodish-api.herokuapp.com/api')
    .then(response => response.json())
    .then(data => {
        foodHolder.textContent = '';
        let img = document.createElement('img');
        img.src = data.image;
        foodHolder.append(img);
    });
}