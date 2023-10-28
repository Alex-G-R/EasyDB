
/* Create temp.html script */

/* Database data */
let databaseName = 'hello';

const mainH1 = document.getElementById("mainH1");

/* Get the HTML input fields */
const databaseNameInput = document.getElementById("databaseName");

/* Next button setup */
const next = document.getElementById("next");
let nextStatus = 0;

next.addEventListener("click", () => {

    switch (nextStatus) {
        case 0:

            /* Handle naming the database and moving to the next step */
            /* Check for the nextStatus number */
            if (databaseNameInput.value.trim() != "") {
                databaseName = databaseNameInput.value.trim();

                /* Change the next status number */
                nextStatus = 1;

                /* Chnage the visible input dields*/
                databaseNameInput.style.display = "none";

                /* Change the mainH1 text */
                mainH1.innerText = `Editing ${databaseName}`;

                /* Show the add table button */
                addTable.style.display = "flex";

                /* hide the next button */
                next.style.display = "none";
            }
            break;

        // case 1: // next case

    }

});

/* add table setup */
const addTable = document.getElementById("add-table");

const newTableContainer = document.getElementById('newTableContainer');
const editColumnsContainer = document.getElementById('editColumnsContainer');

let numberOfTables = 0;


addTable.addEventListener('click', () => {

    // Create a container for the table
    const tableContainer = document.createElement('div');
    tableContainer.setAttribute('class', 'tableContainer')
    tableContainer.setAttribute('id', `tableContainer_${numberOfTables}`)
    newTableContainer.appendChild(tableContainer);

    /* Input field type text - table name */
    const tableName = document.createElement('input');
    tableName.setAttribute('id', `tableName_${numberOfTables}`);
    tableName.setAttribute('class', 'input');
    tableName.setAttribute('type', 'text');
    tableName.setAttribute('placeholder', 'Table name: ');
    tableContainer.appendChild(tableName);

    /* Input field type button - edit */
    const addColumns = document.createElement('input');
    addColumns.setAttribute('id', `addColumnsButton_${numberOfTables}`);
    addColumns.setAttribute('class', 'add-columns-button table-creator-button');
    addColumns.setAttribute('type', 'button');
    addColumns.setAttribute('data-table-number', numberOfTables)
    addColumns.setAttribute('value', 'Add columns');
    tableContainer.appendChild(addColumns);

    // Attach click event listener to the new add columns button
    addColumns.addEventListener('click', () => {
        // Get the value of the data-table-number attribute
        let buttonNumber = addColumns.getAttribute('data-table-number');
        // Use the buttonNumber to identify the associated tableName
        let tableToEdit = document.getElementById(`tableName_${buttonNumber}`);

        if (tableToEdit) {
            editTheTableColums(tableToEdit, buttonNumber);
        }
    });


    /* Input field type button - delete the table */
    const deleteTheTable = document.createElement('input');
    deleteTheTable.setAttribute('id', `deleteTheTableButton_${numberOfTables}`);
    deleteTheTable.setAttribute('class', 'delete-the-table-button table-creator-button');
    deleteTheTable.setAttribute('type', 'button');
    deleteTheTable.setAttribute('value', 'Delete this table');
    deleteTheTable.setAttribute('data-table-number', numberOfTables)
    tableContainer.appendChild(deleteTheTable);

    // Attach click event listener to the new delete button
    deleteTheTable.addEventListener('click', () => {
        // Get the value of the data-table-number attribute
        let buttonNumber = deleteTheTable.getAttribute('data-table-number');
        // Use the buttonNumber to identify the associated tableContainer
        let tableToDelete = document.getElementById(`tableContainer_${buttonNumber}`);

        if (tableToDelete) {
            tableToDelete.parentNode.removeChild(tableToDelete);
        }
    });
    

    numberOfTables++;
});

/* Back to the table creator button */
const backToTheTableCreator = document.getElementById('back-to-tables');
const addColumn = document.getElementById("add-column");

/* Handle adding columns to the tables */
function editTheTableColums(tableToEdit, buttonNumber) {

    /* Check if the table name is not empty */
    if( tableToEdit.value.trim() != "" ){
        mainH1.innerHTML = `Adding columns to the table <i>${tableToEdit.value}</i>`;

        /* Chnage the page */
        newTableContainer.style.display = "none";
        editColumnsContainer.style.display = "inline";

        /* Chnage the button visibility */
        addTable.style.display = "none";
        backToMainMenu.style.display = "none";
        backToTheTableCreator.style.display = "inline";
        addColumn.style.display = "inline";

    }

}

/* Handle going back from column creator to the table creator */
backToTheTableCreator.addEventListener('click', () => {
    mainH1.innerHTML = `Editing ${databaseName}`;

    /* Chnage the page */
    newTableContainer.style.display = "inline";
    editColumnsContainer.style.display = "none";

    /* Chnage the button visibility */
    addTable.style.display = "inline";
    backToMainMenu.style.display = "inline";
    backToTheTableCreator.style.display = "none";
    addColumn.style.display = "none";

});



/* Handle the menu button */
const backToMainMenu = document.getElementById('back-to-menu');
// hide the current window and show the main menu
backToMainMenu.addEventListener('click', () => {
    window.ipcRenderer.send('back-to-main-menu');
});