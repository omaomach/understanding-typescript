// type AddFn = (a: number, b: number) => number;  // you can also create a function definition using a type keyword

interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;


add = (n1: number, n2: number) => {
    return n1 + n2;
}


interface Namedd {
    readonly namee?: string;
    outPutName?: string; // this property is optional and doesnt have to exist in classes that implement this interface
}

interface AnotherInterface {
    
}

interface Greetings extends Namedd, AnotherInterface {
    greet(phrase: string) : void;
}

class Students implements Greetings {
    namee?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.namee = n;
        }
    }

    greet(phrase : string) {
        if (this.namee) {
            console.log(phrase + ' ' + this.namee)
        }else {
            console.log("Hello!")
        }
    }

}

let student : Students

student = new Students();