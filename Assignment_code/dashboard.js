 var selectedRow = null

function onFormSubmit(){
 
var formData=readFormData();
if(selectedRow==null)
insertNewRecord(formData);
else
updateRecord(formData)
resetForm();
}

function readFormData(){
    var formData={};
    formData["id"]=document.getElementById("id").value;
    formData["name"]=document.getElementById("name").value;
    formData["emailid"]=document.getElementById("emailid").value;
    formData["salary"]=document.getElementById("salary").value;
    formData["year"]=document.getElementById("year").value;
    formData["city"]=document.getElementById("city").value;
    formData["country"]=document.getElementById("country").value;
return formData;
}
function insertNewRecord(data){
    var table=document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.id;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.name;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.emailid;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.salary;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.year;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.city;
    cell7=newRow.insertCell(6);
    cell7.innerHTML=data.country;
    cell8=newRow.insertCell(7);
    cell8.innerHTML = `<button value="edit" onClick="onEdit(this)">Edit</button>
                       <button value="delete" onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("id").value=selectedRow.cells[0].innerHTML;
    document.getElementById("name").value=selectedRow.cells[1].innerHTML;
    document.getElementById("emailid").value=selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value=selectedRow.cells[3].innerHTML;
    document.getElementById("year").value=selectedRow.cells[4].innerHTML;
    document.getElementById("city").value=selectedRow.cells[5].innerHTML;
    document.getElementById("country").value=selectedRow.cells[6].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.id;
    selectedRow.cells[1].innerHTML=formData.name;
    selectedRow.cells[2].innerHTML=formData.emailid;
    selectedRow.cells[3].innerHTML=formData.salary;
    selectedRow.cells[4].innerHTML=formData.year;
    selectedRow.cells[5].innerHTML=formData.city;
    selectedRow.cells[6].innerHTML=formData.country;


}
function onDelete(td){
    if(confirm("Are you sure to delete this record?")){
  row=td.parentElement.parentElement;
  document.getElementById("employeelist").deleteRow(row.rowIndex);
  resetForm();
}
}
function resetForm(){
    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("emailid").value="";
    document.getElementById("salary").value="";
    document.getElementById("year").value="";
    document.getElementById("city").value="";
    document.getElementById("country").value="";
}
function checkPassword(form) { 
    password1 = form.password.value; 
    password2 = form.confirmpassword.value; 

    // If password not entered 
    if (password1 == '') 
        alert ("Please enter Password"); 
          
    // If confirm password not entered 
    else if (password2 == '') 
        alert ("Please enter confirm password"); 
          
    // If Not same return False.     
    else if (password1 != password2) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        alert("Password Match") 
        return true; 
    } 
} 