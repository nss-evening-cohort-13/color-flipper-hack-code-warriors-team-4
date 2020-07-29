const colorArray = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'cream', 'wheat', 'hotpink', 'aquamarine', 'brown', 'cornflowerblue', 'darkmagenta', 'fuchsia']

const bodySelector = document.querySelector('body')

const handleButtonClickSimple = () => {
    bodySelector.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
}

const buttonEvents = () => {
    document.querySelector('#button').addEventListener('click', handleButtonClickSimple)
}

const init = () => {
    buttonEvents();
}

init(); 