function typeWriter(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = ' ';
    textoArray.forEach((letra, index) => {
        setTimeout(() => element.innerHTML += letra, 100 * index);
    });
}

const frase = document.querySelector('h3');
typeWriter(frase);