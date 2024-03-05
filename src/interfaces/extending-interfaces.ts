interface Named {
    readonly name : string
}

interface AnotherInterface {}

interface Greet extends Named, AnotherInterface {
    greet(phrase: string) : void;
}

class Student implements Greet {
    name: string;
    age = 30;

    constructor(n : string) {
        this.name = n;
    }

    greet(phrase : string) {
        console.log(phrase + ' ' + this.name)
    }

}