let employees=[];
let passSalary=30000;
let passAge=30;
let Years_of_Experience=3;

    let yourname=prompt("Enter Your name");
    alert("Mr/Ms "+yourname+ " Welcome to Employee Manager portel")
// store data
function employees_details(Name,Age,Years_of_Experience,Salary,Department,Location){
    Age=Number(Age);
     if(Age>passAge){
        alert("Sorry! you are not elible due to age limt")
        return false;
       }
    Years_of_Experience=Number(Years_of_Experience);
    Salary=Number(Salary);
    if(Salary>passSalary){
         alert("Sorry! you are not elible due to requsting High salary limt");
         return false;
    }
  
    let employee={
        Name:Name.trim(),
        Age:Age,
        Years_of_Experience:Years_of_Experience,
        Salary:Salary,
        Department:Department,
        Location:Location,
    }
    employees.push(employee);
}

//validation
document.getElementById("manager").addEventListener("submit",function(e){
    e.preventDefault();

    // Input
    let Name=document.getElementById("empname").value;
    let Age=document.getElementById("empage").value;
    let Years_of_Experience=document.getElementById("empexp").value;
    let Salary=document.getElementById("empsalary").value;
    let Department=document.getElementById("empdept").value;
    let Location=document.getElementById("emplocation").value;

    // checking
    if(Name==="" ) {
        alert(" Name can't be empty");
        return;
    }
    if(Age===""){
        alert(" Age can't be empty ");
        return;
    }
     if(Years_of_Experience===""){
        alert(" Years_of_Experience can't be empty");
        return;
    }
     if(Salary===""){
        alert(" Expected Salary must be entered");
        return;
    }
     if(Department===""){
        alert(" Department needs to be selected ");
        return;
    }
     if(Location===""){
        alert(" Location needs to be selected ");
        return;
    }
    let result = employees_details(Name,Age,Years_of_Experience,Salary,Department,Location);
   if(result !== false){
    alert("Details added successfully!");
    this.reset()
   }
    alert("Thanks for Added your details ")
});
 

// Diplay output
const emplist=()=>{
    let output=""
    let total_salary = 0;

        let json = JSON.stringify(employees);
        console.log("Employees in JSON format:", json);
    
       for (let employee of employees){
        let{Name,Age,Years_of_Experience,Salary,Department,Location}=employee;

        total_salary+=Number(Salary)

        let status=(Years_of_Experience>3)? "Senior" : "Junior";

        let statusclr=(status === "Senior")? "#f80707": "#6c1dff";

        output+=`<p><b>Name:</b>${Name.toUpperCase()} |
                    <b> Age: </b>${Age} |
                    <b>Years_of_Experience:</b> ${Years_of_Experience} | 
                    <b>Salary:</b>${Salary} | 
                    <b>Department:</b>${Department}|
                    <b> Location:</b>${Location} | 
                    <b> Degination:</b><span style="color:${statusclr};">${status}</span> </P>`
    }

   if (employees.length > 0) {
        output += `<hr><h3>Total Salary Expense: ₹${total_salary}</h3>`;
        
    }

    document.getElementById("output").innerHTML=output;    
    
    
}
function getapi(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(good){
        return good.json();
    })
    .then(function(data){
        let apiname=data.slice(0,5);
        let apidetails= " "
        apiname.forEach(function(user) {
            apidetails += `Name: ${user.name} | Email: ${user.email} | Zip: ${user.address.zipcode}\n`;
        });
        document.getElementById("apiprint").innerText=apidetails;
    });
    

}
    
// Delete 
document.getElementById("delete").addEventListener("click", function() {
        document.getElementById("output").innerHTML = " ";
        
        alert("All details are deleted successfully.");
    }
);
function deletelast(){
    employees.pop();
    emplist()
}
function deletefirst(){
    employees.shift();
    emplist();
}

function showListWithLoading() {
    document.getElementById("output").innerHTML = ` 😀 Your list geting ready!! please wait!!`;
    setTimeout(function() {
        emplist();
    }, 5000);
}


