function editForm() {
   document.getElementById('viewForm').style.display = "none"
   document.getElementById('editFormOuter').style.display = "block"
}

function nameActive() {

    document.getElementById('optionName').style.backgroundColor="rgb(230, 227, 227)"
    document.getElementById('optionName').style.border="none"
    document.getElementById('nameTable').style.display = ""


    document.getElementById('optionAddress')
    document.getElementById('optionAddress').style.borderLeft="1px solid black"
    document.getElementById('optionAddress').style.borderBottom="2px solid black"
    document.getElementById('optionAddress').style.backgroundColor="white"
    document.getElementById('addressTable').style.display = "none"
}

function addressActive(){

    document.getElementById('optionAddress').style.backgroundColor="rgb(230, 227, 227)"
    document.getElementById('optionAddress').style.border="none"
    document.getElementById('addressTable').style.display = "table"

    document.getElementById('optionName')
    document.getElementById('optionName').style.borderRight="1px solid black"
    document.getElementById('optionName').style.borderBottom="2px solid black"
    document.getElementById('optionName').style.backgroundColor="white"
    document.getElementById('nameTable').style.display = "none"
    

}

function save(){

    // NAME FORM
   let title = document.getElementById('title').value
   let firstName = document.getElementById('firstName').value
   let lastName = document.getElementById('lastName').value
   let email = document.getElementById('emailAddress').value
   let phoneNumber = document.getElementById('phoneNumber').value
    // ADDRESS FORM
   let line1 = document.getElementById('line1').value
   let line2 = document.getElementById('line2').value
   let suburb = document.getElementById('suburb').value
   let state = document.getElementById('state').value
   let postCode = document.getElementById('postCode').value
   let country = document.getElementById('country').value
    // FULL ADDRESS
   let fullAddress = line1 + "\n" + line2 + " \n" + suburb + "\n" + state + "\n" + postCode + "\n" + country
   
//    if(firstName && lastName && email &&line1 && suburb && state && postCode !== ""){
        document.getElementById("nameSave").value = title + " " + firstName + " " + lastName
        document.getElementById("emailSave").value = email
        document.getElementById("phoneSave").value = phoneNumber
        document.getElementById("a").value = fullAddress
        document.getElementById("a").style.display = "table"
        document.getElementById("a").style.height = "100px"

        document.getElementById("addressSave").style="display:none"
        
        
        document.getElementById('viewForm').style.display = "block"
        document.getElementById('editFormOuter').style.display = "none"
}//else{
//     document.getElementById('firstName').style.border = "red 1px solid"
//     document.getElementById('lastName').style.border = "red 1px solid"
//     document.getElementById('emailAddress').style.border = "red 1px solid"
//     document.getElementById('line1').style.border = "red 1px solid"
//     document.getElementById('suburb').style.border = "red 1px solid"
//     document.getElementById('state').style.border = "red 1px solid"
//     document.getElementById('postCode').style.border = "red 1px solid"
//    }
// }