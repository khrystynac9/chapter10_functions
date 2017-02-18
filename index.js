var passengers = [{ name: "Jane Doloop", paid: true },
                  { name: "Dr. Evel", paid: true },
                  { name: "Sue Property", paid: false },
                  { name: "John Funcall", paid: true }];


function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}
function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

/*function print() {
    for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].paid === true) {
            console.log(passengers[i].name + "has paid");
        } else {
            console.log(passengers[i].name + "hasn't paid");
        }
    }
    
}
print(passengers);
*/
function printPassenger(passenger) {
    var message = passenger.name;
    if (passenger.paid === true) {
        message = message + " has paid";
    }
    else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}
processPassengers(passengers, printPassenger);