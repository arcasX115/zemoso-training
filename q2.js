const firstlastletter = (a, b) => {
    return (a.charAt(0) + b.charAt(0));
};

const firstname = "Rogers";
const lastname = "Water";
const initials = firstlastletter(firstname, lastname);

console.log(initials);