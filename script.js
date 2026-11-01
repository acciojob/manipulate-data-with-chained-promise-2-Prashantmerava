//your JS code here. If required.

function manipulateData() {

    let arr = [1, 2, 3, 4];

    // Initial Promise: 3 seconds delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    })

    // First transformation: Filter even numbers
    .then((data) => {

        let evenNumbers = data.filter(num => num % 2 === 0);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").innerText = evenNumbers;
                resolve(evenNumbers);
            }, 1000);
        });

    })

    // Second transformation: Multiply by 2
    .then((data) => {

        let multipliedNumbers = data.map(num => num * 2);

        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById("output").innerText = multipliedNumbers;
                resolve(multipliedNumbers);
            }, 2000);
        });

    });

}

manipulateData();
