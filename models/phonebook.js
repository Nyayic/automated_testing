var bob = {
    firstName: "Bob",
    lastName: "Jones",

    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",



 phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactSize = contacts.length;
    for (i = 0; i < contactSize; i++) {
        printPerson(contacts[i]);
    }
}

var search = function(lastName) {
    var contactSize = contacts.length;
    for(i = 0; i < contactSize; i++){
     if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
};

var add  = function(firstName, lastName, email, telephone)
{
var contactSize = contacts.length;
var Person = new Object();
Person.firstName = firstName;
Person.lastName = lastName;
Person.email = email;
Person.telephone = telephone;
contacts[contactSize] = Person;


};

list();
search("Jones");
var response1 = prompt("First Name?");
var response2 = prompt("Last Name?");
var response3 = prompt("Email?");
var response4 = prompt("Telephone No.?");
add(response1, response2, response3, response4);