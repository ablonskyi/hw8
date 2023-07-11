let a = 'a', b = 'b', c = 'c', d, x1, x2, x;


function isNumber (number) {
    if (number !== '' && number !== ' ' && number == +number && typeof(+number) === 'number') {
        return number;
    }
}

function getNumbers (value) {
    let getNum = prompt(`Будемо знаходить рішення квадратного рівняння виду: ${a}x^2 + ${b}x + ${c} = 0\nВведіть число ${value}`);
    if (isNumber(getNum)) {
        value = +getNum;
        return value;
    } else if (getNum === null) {
        return null;
    } else {
        alert(`Введіть ${value}`);
        getNumbers(value);
    }
}

function getABC () {
    a = getNumbers ('a');
    if (a === null) {
        return;
    } else {
        b = getNumbers ('b');
        if (b === null) {
            return;
        } else {
            c = getNumbers ('c');
        }
    }
    alert (`${a}x^2 + ${b}x + ${c} = 0\na = ${a} b = ${b} c = ${c}`);
    return [a, b, c]
}

function differential (a, b, c) {
    d = (b * b) - (4 * a * c);
    alert(`d = ${d}`)
    return d;
}

function oneResult (a, b) {
    x = (b * -1)/(a*2);
    alert(`D = 0. Єдиний корень рівняння: ${x}`);
}

function twoResults (a, b, d) {
    x1 = ((b * -1)+Math.sqrt(d))/(a*2);
    x2 = ((b * -1)-Math.sqrt(d))/(a*2);
    alert(`D > 0. Корені рівняння: ${x1}, ${x2}`);
}

function noResults () {
    alert(`D < 0. Рівняння не має рішень`);
}

function results () {
    if (d === 0) {
        oneResult(a, b);
    } else if (d > 0) {
        twoResults(a, b, d);
    } else {
        noResults();
    }
}

function squareEquation () {
    getABC(a, b, c);
    if (a === null || b === null || c === null) {
        alert(`Жаль. Сподіваюсь ще побачитись`)
        return;
    } else {
        differential(a, b, c);
        results();
    }
}

squareEquation();