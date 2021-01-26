document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("form").onsubmit = function() {
        name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    };

});