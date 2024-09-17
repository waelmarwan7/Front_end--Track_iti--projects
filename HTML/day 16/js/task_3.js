
        var result_promisis = fetch('https://jsonplaceholder.typicode.com/users');

        result_promisis
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            const tableBody = document.getElementById('user-table-body');
            data.forEach(user => {
              const row = document.createElement('tr');
              row.innerHTML = `
                <td >${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
              `;
              tableBody.appendChild(row);
            });
          })
          .catch((error) => {
            // Handle any errors that occurred during the fetch
            console.error('There has been a problem with your fetch operation:', error);
          })
