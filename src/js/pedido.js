window.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('checkbox-1');
    var checkbox1 = document.getElementById('checkbox-2');
    var checkbox2 = document.getElementById('checkbox-3');
    var checkbox3 = document.getElementById('checkbox-4');
    var checkbox4 = document.getElementById('checkbox-5');
    var checkbox5 = document.getElementById('checkbox-6');
    var checkbox6 = document.getElementById('checkbox-7');
    var checkbox7 = document.getElementById('checkbox-8');
    var checkbox8 = document.getElementById('checkbox-9');
    var checkbox9 = document.getElementById('checkbox-10');
    var checkbox10 = document.getElementById('checkbox-11');
    var checkbox11 = document.getElementById('checkbox-12');
    var checkbox12 = document.getElementById('checkbox-13');
    var checkbox13 = document.getElementById('checkbox-14');
    var paragraph = document.getElementById('number');
    var number = 0;
    
    parseFloat(number)

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            number += 29;
        } else {
            number -= 29;
        }
        paragraph.textContent = number;
    });
    checkbox1.addEventListener('change', function() {
        if (checkbox1.checked) {
            number += 25;
        } else {
            number -= 25;
        }
        paragraph.textContent = number;
    })
    checkbox2.addEventListener('change', function() {
        if (checkbox2.checked) {
            number += 15;
        } else {
            number -= 15;
        }
        paragraph.textContent = number;
    })
    checkbox3.addEventListener('change', function() {
        if (checkbox3.checked) {
            number += 35;
        } else {
            number -= 35;
        }
        paragraph.textContent = number;
    })
    checkbox4.addEventListener('change', function() {
        if (checkbox4.checked) {
            number += 12;
        } else {
            number -= 12;
        }
        paragraph.textContent = number;
    })
    checkbox5.addEventListener('change', function() {
        if (checkbox5.checked) {
            number += 28;
        } else {
            number -= 28;
        }
        paragraph.textContent = number;
    })
    checkbox6.addEventListener('change', function() {
        if (checkbox6.checked) {
            number += 9;
        } else {
            number -= 9;
        }
        paragraph.textContent = number;
    })
    checkbox7.addEventListener('change', function() {
        if (checkbox7.checked) {
            number += 10;
        } else {
            number -= 10;
        }
        paragraph.textContent = number;
    })
    checkbox8.addEventListener('change', function() {
        if (checkbox8.checked) {
            number += 32;
        } else {
            number -= 32;
        }
        paragraph.textContent = number;
    })
    checkbox9.addEventListener('change', function() {
        if (checkbox9.checked) {
            number += 19;
        } else {
            number -= 19;
        }
        paragraph.textContent = number;
    })
    checkbox10.addEventListener('change', function() {
        if (checkbox10.checked) {
            number += 8;
        } else {
            number -= 8;
        }
        paragraph.textContent = number;
    })
    checkbox11.addEventListener('change', function() {
        if (checkbox11.checked) {
            number += 7;
        } else {
            number -= 7;
        }
        paragraph.textContent = number;
    })
    checkbox12.addEventListener('change', function() {
        if (checkbox12.checked) {
            number += 16;
        } else {
            number -= 16;
        }
        paragraph.textContent = number;
    })
    checkbox13.addEventListener('change', function() {
        if (checkbox13.checked) {
            number += 11;
        } else {
            number -= 11;
        }
        paragraph.textContent = number;
    })
});