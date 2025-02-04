   fetch('greetings.json')
       .then(response => response.json())
       .then(data => {
           const randomGreeting = data[Math.floor(Math.random() * data.length)];
           document.getElementById('greeting').innerText = randomGreeting;
       })
       .catch(error => console.error('Ошибка:', error));
   
