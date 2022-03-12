// var product = [
//     {
//         ProductName:"Books",
//         price:"132"
//     },
//     {
//         ProductName:"Benches",
//         price:"500"
//     },
//     {
//         ProductName:"Apples",
//         price:"400"
//     },
// ]




function Addrow(){


}

var selectedrow = null;
function readFormdata(){
    var ProductForm = {};
    ProductForm["ProductName"] = document.getElementById("ProductName").value;
    ProductForm["ProductPrice"] = document.getElementById("ProductPrice").value;
   // ProductForm["Quantity"] = document.getElementById("Quantity").value;
    return ProductForm;
}
function OnFormSubmit(){
    
    var ProductForm = readFormdata();
    if(selectedrow == null)
    {
        insertnewrow(ProductForm);
    }
    else
    {
        UpdateRow(ProductForm);
    }
    
    
}
function insertnewrow(data){
    var table = document.getElementById("Productlist").getElementsByTagName('tbody')[0]
    var newrow = table.insertRow(table.length);
    var cell1 = newrow.insertCell(0);
    cell1.innerHTML = data.ProductName;
    var cell2 = newrow.insertCell(1);
    cell2.innerHTML = data.ProductPrice;
    var cell3 = newrow.insertCell(2);
    cell3.innerHTML = '<input type="text" id="txtQuantity" onChange="UpdateInfo(this);" required >';
    var cell4 = newrow.insertCell(3);
    cell4.innerHTML = '<input type="text" class="form-control" id="txtTotal">'
    var cell5 = newrow.insertCell(4);
    cell5.innerHTML = '<button onclick=" DeleteRow()">Remove</button> '
    var cell6 = newrow.insertCell(5);
    cell6.innerHTML = '<button onclick=" EditRow(this)">Edit</button>'
    FormReset();
}
function DeleteRow(){
    var td = event.target.parentNode; 
      var tr = td.parentNode; 
      tr.parentNode.removeChild(tr);
      FormReset();
      FinalTotal();
}
function UpdateInfo(td){
    var selectedrow = td.parentElement.parentElement;
    //console.log(selectedrow.cells[2].getElementsByTagName('input')[0].value * selectedrow.cells[1].innerHTML);
    selectedrow.cells[3].getElementsByTagName('input')[0].value = selectedrow.cells[2].getElementsByTagName('input')[0].value * selectedrow.cells[1].innerHTML;

    //document.getElementById("txtTotal").value = selectedrow.cells[2].getElementsByTagName('input')[0].value * selectedrow.cells[1].innerHTML;
    //cell4.innerHTML = parseInt(cell2.innerText) * parseInt(cell3.innerHTML);
    selectedrow = null
    FinalTotal();
}
function EditRow(td){
    selectedrow = td.parentElement.parentElement;
    document.getElementById("ProductName").value = selectedrow.cells[0].innerHTML;
    document.getElementById("ProductPrice").value = selectedrow.cells[1].innerHTML;
}

function FormReset() {
  document.getElementById("myForm").reset();
}
function UpdateRow(data){
    selectedrow.cells[0].innerHTML = data.ProductName;
    selectedrow.cells[1].innerHTML = data.ProductPrice;
    selectedrow.cells[3].getElementsByTagName('input')[0].value = selectedrow.cells[2].getElementsByTagName('input')[0].value * selectedrow.cells[1].innerHTML;
    FormReset();
    FinalTotal();
}
function FinalTotal()
{
    var a=0;
    var tablerow = document.querySelector('.tbody-light').rows;
    //console.log(tablerow[0])
    //  for (var i in table) 
    //  {
    //      console.log(i);
    //  }
    for (var i = 0; i < tablerow.length; i++)
    {
        a = a + parseInt(tablerow[i].querySelector('.form-control').value);
        document.getElementById("FinalTotal").value = parseInt(a);
    }    
    //     // for (var j = 0, col; col = row.cells[j]; j++) {
    //           // do something
    //           //}
    // }
       
}
