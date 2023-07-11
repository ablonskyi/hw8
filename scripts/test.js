function program () {
    let a, b, c, d, x1, x2, x;
    alert('Будемо знаходить рішення квадратного рівняння виду: ax^2 + bx + c = 0');
    function getNumber (numbers) {
        do {
            value = prompt(`Введіть ${numbers}`);
            if (value === null) {
                alert(`Жаль. Сподіваюсь ще побачитись`)
                stop.window();
            }
        } while (typeof(+value) !== 'number' || isNaN(+value));
        numbers = +value
        return numbers;
    }

    function getD () {
        d = b * b - 4 * a * c;
        if (d < 0) {
            alert ("D < 0. Рівняння не має рішень");
            return;
        } else {
            return d;
        }
    }

    function oneResult (a, b) {
        x = (b * -1)/(a*2);
        return x;
    }

    function results (a, b, d) {
        x1 = ((b * -1)+Math.sqrt(d))/(a*2);
        x2 = ((b * -1)-Math.sqrt(d))/(a*2);
        return [x1, x2];
    }

    function squareEquation () {
        a = getNumber ('a');
        b = getNumber ('b');
        c = getNumber ('c');
        d = getD ();

        if (a == 0) {
            alert("a = 0. Рівняння не має рішень");
        } else if (d == 0) {
            alert(`D = 0. Єдиний корень рівняння: ${oneResult (a, b)}`)
        } else if (d > 0) {
            alert(`D > 0. Корені рівняння: ${results (a, b, d)}`)
        }
    }

    squareEquation ();

}

program();