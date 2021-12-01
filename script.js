const trigger = document.getElementById('triggerBtn')
const container = document.querySelector('.container')

trigger.addEventListener('click', ()=> {
   container.classList.toggle('night');
   document.body.classList.toggle('night');
   if(container.classList.contains('night')) {
      window.localStorage.setItem('theme', 'night')
   } else {
      window.localStorage.setItem('theme', 'light');
   }
})

// Set local Storage for user preferences
if(window.localStorage) {
   if(window.localStorage.theme == 'night') {
      container.classList.add('night');
      document.body.classList.add('night');
   } else {
      container.classList.remove('night');
      document.body.classList.remove('night');
   }

}