fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#data-table tbody');

    data.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
      
        <td class ='back'>${item.name}</td>
        <td class ='back'>${item.last}</td>
        <td class ='back'>${item.buy}</td>
        <td class ='back'>${item.sell}</td>
        <td class ='back'>${item.volume}</td>
        <td class='back'>${item.base_unit}</td>
      `;

     tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
