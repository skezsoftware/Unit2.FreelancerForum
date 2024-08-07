const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const initialArr = [
    {
      name: "Daniel",
      price: 49,
      occupation: "Software Enegineer",
    },

    {
        name: "Santa",
        price: 56,
        occupation: "Cookie Eater",
    }
  ];
  const addFreelancer = setInterval(addLancer, 3000)
  render();

  function render() {
    const names = document.querySelector("#jobs");
    const nameElements = initialArr.map((lancer) => {
        const element = document.createElement("li");
        element.textContent = lancer.name + " $" + lancer.price + " " + lancer.occupation;
        return element;
    });
    names.replaceChildren(...nameElements);
    getAverage(initialArr);
   
  }

  function addLancer() {
    const lancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    console.log(lancer);
    initialArr.push(lancer);
    render();
  }

  
  function getAverage(numbers) {
     const averagePrices = document.querySelector("#averagePrices")
     const initialValue = 0
     const sumTotal = numbers.reduce((acc, num) => acc + num.price, initialValue) / numbers.length;
     averagePrices.innerHTML = `Average price is ${parseInt(sumTotal)}`;
  }




//   sum() {
    //return the sum of the numbers
    // return this.data.reduce((a,b) => a + b, 0);
//   }

// const sum = times.reduce((a, b) => a + b, 0);
// const avg = (sum / times.length) || 0;

// console.log(`The sum is: ${sum}. The average is: ${avg}.`);