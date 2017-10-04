

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function mutiplicate(x, y) {
    return x * y
}

function divide(x, y) {
    try {
        if (x !== 0 & y !== 0) {
            return x / y
        } else {
            throw Error('Attempt to divide by zero')
        }
    } catch (err) {
        console.log(err.message)
    }
}

divide(0, 1)