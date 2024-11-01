function Employee()
{
    const employee={id:111,name:"Thiru",Salary:10000.00}
    return(
        <>
        <h1> EmployeeDetailes</h1>
        <p> employeeId : {employee.id}</p>
        <p> employeeName : {employee.name}</p>
        <p> employeeSalary : {employee.Salary}</p>
        
        </>

    )
}
export default Employee