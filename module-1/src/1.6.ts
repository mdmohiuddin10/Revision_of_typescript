{
// learn function
// normal function
// Arrow function

function add(num1 : number, num2 : string) {
    return num1 + num2;
}

add(2, "r")


const addArrow = (num1: number, num2: number): number => num1 + num2;

//  object --> function --> method

const poorUser = {
    name: "Mejbah",
    balance : 0,
    addBalance(balance: number): string {
        return `My new balance is : ${this.balance + balance}`;
    }
}

const arr: number[] = [1, 3, 5, 7];
const newArr: number[]= arr.map((elem: number): number => elem + 2)

}