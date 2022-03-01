import React, {useState, useEffect} from 'react';
import {fetchStudents} from './studentListSlice'
import styled from 'styled-components'

const Table = styled.table`
  color: #1d1c1c;
  margin-top: 25px;
  margin-bottom: 100px;
`
const TableHeading = styled.th`
  font-style: italic;
  font-size: 1.5rem;
`
const TableRow = styled.tr`
  background-color: #dad8ed;
`
const TableData = styled.td`
  font-size: 1.5rem;
  border: solid 0.1px #dad8e1;
  padding: 2px 15px 2px 15px;
`

export function StudentList() {
  const [students, setStudents] = useState([])
  useEffect( ()=> {
    console.log("Inside Use effect")
    fetch('http://localhost:8000/students')
        .then(response => response.json())
        .then((data) => {
          console.log(typeof(data))
          setStudents(data)
        })
  }, [ ])
  return (
    <Table>
      <thead>
        <tr>
          <TableHeading>First Name</TableHeading>
          <TableHeading>Last Name</TableHeading>
          <TableHeading>Gender</TableHeading>
          <TableHeading>Department</TableHeading>
          <TableHeading>Level</TableHeading>
        </tr>
      </thead>
      <tbody>
        {students.map((student)=>  (
            <TableRow>
              <TableData>{student.firstName}</TableData>
              <TableData>{student.lastName}</TableData>
              <TableData>{student.gender}</TableData>
              <TableData>{student.department}</TableData>
              <TableData>{student.level}</TableData>
            </TableRow>
          )
        )}
      </tbody>
    </Table>
  );
}
