
// use selected for specific element
function $(id) {
    return document.getElementById(id);
}

// Used selected for text
function $text(id) {
    return document.getElementById(id).innerText;
}

// Used selected for text
function $txtNumber(id) {
    return parseFloat(document.getElementById(id).innerText);
}

// Used selected for Input value
function $value(id) {
    return document.getElementById(id).value;
}

// Used selected for Input value
function $vluNumber(id) {
    return parseFloat(document.getElementById(id).value);
}

// Used it empty for Input value
function $empty(id) {
    return document.getElementById(id).value = "";
}

