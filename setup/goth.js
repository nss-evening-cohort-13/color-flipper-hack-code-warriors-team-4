const gothArray = [
    {
        color: '#0a0405',
        name: 'Midnight'
    },
    {
        color: '#0a090a',
        name: 'Disintegration'
    },
    {
        color: '#04010f',
        name: 'Siouxsee'
    },
    {
        color: '#111112',
        name: 'Cave'
    },
    {
        color: '#070e0f',
        name: 'Crow'
    },
    {
        color: '#0c0d0c',
        name: 'Unknown Pleasures'
    },
    {
        color: '#121211',
        name: 'Robert Smith\'s Hair'
    },
    {
        color: '#120f0b',
        name: 'October Rust'
    },
    {
        color: '#170606',
        name: 'Dracula\'s Cape'
    }
]

const bodySelector = document.querySelector('body');

const handleButtonClick = () => {
      const randomColor = gothArray[Math.floor(Math.random() * gothArray.length)];
      bodySelector.style.backgroundColor = randomColor.color;
      document.querySelector('#color-name').innerHTML = `${randomColor.color} ${randomColor.name}`;
      document.querySelector('#logo').style.color = `${randomColor.color}`;
    };

const buttonEventGoth = () => {
        document.querySelector('#button').addEventListener('click', handleButtonClick);
        document.querySelector('#goth').style.color = 'white';
      };

      const init = () => {
        buttonEventGoth();
        handleButtonClick();
      };
      
      init();