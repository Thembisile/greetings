var valueName = document.querySelector('.greetingText')
var greetButton = document.querySelector('.greetBtn')
var count = document.querySelector('.greetCount')
var Eng = document.querySelector('.displayName')
var lang = document.querySelector('.languageSelectRadio')
var resetButton = document.querySelector('.resetBtn')
var usersRef = localStorage.getItem('users');


var storedUsers = usersRef ? JSON.parse(usersRef): {};

count.innerHTML =  Object.keys(storedUsers).length;

var greetFactory = GreetPerson(storedUsers)

function displayFunction(){
    var checkedGreetingRadio = document.querySelector("input[name='languageSelector']:checked");

    if (checkedGreetingRadio) {
    var language = checkedGreetingRadio.value
  }
  else {
    Eng.innerHTML = "Please Select Language"
    Eng.style.color = 'Red'
    return;
  }

   var textValue = valueName.value.toUpperCase();


   greetFactory.greetingFunction(textValue, language)

   localStorage.setItem('users', JSON.stringify( greetFactory.nameMap()));

   Eng.innerHTML =  greetFactory.returnGreeting()
   count.innerHTML = greetFactory.greetCounter()
   
  if (isNaN(textValue)) {
    Eng.innerHTML =  greetFactory.returnGreeting()
  }
  else {
    Eng.innerHTML = 'Enter A Valid Name :'
    Eng.style.color = 'Red'
  }
}
greetButton.addEventListener('click', function(){
  displayFunction()
  valueName.value = '';
})
resetButton.addEventListener('click', function(){
  greetFactory.reset();
  count.innerHTML = 0;
  localStorage.clear()
  valueName.value = '';
})
