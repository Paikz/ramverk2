"use strict";

let editId = null;

function create() {
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;
    let path =  `${name}&${city}&${country}&${editId}`;

    if (name.length > 0 && city.length > 0 && country.length > 0) {
        window.location = window.location.href + '/create/' + path;
        editId = null;
    }
}

function remove(_id) {
    window.location = window.location.href + '/delete/' + _id;
}

function setInputValues(_id) {
    editId = _id;
    document.getElementById('name').value = getElementId(_id, 0).innerText;
    document.getElementById('city').value = getElementId(_id, 1).innerText;
    document.getElementById('country').value = getElementId(_id, 2).innerText;
}

function getElementId(_id, pos) {
    return document.getElementById(_id).parentNode.parentNode['children'][pos];
}
