import React from "react";
interface PeopleProps {
    employees: [
       { emp_no: string,
        first_name: string,
        last_name: string,
        birth_date:string,}
    ] 
}
 class People extends React.Component<PeopleProps>{
    render () {
        const {employees} = this.props;
        const employees_rows = employees.map((emp,index) => {
            return <tr key={index}> <td>{index +1}</td> <td>{emp.emp_no}</td> 
            <td>{emp.first_name}</td> 
            <td>{emp.last_name}</td>
            <td>{emp.birth_date}</td></tr>
          }) ;;

          return <table>
  <thead>
    <tr>
    <th>#</th>
    <th>emp_no</th>
      <th>first_name</th>
      <th>last_name</th>
      <th>birth_date</th>
    </tr>
  </thead>
  <tbody>
    {employees_rows}
  </tbody>
</table>; 
    }

 }
 export default People;