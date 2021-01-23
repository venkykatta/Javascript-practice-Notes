function hello() {
    const header = document.querySelector('h1');
    if (header.innerHTML === 'Hello') {
        header.innerHTML = 'GoodBye!';
    }
    else {
        header.innerHTML = 'Hello';
    }
}