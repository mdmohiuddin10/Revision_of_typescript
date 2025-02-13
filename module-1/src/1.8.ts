// destructuring...

    
const user4= {
    id: 3768347,
    name: {
        firstName: "Mejbah",
        middleName: "Rahman",
        lastName: "Parsian"
    },
    contactNo: 9569598589,
    address: "Uttara",
}

const {contactNo, 
    name: {middleName}
} = user4;


// array destructuring
const myFrinds = ["Galman", "Salman", "Salim", "Rahim", "Kamal"];

const [,,bestfriends,...rest] = myFrinds










