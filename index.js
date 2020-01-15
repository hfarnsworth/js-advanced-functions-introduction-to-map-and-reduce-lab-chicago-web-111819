// Your code here
function mapToNegativize(arr) {
    return arr.map( n => n * -1 )
}

function mapToNoChange(arr) {
    return arr.map( n => n )
}

function mapToDouble(arr) {
    return arr.map( n => n * 2 )
}

function mapToSquare(arr) {
    return arr.map( n => n ** 2 )
}

function reduceToTotal(arr, start = 0) {
    let total = start
    for (let i = 0; i < arr.length; i++) {
        total = arr[i] + total
    }
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == false) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            return true
        }
    }
    return false
}