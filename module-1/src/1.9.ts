// type ellis
{
    // 

    type Student = {
        name: string;
        age:number;
        gender:string;
        contactNo?: string;
        address: string;
    }


   const student1 : Student= {
    name: "Mejbah",
    age: 39,
    gender: "male",
    contactNo: "765486",
    address: "chattogram"
   }

   const student2 : Student= {
    name: "Mejbah",
    age: 39,
    gender: "male",
    address: "chattogram"
   }


   type UserName = string;
   type IsAdmin = boolean;

   const userName : UserName = "Rabin";
   const isAdmin : IsAdmin = true;

   type Add = (num1: number, num2: number) => number;

   const add: Add = (num1, num2) => num1 + num2;




    // 
}