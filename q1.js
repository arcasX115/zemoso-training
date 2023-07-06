function func2() {
    return "Is a computer science student";
}

function func1(person, func2) {
    const func2_value = func2();
    console.log(func2_value);
}

let person = "abhignan";
console.log(person);
func1(person, func2);