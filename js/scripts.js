var jsonData =
    [{
        "id": 1,
        "firstName": "hamid",
        "lastName": "mohamadi",
        "contactType": "Friend",
        "birthDate": "2010.10.10",
        "phoneNumber": ["09011019011", "09120658719"],
        "email": ["mohammadi842@gmail.com", "h_mohammadi842@yahoo.com"]
    },
        {
            "id": 2,
            "firstName": "mehdi",
            "lastName": "jalali",
            "contactType": "Friend",
            "birthDate": "1979.10.10",
            "phoneNumber": ["09011019011", "09120658719"],
            "email": ["mjv703@gmail.com", "mjv703@yahoo.com"]
        },
        {
            "id": 3,
            "firstName": "karim",
            "lastName": "jalali",
            "contactType": "Friend",
            "birthDate": "1988.10.10",
            "phoneNumber": ["09011019011", "09120658719"],
            "email": ["karim@gmail.com", "karim@yahoo.com"]
        },
        {
            "id": 4,
            "firstName": "sara",
            "lastName": "jabbari",
            "contactType": "Colleague",
            "birthDate": "1934.11.10",
            "phoneNumber": "09011019011",
            "email": "mjv703@gmail.com"
        },
        {
            "id": 5,
            "firstName": "sonia",
            "lastName": "salari",
            "contactType": "Other",
            "birthDate": "1967.08.07",
            "phoneNumber": "09120658719",
            "email": "mjv703@yahoo.com"
        }
    ];

var tableData = jsonData.slice();
/**
 * function for inserting json to table
 */
function json2table() {
    let rows = '';
    const tableFilteredData = jsonData.slice();
    const filteredData = tableFilteredData.filter(filterData);
    filteredData.map((obj, key) => {
        rows += "<tr><td>" + obj.id + "</td>" +
            "<td>" + obj.firstName + "</td>" +
            "<td>" + obj.lastName + "</td>" +
            "<td>" + obj.contactType + "</td>" +
            "<td>" + obj.birthDate + "</td>" +
            "<td>" + obj.phoneNumber + "</td>" +
            "<td>" + obj.email + "</td></tr>"
        document.getElementById("userData").innerHTML = rows;
    });
}

/**
 * function for quick search
 */
function filterData(value, index, array) {
    const inputFName = document.getElementById("inputFname").value;
    const inputLName = document.getElementById("inputLname").value;
    const inputBDate = document.getElementById("inputBdate").value;
    if (inputFName) {
        return value.firstName.includes(inputFName, 0);
    } else if (inputLName) {
        return value.lastName.includes(inputLName, 0);
    } else if (inputBDate) {
        return value.birthDate.includes(inputBDate, 0);
    } else {
        return array;
    }
}
 function filterDataForAdvancedSearch(value , index , array) {
     const inputFName = document.getElementById("inputAdvFname").value;
     const inputLName = document.getElementById("inputAdvLname").value;
     const inputEmail = document.getElementById("inputAdvEmail").value;
     const inputBDate = document.getElementById("inputAdvBdate").value;
     if (inputFName) {
         return value.firstName.includes(inputFName, 0);
     }
     if (inputLName) {
         return value.lastName.includes(inputLName, 0);
     }
     if (inputBDate) {
         return value.birthDate.includes(inputBDate, 0);
     }
     if (inputEmail) {
         return value.email.includes(inputEmail, 0);
     }else {
         return array;
     }
 }
/**
 * function for "save" button in modal
 */
function addData() {
    var table = document.getElementById('userData'),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        id = document.getElementById('id').value,
        firstName = document.getElementById('firstName').value,
        lastName = document.getElementById('lastName').value,
        contactType = document.getElementById('contactType').value,
        birthDate = document.getElementById('birthDate').value,
        phoneNumber = document.getElementById('phoneNumber').value,
        email = document.getElementById('email').value;

    cell1.innerHTML = id;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = contactType;
    cell5.innerHTML = birthDate;
    cell6.innerHTML = phoneNumber;
    cell7.innerHTML = email;
    rowDetails();
}

/**
 * function for show row details in modal
 */
function rowDetails() {
    var rIndex, table = document.getElementById('userData');
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            rIndex = this.rowIndex;
            document.getElementById('id').value = this.cells[0].innerHTML;
            document.getElementById('firstName').value = this.cells[1].innerHTML;
            document.getElementById('lastName').value = this.cells[2].innerHTML;
            document.getElementById('contactType').value = this.cells[3].innerHTML;
            document.getElementById('birthDate').value = this.cells[4].innerHTML;
            document.getElementById('phoneNumber').value = this.cells[5].innerHTML;
            document.getElementById('email').value = this.cells[6].innerHTML;
        };
    }
}

/**
 * function for search bar on the top of the table
 */
function megaSearch() {
    $(document).ready(function () {
        $("#myInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#userData tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
}

function quickSearch() {
    json2table();
}
function advancedSearch() {
    filterDataForAdvancedSearch();
}

/**
 * function for quick search refresh button
 */
function quickSearchRefreshBtn() {
    const inputFName = document.getElementById("inputFname").value = '';
    const inputLName = document.getElementById("inputLname").value =  '';
    const inputBDate = document.getElementById("inputBdate").value = '';
    quickSearch();
}

/**
 * function for advanced search refresh button
 */
function advancedSearchRefreshBtn() {
    const inputFName = document.getElementById("inputFname").value = '';
    const inputLName = document.getElementById("inputLname").value =  '';
    const inputBDate = document.getElementById("inputBdate").value = '';
    const inputEmail = document.getElementById("inputEmail").value = '';
    quickSearch();
}
