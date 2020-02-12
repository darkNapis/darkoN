let dogArr = [
    {
      name: 'Aron',
      breed: 'Golden Retriever',
      hair: 'Medium',
      size: 'Large',
      age: 1,
      color: 'Golden'
    },
    {
      name: 'Jack',
      breed: 'Fox terrier',
      hair: 'Short',
      size: 'Medium',
      age: 10,
      color: 'White-brown'
    },
    {
      name: 'Hector',
      breed: 'Dogo Argentino',
      hair: 'Short',
      size: 'Extra large',
      age: 1,
      color: 'White'
    },
    {
      name: 'Alfa',
      breed: 'Great Dane',
      hair: 'Short',
      size: 'Extra large',
      age: 5,
      color: 'Gray'
    },
    {
      name: 'Bono',
      breed: 'French bulldog',
      hair: 'Short',
      size: 'Small',
      age: 6,
      color: 'Black'
    }
  ];

  let insert = document.getElementById(`emptyTable`);
  let button = document.getElementById(`button`);

  function addDog() {
      for (let i = 0; i < dogArr.length; i++) {
          let dogAge = dogArr[i].age;
          let puppy = dogAge <= 1 ? "puppy" : dogAge;
          insert.innerHTML +=
                `<tr>
                    <th>${dogArr[i].name}</th>
                    <th>${dogArr[i].breed}</th>
                    <th>${dogArr[i].hair}</th>
                    <th>${dogArr[i].size}</th>
                    <th>${puppy}</th>
                    <th>${dogArr[i].color}</th>
                </tr>`
      }
  };

  button.addEventListener(`click`, function() {
      fetch('https://api.myjson.com/bins/110zma')
            .then(response => {
                return response.json();
            })
            .then(dogArr => {
                insert.innerHTML = "";
                addDog(dogArr);
            })
  });