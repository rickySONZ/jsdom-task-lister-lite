document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener("submit", function(e){
    e.preventDefault()
    let v = document.getElementById('new-task-description').value
    console.log(v)
    let li = document.createElement('li')
    li.innerText = `${v}`
    document.querySelector('ul').appendChild(li)
  })
});
