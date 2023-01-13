const firebaseConfig = {
  apiKey: "AIzaSyDOtr44rVcrQVJP-Z-ibflKGz1jYLlfEaI",
  authDomain: "contact-form-e906b.firebaseapp.com",
  databaseURL: "https://contact-form-e906b-default-rtdb.firebaseio.com",
  projectId: "contact-form-e906b",
  storageBucket: "contact-form-e906b.appspot.com",
  messagingSenderId: "178523144564",
  appId: "1:178523144564:web:5752be88599ef3cb9b2c21",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
