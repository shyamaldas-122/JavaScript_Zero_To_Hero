// let color = [
//   'white',
//   'black',
//   'red',
//   'pink',
//   'green',
//   'blue',
//   'purple',
//   'yellow',
//   'brown',
//   'aqua',
// ];
// let len = color.length;

// <------------------------- or -------------------------------->

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 16);
      color += hex[random];
    }
    return color;
  };
  
  const colorChange = function () {
    // let random = Math.floor(Math.random() * len);
    // document.querySelector('body').style.backgroundColor = color[random];
    document.querySelector('body').style.backgroundColor = randomColor();
  };
  let intervalId;
  function getStart() {
    if (!intervalId) {
      intervalId = setInterval(colorChange, 1000);
    }
  }
  
  document.querySelector('#start').addEventListener('click', () => {
    getStart();
  });
  
  document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);
    // intervalId = null;
  });
  