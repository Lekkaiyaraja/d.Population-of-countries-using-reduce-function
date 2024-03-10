fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Use the reduce function to calculate the total population
    const totalPopulation = data.reduce((accumulator, country) => {
      return accumulator + country.population;
    }, 0);

    // Print the total population
    console.log(`Total population of all countries: ${totalPopulation}`);
  })
  .catch(error => console.error('Error fetching data:', error));
