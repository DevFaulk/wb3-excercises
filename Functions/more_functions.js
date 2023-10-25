function displayMailingLabel(name, address, city, state, zip) {
    let message = "My name is " + name + "from " + address + ", " + city + ", " + state + ", " + zip
    console.log(message);
}

let name = "Teddy"
let address = "123 Sesame Street"
let city = "Pittsburgh"
let state = "PA"
let zip = "15132"

displayMailingLabel(name, address, city, state, zip)

