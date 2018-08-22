const objExample = {
    foo: "two",
    bar: 24,
    fum: "thirty",
    quux: true,
    spam: "spam"
}

const propShower = function(obj) {
    for (key in obj) {
        console.log(key + ': ' + obj[key]);
    }
}

propShower(objExample);
