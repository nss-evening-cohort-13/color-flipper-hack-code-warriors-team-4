const handleButtonClickHex = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  };
  
  const buttonEvent = () => {
      document.querySelector('#button').addEventListener("click", handleButtonClickHex)
  };

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
    buttonEvent();
}

init(); 
