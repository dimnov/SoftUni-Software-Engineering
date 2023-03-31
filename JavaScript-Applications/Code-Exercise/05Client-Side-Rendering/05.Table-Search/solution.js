const searchField = document.getElementById("searchField");
const searchBtn = document.getElementById("searchBtn");
const tableBody = document.querySelector("table.container tbody");

let students = {};

// Load data from server
fetch("http://localhost:3030/jsonstore/advanced/table")
   .then((res) => res.json())
   .then((data) => {
      students = data;
      renderTable(data);
   })
   .catch((err) => console.log(err));

function renderTable(data) {
   let html = "";
   for (const studentId in data) {
      const student = data[studentId];
      html += `<tr>
                <td>${student.firstName} ${student.lastName}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
            </tr>`;
   }
   tableBody.innerHTML = html;
}

function clearSelections() {
   const rows = tableBody.querySelectorAll("tr");
   rows.forEach((row) => row.classList.remove("select"));
}

function searchTable() {
   const rows = tableBody.querySelectorAll('tr');
   const searchValue = searchField.value.toLowerCase();

   for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.querySelectorAll('td');
      let rowContainsSearchValue = false;
      for (let j = 0; j < cells.length; j++) {
         const cellText = cells[j].textContent.toLowerCase();
         if (cellText.includes(searchValue)) {
            rowContainsSearchValue = true;
            break;
         }
      }
      if (rowContainsSearchValue) {
         row.classList.add('select');
      } else {
         row.classList.remove('select');
      }
   }

   searchField.value = '';
}

searchBtn.addEventListener("click", searchTable);
