// Define the address book array
var addressBook = [];

// Function to add a contact to the address book
function addContact(
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
  phoneNumber,
  email
) {
  var contact = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    zip: zip,
    phoneNumber: phoneNumber,
    email: email,
  };

  addressBook.push(contact);
}

// Function to display all contacts in the address book
function displayContacts() {
  if (addressBook.length === 0) {
    console.log("Address book is empty.");
  } else {
    console.log("Contacts in the address book:");
    addressBook.forEach(function (contact) {
      console.log("First Name: " + contact.firstName);
      console.log("Last Name: " + contact.lastName);
      console.log("Address: " + contact.address);
      console.log("City: " + contact.city);
      console.log("State: " + contact.state);
      console.log("ZIP: " + contact.zip);
      console.log("Phone Number: " + contact.phoneNumber);
      console.log("Email: " + contact.email);
      console.log("--------------------");
    });
  }
}

addContact(
  "Amrrish",
  "Roshan",
  "123 Main St",
  "Nagercoil",
  "TamilNadu",
  "10001",
  "123456789",
  "Amrrish@example.com"
);

displayContacts();
