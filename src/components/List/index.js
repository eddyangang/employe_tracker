import React from 'react'

export default function List({ employees }) {
    return (
        <>
        {employees.map((employee, i) => (
            <tr key={i}>
                <th><img src={employee.picture.large} alt=""/></th>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.dob.age}</td>
            </tr>
                
        ))}
        </>
    )
}

        // <tr>
        //     <th><img src={employee.picture.medium} alt=""/></th>
        //     <td>{employee.name.first} {employee.name.last}</td>
        //     <td>{employee.email}</td>
        //     <td>{employee.phone}</td>
        //     <td>{employee.dob}</td>
        // </tr>