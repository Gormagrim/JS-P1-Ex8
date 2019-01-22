
alert('Entrer votre age.')

function ageTest(){

var age = document.getElementById('age').value;

if (age <= 0) {

    alert("Vous ne pouvez pas ne pas être né.");
  }
  else if (1 <= age && age < 18) {

    alert("Vous êtes mineur.");
  }
  else if (18 <= age && age < 129) {

  alert("Vous êtes majeur.");
   }
   else if (age >= 129) {

     alert("Vous êtes une légende.");
   }
}
