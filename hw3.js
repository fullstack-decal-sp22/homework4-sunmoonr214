function max(iterable, key) {
    var maximum = iterable[0];
    for (var element in iterable) {
        var e = key(element);
        if (e >= maximum) {
            maximum = element;
        }
    }
    return maximum;
}

const reverser = function(number) {
    return -number;
}

function changer(object, key, value) {
    var prev = value;
    if (Array.isArray(prev)) {
        object[key] += value;
    } else if (typeof prev == 'object' && prev != null) {
        object[key] = prev;
    } else {
        object[key] = prev;
    }
    return null;
}

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        wait(100)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = 5;
    console.log(five)
    return five
}