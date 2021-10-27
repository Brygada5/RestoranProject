function validate() {
    event.preventDefault();
    var intNumber = document.getElementById("intnumber");
    var floatNumber = document.getElementById("floatnumber");
    var date = document.getElementById("date");
    var password = document.getElementById("psw");
    var password_repeat = document.getElementById("psw-repeat");

    if (isInt(parseFloat(intNumber.value))) {
        intNumber.style.border = "none";
    }
    else {
        intNumber.style.border = "2px solid red";
        return false;
    }

    if (isFloat(parseFloat(floatNumber.value))) {
        floatNumber.style.border = "none";
    }
    else {
        floatNumber.style.border = "2px solid red";
        return false;
    }

    if (CheckDate(date.value)) {
        date.style.border = "none";
    }
    else {
        date.style.border = "2px solid red";
        return false;
    }

    if (password.value && password_repeat.value && password.value == password_repeat.value) {
        password.style.border = "none";
        password_repeat.style.border = "none";
    }
    else {
        password.style.border = "2px solid red";
        password_repeat.style.border = "2px solid red";
        return false;
    }

    document.write('Registration completed successfully');
    return true;
}

function CheckDate(date) {
    if (!isInt(parseFloat(date[0]) + parseFloat(date[1]))) {
        return false;
    }
    else if((parseFloat(date[0]) * 10 + parseFloat(date[1])) < 1 || (parseFloat(date[0]) * 10 + parseFloat(date[1])) > 31) {
        return false;
    }

    if (date[2] != "." || date[5] != ".") {
        return false;
    }

    if (!isInt(parseFloat(date[3]) + parseFloat(date[4]))) {
        return false;
    }
    else if((parseFloat(date[3]) * 10 + parseFloat(date[4])) < 1 || (parseFloat(date[3]) * 10 + parseFloat(date[4])) > 12) {
        return false;
    }

    if (!isInt(parseFloat(date[6]) + parseFloat(date[7]) + parseFloat(date[8]) + parseFloat(date[9]))) {
        return false;
    }

    if (date[10]) {
        return false;
    }
    return true;
}

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
