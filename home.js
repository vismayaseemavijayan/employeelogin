username=localStorage.getItem('USERNAME')
console.log(username);
head1.innerHTML=`Welcome ${username}`


function addEmployee(){
    employee={
    id:empid.value,
    name:empname.value,
    addr:empaddr.value,
    desg:empdesg.value,
    exp:empexp.value,
    sal:empsal.value
 }
 if(employee.id=="" || employee.name=="" || employee.addr=="" || employee.desg=="" || employee.exp=="" || employee.sal==""){
    alert("please fill the missing field")
 }
else{
    if(employee.id in localStorage){
        alert("user already exist")
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("employee added successfully")
    }

}
    
}

function search(){
    let key=emp.value
    let employee=JSON.parse(localStorage.getItem(key))
    result.innerHTML=`<div class="card" style="width: 18rem;">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${employee.id}</li>
    <li class="list-group-item">${employee.name}</li>
    <li class="list-group-item">${employee.addr}</li>
    <li class="list-group-item">${employee.desg}</li>
    <li class="list-group-item">${employee.exp}</li>
    <li class="list-group-item">${employee.sal}</li>
  </ul>
</div>`
}

function logout(){
    window.location="./login.html"
}