
for (let j = 1; j <= 100; j++) {
    if (j % 15 === 0) {
        console.log('fizzbuzz');
    } else if (j % 3 === 0) {
        console.log('fizz');
    } else if (j % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(j);
    }
}