interface WakesUpEarly{
    wakeUpEarly():string;
}

class Student implements WakesUpEarly{
    constructor(
        private firstName:string,
        private lastName:string,
        private grade:number){};
    
    
    wakeUpEarly(): string {
        return `${this.firstName} ${this.lastName} wakes up early today`;
    }
}

let me = new Student("John", "Doe", 100);
console.log(me.wakeUpEarly());