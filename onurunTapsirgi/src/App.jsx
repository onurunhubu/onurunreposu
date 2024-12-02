import React, { useState } from 'react';

const Employees = () => {

  const [employees] = useState([
    {
      "id": 1,
      "name": "Frodo Baggins",
      "department": "Management",
      "role": "CEO"
    },
    {
      "id": 2,
      "name": "Samwise Gamgee",
      "department": "Management",
      "role": "CTO"
    },
    {
      "id": 3,
      "name": "Gandalf the Gray",
      "department": "Recruitment",
      "role": "Lead-recruiter"
    },
    {
      "id": 4,
      "name": "Aragorn",
      "department": "Security",
      "role": "Security officer"
    },
    {
      "id": 5,
      "name": "Legolas",
      "department": "Management",
      "role": "Office manager"
    }
  ]);

  return (
    <div>
      <h1>Employees List</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <strong>{employee.name}</strong><br />
            Department: {employee.department}<br />
            Role: {employee.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;

