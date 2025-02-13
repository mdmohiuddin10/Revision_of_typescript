// spreed operator
// rest operator
// destructuring
{

    // spreed operator
    const bros1 : string[] = ["Mir", "Sirat", "karim"]
    const bros2: string[] = ["Miraj", "Sifat", "Rarim"]

    bros1.push(...bros2)

    const mentors1 = {
        typescript : "Mejbah",
        NextJs : "Parbej",
        Redus : "Mosarraf"
    }

    const mentors2 = {
        dbms : "Mizan",
        Prisma : "Harun",
        Docker : "Mirr"
    }

    const mentorsList = {
       ...mentors1,
       ...mentors2

    }

}