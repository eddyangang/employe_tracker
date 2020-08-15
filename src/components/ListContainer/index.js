import React, { useState } from 'react'
import List from "../List"
import "./style.css"

export default function ListContainer({ employees}) {

    const [users, setusers] = useState(employees)
    const sortCategory = (category) => {
        const newArray = [];
        if (category ==="age"){
            // create a new array with just the category we are trying to sort
            for (let i = 0; i < employees.length; i++) {
                newArray.push(employees[i]["dob"][category])
            }
            newArray.sort()
            // map sorted array back to  employee object
            for (let j = 0; j < newArray.length; j++) {
                for (let i = 0; i < employees.length; i++) {
                    if (newArray[j] === employees[i]["dob"][category]){
                        newArray[j] = employees[i]
                    }
                }
            }
            setusers(newArray)

        }else {
            // in this case, email is employee name. So approach is the same. Otherwise, repeat the same approach similar AGE.
            for (let i = 0; i < employees.length; i++) {
                newArray.push(employees[i]["email"])
            }
            sort(newArray, category)
        }
        
    }
    
    const sort = (array, category) => {
        array.sort()
        for (let j = 0; j < array.length; j++) {
            for (let i = 0; i < employees.length; i++) {
                if (array[j] === employees[i][category]){
                    array[j] = employees[i]
                }
            }
        }
        setusers(array)
    }

    return (
    <table className="table table-striped table-light">
        <thead>
            <tr>
                <th scope="col">Photo</th>
                <th scope="col"><button className="btn btn-secondary" onClick={()=>sortCategory("email")} name="name"><i className="fas fa-sort"></i></button> Full Name</th>
                <th scope="col"><button className="btn btn-secondary" onClick={()=>sortCategory("email")}
                name="email"><i className="fas fa-sort"></i></button> Email</th>
                <th scope="col">Phone</th>
                <th scope="col"><button className="btn btn-secondary" onClick={()=>sortCategory("age")} name="age"><i className="fas fa-sort"></i></button> Age</th>
            </tr>
        </thead>
        <tbody>
            <List employees={users}/>
        </tbody>
    </table>
    )
}
