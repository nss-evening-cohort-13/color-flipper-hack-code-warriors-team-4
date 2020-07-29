const handleButtonClick = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  };
  
  const buttonEvent = () => {
      document.querySelector('#button').addEventListener("click", handleButtonClick)
  };

  buttonEvent();
