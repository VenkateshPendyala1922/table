function generateTable() {
    // Get user inputs for rows and columns
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;

    // Validate input
    if (rows <= 0 || columns <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    // Get the container and clear any existing table
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    // Create table element
    const table = document.createElement('table');

    // Create table rows and cells
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.textContent = `Row ${i + 1}, Col ${j + 1}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Append the table to the container
    tableContainer.appendChild(table);
}
