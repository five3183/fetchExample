const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const output = document.getElementById('output')

const getText = () => {
   fetch('test.txt')
      .then(res => res.text())
      .then(data => output.innerHTML = `<h1>${data}</h1>`)
      .catch(err => console.log(err))
}

const getJson = () => {
   fetch('test.json')
      .then(res => res.json())
      .then(data => {
         output.innerHTML = ''
         data.forEach(item => {
            output.innerHTML += `<li>Title: ${item.title} Body: ${item.body}</li>`
         });
      })
      .catch(err => console.log(err))
}

const getAPI = () => {
   fetch('https://api.github.com/users')
      .then (res => res.json())
      .then(data => {
         output.innerHTML = ''
         data.forEach(user => output.innerHTML += `<li>${user.login}</li>`)
      })
      .catch(err => console.log(err))
}
btn1.addEventListener('click', getText)
btn2.addEventListener('click', getJson)
btn3.addEventListener('click', getAPI)