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
  // Validation regular expressions
  var nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
  var addressRegex = /^.{4,}$/;
  var zipRegex = /^\d{5}$/;
  var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Validate first name and last name
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
    throw new Error(
      "First name and last name should start with a capital letter and have a minimum of 3 characters."
    );
  }

  // Validate address, city, and state
  if (
    !addressRegex.test(address) ||
    !addressRegex.test(city) ||
    !addressRegex.test(state)
  ) {
    throw new Error(
      "Address, city, and state should have a minimum of 4 characters."
    );
  }

  // Validate zip code
  if (!zipRegex.test(zip)) {
    throw new Error("Invalid ZIP code.");
  }

  // Validate phone number
  if (!phoneRegex.test(phoneNumber)) {
    throw new Error(
      "Invalid phone number. Please use the format: XXX-XXX-XXXX."
    );
  }

  // Validate email
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email address.");
  }

  // Create the contact object and add it to the address book
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

try {
  addContact(
    "Amrrish",
    "Roshan",
    "123 Main St",
    "Nagercoil",
    "TamilNadu",
    "10001",
    "123-456-7890",
    "Amrrish@example.com"
  );
  displayContacts();
} catch (error) {
  console.log("Error adding contact:", error.message);
}
