
/* Create database.html script*/

let $databaseName;
let $numberOfTables;

const mainH1 = document.getElementById("mainH1");

const databaseNameInput = document.getElementById("databaseName");
const databaseTableNumber = document.getElementById("databaseTableNumber");
const databaseTableName = document.getElementById("databaseTableName");
const numberOfColumns = document.getElementById("numberOfColumns");


const next = document.getElementById("next");
let nextStatus = 0;

/* Get the tables names variables*/
let tablesDone = 0;
const tablesNames = [];

// get the number of columns to each table
let numberOfColumnsProvided = 0;


// Table object
const tables = [];


function getTheColumns(){
    /* If the input field not empty*/
    if( Number(numberOfColumns.value) > 0 ){
        mainH1.innerHTML = `Table ${tablesNames[numberOfColumnsProvided + 1]}`
        if (numberOfColumnsProvided < tablesNames.length) {
            /* If every table not done */
            
            tables.push(
                {
                    name: tablesNames[numberOfColumnsProvided],
                    numberOfColumns: Number(numberOfColumns.value)
                }
            );

            numberOfColumnsProvided++;

        } else {    
            return;
        }
    }
}


function getNextTableName() {
    if (tablesDone < $numberOfTables) {
        databaseTableName.value = null;
        databaseTableName.placeholder = `Enter the name of the table ${tablesDone + 1}`;
    } else {

        /* Disable the visibilisty of the table name field and change it to the number of columns of a table*/
        databaseTableName.style.display = "none";
        numberOfColumns.style.display = "inline";

        /* Change the status */
        nextStatus = 3;

        /* update the h1 */
        mainH1.innerHTML = `Table ${tablesNames[numberOfColumnsProvided]}`

        return;
    }
}
        
next.addEventListener("click", () => {

    /* Handle naming the database and moving to the next step */
    /* Check for the nextStatus number */
    if( nextStatus == 0 ){
        if(databaseNameInput.value.trim() === "" && nextStatus == 0){
        // Do nothing if the input field is empty
        } else {
            $databaseName = toString(databaseNameInput.value.trim());

            /* Change the next status number */
            nextStatus = 1;

            /* Chnage the visible input dields*/
            databaseNameInput.style.display = "none";
            databaseTableNumber.style.display = "inline";
        }   
    }


    /* Handle the input of the number of tables in the database and moving to the next step */
    /* Check for the nextStatus number */
    if( nextStatus == 1){
        if(Number(databaseTableNumber.value) <= 0 && nextStatus == 1){
        // Do nothing if the input field is empty
        } else {
            $numberOfTables = Number(databaseTableNumber.value);
            if(nextStatus == 1){ 

                /* Change the next status number*/
                nextStatus = 2; 

                /* Change the visible input fields*/
                databaseTableNumber.style.display = "none";
                databaseTableName.style.display = "inline"; 
            }            
        }
    }


    /* Handle naming the each table and moving to the next step */
    /* Check for the nextStatus number */
    if( nextStatus == 2 ){

        if (databaseTableName.value.trim() !== "") {

            /* If input field not empty push the data to the array */
            tablesNames.push(databaseTableName.value);

            tablesDone++;

            getNextTableName();

        } else {    
            // if the input field is empty
        }
    }

    if( nextStatus == 3 ) {

        /* Check for the correct status and after the function null out the input value */
        getTheColumns();
        numberOfColumns.value = null;

        /* Console log the tables if all done */
        if (numberOfColumnsProvided == tablesNames.length) {

            /* Update the status and hide the input field*/
            nextStatus = 4;
            numberOfColumns.style.display = "none";

            /* Change the h1 */
            mainH1.innerHTML = "Creating an database"
        }
    }

    if(nextStatus == 4){
        onNextButtonClick();
    }
});

/* Form */
let currentIndex = 0;
const formContainer = document.getElementById('form-container');
const form = document.getElementById('form');

