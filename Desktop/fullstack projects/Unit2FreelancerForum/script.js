const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
  ];
  
  const freelancersContainer = document.getElementById('freelancers');
  const avgPriceSpan = document.getElementById('avg-price');
  
  // Function to display freelancers
  function displayFreelancers() {
    freelancersContainer.innerHTML = '';
    freelancers.forEach(freelancer => {
      const div = document.createElement('div');
      div.classList.add('freelancer');
      div.innerHTML = `<p>Name: ${freelancer.name}</p>
                       <p>Occupation: ${freelancer.occupation}</p>
                       <p>Starting Price: $${freelancer.startingPrice}</p>`;
      freelancersContainer.appendChild(div);
    });
  }
  
  // Calculate and display average starting price
  function calculateAveragePrice() {
    const total = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0);
    const avg = total / freelancers.length;
    avgPriceSpan.textContent = avg.toFixed(2);
  }
  
  // Adding Carol after a few seconds
  setTimeout(() => {
    freelancers.push({ name: "Carol", occupation: "Programmer", startingPrice: 70 });
    displayFreelancers();
    calculateAveragePrice();
  }, 3000);
  
  // Generating a random freelancer
  function generateRandomFreelancer() {
    const names = ["Alice", "Bob", "Carol", "Greg", "Julie", "George"];
    const occupations = ["Writer", "Teacher", "Programmer", "Barista", "Studio Engineer", "Chef"];
    const minPrice = 20;
    const maxPrice = 100;
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    return { name: randomName, occupation: randomOccupation, startingPrice: randomPrice };
  }
  
  // Adding a new random freelancer every few seconds
  function addRandomFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    displayFreelancers();
    calculateAveragePrice();
  }
  
  // Addinga new random freelancer every 5 seconds
  setInterval(addRandomFreelancer, 5000);
  
  // Initial display
  displayFreelancers();
  calculateAveragePrice();
  