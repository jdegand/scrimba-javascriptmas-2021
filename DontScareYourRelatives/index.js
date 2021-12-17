const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.innerText = `🎄 Merry Christmas 🎄`
}

btn.addEventListener('click', fix);

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.


// [Unicode Table](https://unicode-table.com/en/1F384/#:~:text=%F0%9F%8E%84%20%2D%20Christmas%20Tree%20Emoji%3A%20U%2B1F384%20%2D%20Unicode%20Character%20Table)
// [Stack Overflow](https://stackoverflow.com/questions/60829313/how-to-set-emoji-unicode-dynamically)