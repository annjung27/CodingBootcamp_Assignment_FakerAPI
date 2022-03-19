const express = require("express");
const app = express();
const PORT = 8000;

const {faker} = require("@faker-js/faker")

// create two classes to generate random User data and Company data

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

console.log(new User());

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = `${faker.address.streetAddress()},${faker.address.city()},${faker.address.state()},${faker.address.zipCodeByState()}, ${faker.address.country()}`;
    }
}

console.log(new Company());



// creat api routes that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json(new User());
})

// create api routes that returns a new company

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
})

// create api routes that returns both a new user and a new company 

app.get("/api/user/company", (req, res) => {
    res.json(
        {
            User: new User(),
            Company: new Company()
        }
    )
})


// Starts server--- ALWAYS AT THE END OF THE FILE!!! ---
app.listen(PORT, () => console.log(`>> SERVER started on port: ${PORT} and is listening for REQuests to RESpond to`))