console.log('l')
let count = 0;

if (localStorage.getItem('count')) {
    count = parseInt(localStorage.getItem('count'));
  }

const btnClick = () =>{
    count++;
    console.log(count)
    const para = document.getElementById('para')
    para.innerText = count;

    localStorage.setItem('count', count);
}


const storedCount = localStorage.getItem('count');

// Check if a value was retrieved from local storage
if (storedCount) {
  // Display the stored value on the webpage
  const para = document.getElementById('para')
    para.innerText = `${storedCount}`;
  
} else {
  // No value was retrieved from local storage
  console.log('No stored count value found.');
}