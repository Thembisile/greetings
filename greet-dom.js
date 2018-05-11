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

   var textValue = valueName.value;


   greetFactory.greetingFunction(textValue, language)

   localStorage.setItem('users', JSON.stringify( greetFactory.nameMap()));

   Eng.innerHTML =  greetFactory.returnGreeting()
   count.innerHTML = greetFactory.greetCounter()

  if (textValue === "") {
    Eng.innerHTML = 'Enter Name :'
  }

  if (!checkedGreetingRadio) {
    Eng.innerHTML = 'Please Select Language'
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