function generateFormFields(object) {

    form.innerHTML = ''; // Clear previous form fields

    /* If every table columns has not been filled */
    for (let i = 0; i < object.numberOfColumns; i++) {

        /* Change the main h1 */
        mainH1.innerHTML = `Table ${tablesNames[i]}`;

        /* Main container for the form*/
        const columnOptions = document.createElement('div');
        columnOptions.setAttribute('class', 'column-options');
        form.appendChild(columnOptions);

        /* Input field type text - column name */
        const columnName = document.createElement('input');
        columnName.setAttribute('id', `columnName_${i}`);
        columnName.setAttribute('class', 'input');
        columnName.setAttribute('type', 'text');
        columnName.setAttribute('placeholder', 'Column name: ');
        columnOptions.appendChild(columnName);

        /* Input field type text - column datatype name */
        const columnDataType = document.createElement('input');
        columnDataType.setAttribute('id', `columnDataType_${i}`);
        columnDataType.setAttribute('class', 'input');
        columnDataType.setAttribute('type', 'text');
        columnDataType.setAttribute('placeholder', 'Column datatype: ');
        columnOptions.appendChild(columnDataType);

        /* Input field type number - column max characyers */
        const columnMaxChars = document.createElement('input');
        columnMaxChars.setAttribute('id', `columnMaxChars_${i}`);
        columnMaxChars.setAttribute('class', 'input maxChars');
        columnMaxChars.setAttribute('type', 'text');
        columnMaxChars.setAttribute('placeholder', 'Length limit: ');
        columnOptions.appendChild(columnMaxChars);

        /* Not Null checkbox - label */
        const notNullBoxLabel = document.createElement('label');
        notNullBoxLabel.setAttribute('class', 'label')
        notNullBoxLabel.setAttribute('for', 'notNull');
        notNullBoxLabel.innerText = "Not Null";
        columnOptions.appendChild(notNullBoxLabel);

        /* Not Null checkbox  */
        const notNullBox = document.createElement('input');
        notNullBox.setAttribute('id', `notNullBox_${i}`);
        notNullBox.setAttribute('class', 'checkboxForm');
        notNullBox.setAttribute('type', 'checkbox');
        notNullBox.setAttribute('name', 'notNull');
        columnOptions.appendChild(notNullBox);

        /* auto increment - label */
        const autoIncrementLabel = document.createElement('label');
        autoIncrementLabel.setAttribute('class', 'label')
        autoIncrementLabel.setAttribute('for', 'autoIncrement');
        autoIncrementLabel.innerText = "Increment";
        columnOptions.appendChild(autoIncrementLabel);

        /* auto increment checkbox  */
        const autoIncrement = document.createElement('input');
        autoIncrement.setAttribute('id', `autoIncrement_${i}`);
        autoIncrement.setAttribute('class', 'checkboxForm');
        autoIncrement.setAttribute('type', 'checkbox');
        autoIncrement.setAttribute('name', 'autoIncrement');
        columnOptions.appendChild(autoIncrement);

        /* Primary key radio - label */
        const primaryKeyRadioLabel = document.createElement('label');
        primaryKeyRadioLabel.setAttribute('class', 'label');
        primaryKeyRadioLabel.setAttribute('for', 'primKey');
        primaryKeyRadioLabel.innerText = "Primary Key";
        columnOptions.appendChild(primaryKeyRadioLabel);

        /* Primary key radio - label */
        const primaryKeyRadio = document.createElement('input');
        primaryKeyRadio.setAttribute('id', `primaryKeyRadio_${i}`);
        primaryKeyRadio.setAttribute('class', 'radioInput');
        primaryKeyRadio.setAttribute('type', 'radio');
        primaryKeyRadio.setAttribute('name', 'primKey');
        columnOptions.appendChild(primaryKeyRadio);
        
    }
}

function showCurrentForm() {
    if (currentIndex >= 0 && currentIndex < tables.length) {
        generateFormFields(tables[currentIndex]);
    }
}

function onNextButtonClick() {
    showCurrentForm();
    currentIndex++;

    if( currentIndex > tables.length ){
        alert("The columns has been generated")
    }
}




/* Handle the menu button */
const backToMainMenu = document.getElementById('back-to-menu');
// hide the current window and show the main menu
backToMainMenu.addEventListener('click', () => {
    window.ipcRenderer.send('back-to-main-menu');
});