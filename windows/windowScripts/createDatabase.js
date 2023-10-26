
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

            /* Debug */
            console.log(tables)
        }
    }
});



/* Handle the menu button */
const backToMainMenu = document.getElementById('back-to-menu');
// hide the current window and show the main menu
backToMainMenu.addEventListener('click', () => {
    window.ipcRenderer.send('back-to-main-menu');
});