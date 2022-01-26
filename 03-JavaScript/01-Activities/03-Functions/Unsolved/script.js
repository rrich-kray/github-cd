

// TODO: Write Your JavaScript Code Here

var isEqual = (v1, v2) => {
    if (v1 === v2) {
        console.log("The two values are strictly equal in type and value")
    } else if (v1 == v2) {
        console.log("They are equal in value")
    } else if (v1 !== v2) {
        console.log("They are one of (1) equal in value but not type, (2) equal in type but not value, or (3) not equal in either value or type")
    } else if (v1 != v2) {
        console.log("The two arguments are not equal in value")
    }
}

var whatever = function(){
    console.log("jfoiewofewf")
}

function isEqual(v1, v2) {
    whatever()
}

isEqual()