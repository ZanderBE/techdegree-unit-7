// Variables
var close = document.querySelector('.close');
var alert1 = document.querySelector('.alert1');
var alert2 = document.querySelector('.alert2');
var alert3 = document.querySelector('.alert3');
var sendButton = document.querySelector('.message__button');
var searchAlert = document.querySelector('.search__alert');
var messageAlert = document.querySelector('.message__alert');
var sentAlert = document.querySelector('.message__sent');
var searchBox = document.querySelector('.search__user');
var messageBox = document.querySelector('.message');
var dropDown = document.querySelector('#myDropdown');
var notificationBell = document.querySelector('.notification');
var timeZone = document.querySelector('.timezone__options');
var emailSettings = document.querySelector('.email__settings');
var profileSettings = document.querySelector('.profile__settings');
var saveButton = document.querySelector('.save__button');
var alertBadge = document.querySelector('.alert-badge');
var noNotification = document.querySelector('.no-notification');
// Functions

// Close alerts
alert1.addEventListener('click', function(e){
    alert1.style.display = 'none';
    checkBadge();
});

alert2.addEventListener('click', function(e){
    alert2.style.display = 'none';
    checkBadge();
});

alert3.addEventListener('click', function(e){
    alert3.style.display = 'none';
    checkBadge();
});

// Function to check for alert badge display
function checkBadge() {
  if (alert1.style.display === 'none' && alert2.style.display === 'none' && alert3.style.display === 'none') {
    alertBadge.style.display = 'none';
    noNotification.style.display = 'flex';
  }
}
// Send message button validation
sendButton.addEventListener('click', function(e) {
  searchAlert.style.display = 'none';
  messageAlert.style.display = 'none';
  sentAlert.style.display = 'none';
  if (searchBox.value.length === 0) {
    searchAlert.style.display = 'block';
  } else if (messageBox.value.length === 0) {
    messageAlert.style.display = 'block';
  } else {
    sentAlert.style.display = 'block ';
    searchAlert.style.display = 'none';
    messageAlert.style.display = 'none';
  }
});


//Dropdown alert menu for bell icon
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
notificationBell.addEventListener('click', function(e) {
  dropDown.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.notification')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Autocomplete search function
var users = ['Mr. Meeseeks',
             'Mr. Meeseeks',
             'Mr. Meeseeks',
             'Mr. Meeseeks',
             'Angry Mr.Meeseeks',
             'Sad Mr.Meeseeks',
             'Zealous Mr. Meeseeks'
           ];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
     var a, b, i, val = this.value;
     /*close any already open lists of autocompleted values*/
     closeAllLists();
     if (!val) { return false;}
     currentFocus = -1;
     /*create a DIV element that will contain the items (values):*/
     a = document.createElement("DIV");
     a.setAttribute("id", this.id + "autocomplete-list");
     a.setAttribute("class", "autocomplete-items");
     /*append the DIV element as a child of the autocomplete container:*/
     this.parentNode.appendChild(a);
     /*for each item in the array...*/
     for (i = 0; i < arr.length; i++) {
       /*check if the item starts with the same letters as the text field value:*/
       if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         /*create a DIV element for each matching element:*/
         b = document.createElement("DIV");
         /*make the matching letters bold:*/
         b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
         b.innerHTML += arr[i].substr(val.length);
         /*insert a input field that will hold the current array item's value:*/
         b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
         /*execute a function when someone clicks on the item value (DIV element):*/
             b.addEventListener("click", function(e) {
             /*insert the value for the autocomplete text field:*/
             inp.value = this.getElementsByTagName("input")[0].value;
             /*close the list of autocompleted values,
             (or any other open lists of autocompleted values:*/
             closeAllLists();
         });
         a.appendChild(b);
       }
     }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
     var x = document.getElementById(this.id + "autocomplete-list");
     if (x) x = x.getElementsByTagName("div");
     if (e.keyCode == 40) {
       /*If the arrow DOWN key is pressed,
       increase the currentFocus variable:*/
       currentFocus++;
       /*and and make the current item more visible:*/
       addActive(x);
     } else if (e.keyCode == 38) { //up
       /*If the arrow UP key is pressed,
       decrease the currentFocus variable:*/
       currentFocus--;
       /*and and make the current item more visible:*/
       addActive(x);
     } else if (e.keyCode == 13) {
       /*If the ENTER key is pressed, prevent the form from being submitted,*/
       e.preventDefault();
       if (currentFocus > -1) {
         /*and simulate a click on the "active" item:*/
         if (x) x[currentFocus].click();
       }
     }
  });
  function addActive(x) {
   /*a function to classify an item as "active":*/
   if (!x) return false;
   /*start by removing the "active" class on all items:*/
   removeActive(x);
   if (currentFocus >= x.length) currentFocus = 0;
   if (currentFocus < 0) currentFocus = (x.length - 1);
   /*add class "autocomplete-active":*/
   x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
   /*a function to remove the "active" class from all autocomplete items:*/
   for (var i = 0; i < x.length; i++) {
     x[i].classList.remove("autocomplete-active");
   }
  }
  function closeAllLists(elmnt) {
   /*close all autocomplete lists in the document,
   except the one passed as an argument:*/
   var x = document.getElementsByClassName("autocomplete-items");
   for (var i = 0; i < x.length; i++) {
     if (elmnt != x[i] && elmnt != inp) {
     x[i].parentNode.removeChild(x[i]);
   }
  }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
   closeAllLists(e.target);
  });
}

autocomplete(searchBox, users);

// Local Storage for settings
function checkTimezone() {
  if (localStorage.getItem("timezone") == null) {
    localStorage.setItem("timezone", "placeholder");
  }
}
checkTimezone();

timeZoneStorage = localStorage.getItem("timezone");
emailSettingsStorage = JSON.parse(localStorage.getItem("email"));
profileSettingsStorage = JSON.parse(localStorage.getItem("profile"));

timeZone.value = timeZoneStorage;
emailSettings.checked = emailSettingsStorage;
profileSettings.checked= profileSettingsStorage;

saveButton.addEventListener('click', function(e) {
  localStorage.setItem("timezone", timeZone.value);
  localStorage.setItem("email", emailSettings.checked);
  localStorage.setItem("profile", profileSettings.checked);
  alert('Settings Saved!');
});
