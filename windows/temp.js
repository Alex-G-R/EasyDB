
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
            console.log("debug 1")
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

/* Confirm button */
const confirm = document.getElementById('confirm');

const addColumn = document.getElementById('add-column');

/* Handle adding columns to the tables */
function editTheTableColums(tableToEdit, buttonNumber) {
    console.log("debug 2")
    let numberOfColumns = 0;

    /* Check if the table name is not empty */
    if (tableToEdit.value.trim() != "") {

        mainH1.innerHTML = `Adding columns to the table <i>${tableToEdit.value}</i>`;

        /* Chnage the page */
        newTableContainer.style.display = "none";
        editColumnsContainer.style.display = "inline";

        /* Chnage the button visibility */
        addTable.style.display = "none";
        backToMainMenu.style.display = "none";
        backToTheTableCreator.style.display = "inline";
        addColumn.style.display = "inline";
        confirm.style.display = 'inline';

        //Create a new container assosiated with the table
        const tableColumns = document.createElement('div');
        tableColumns.setAttribute('class', 'tableColumns')
        tableColumns.setAttribute('id', `tableColumns_${buttonNumber}`)
        editColumnsContainer.appendChild(tableColumns);

        let currentTable = document.getElementById(`tableColumns_${buttonNumber}`)

        // Loop through the children elements and hide them
        for (let i = 0; i < editColumnsContainer.children.length; i++) {
            editColumnsContainer.children[i].style.display = "none";
        }

        currentTable.style.display = "inline";


        /* Column creator */
        addColumn.addEventListener('click', () => {
            addColumnFunc(buttonNumber, numberOfColumns, currentTable);
        }); // sth broke here
          

    }

}

const addColumnFunc = function(buttonNumber, numberOfColumns, currentTable) {
    
    console.log("debug 3")
    const currentButtonNumber = buttonNumber;

    // Create a container for the column
    const columnContainer = document.createElement('div');
    columnContainer.setAttribute('class', 'columnContainer')
    columnContainer.setAttribute('id', `columnContainer_${numberOfColumns}_${currentButtonNumber}`)
    currentTable.appendChild(columnContainer);

    let currentColumnContainer = document.getElementById(`columnContainer_${numberOfColumns}_${currentButtonNumber}`);

    /* Input field type text - column name */
    const columnName = document.createElement('input');
    columnName.setAttribute('id', `columnName_${numberOfColumns}_${currentButtonNumber}`);
    columnName.setAttribute('class', 'input column-name');
    columnName.setAttribute('type', 'text');
    columnName.setAttribute('placeholder', 'Column name: ');
    currentColumnContainer.appendChild(columnName);

    /* Input field type button - delete the column */
    const deleteTheColumn = document.createElement('input');
    deleteTheColumn.setAttribute('id', `deleteTheColumnButton_${numberOfColumns}_${currentButtonNumber}`);
    deleteTheColumn.setAttribute('class', 'delete-the-column-button column-creator-button');
    deleteTheColumn.setAttribute('type', 'button');
    deleteTheColumn.setAttribute('value', 'Delete');
    deleteTheColumn.setAttribute('data-column-number', numberOfColumns)
    currentColumnContainer.appendChild(deleteTheColumn);

    // Attach click event listener to the new delete button
    deleteTheColumn.addEventListener('click', () => {
        // Get the value of the data-column-number attribute
        let buttonNumber = deleteTheColumn.getAttribute('data-column-number');
        // Use the buttonNumber to identify the associated columnContaine
        let columnToDelete = document.getElementById(`columnContainer_${numberOfColumns}_${buttonNumber}`);

        if (columnToDelete) {
            columnToDelete.parentNode.removeChild(columnToDelete);
        }
    });


    numberOfColumns++;
};


/* Handle going back from column creator to the table creator */
backToTheTableCreator.addEventListener('click', () => {
    console.log("back")

    mainH1.innerHTML = `Editing ${databaseName}`;

    addColumn.removeEventListener('click', addColumnFunc);

    /* Chnage the page */
    newTableContainer.style.display = "inline";
    editColumnsContainer.style.display = "none";

    /* Chnage the button visibility */
    addTable.style.display = "inline";
    backToMainMenu.style.display = "inline";
    backToTheTableCreator.style.display = "none";
    document.getElementById("add-column").style.display = "none";
    confirm.style.display = 'none';

});



/* Handle the menu button */
const backToMainMenu = document.getElementById('back-to-menu');
// hide the current window and show the main menu
backToMainMenu.addEventListener('click', () => {
    window.ipcRenderer.send('back-to-main-menu');
});