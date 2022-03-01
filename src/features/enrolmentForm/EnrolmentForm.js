import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

const Wrapper = styled.form`
  width: 450px;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 35px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: solid 2px #aaa;
  border-radius: 5px;
  ${(props) =>
    props.small &&
    css`
      display: flex;
      flex-direction: row;
      width: 100%;
      margin: auto;
    `}
`;

const Field = styled.input`
  // margin-top: 25px;
  background-color: #eff7ff;
  height: 30px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 10px;
  border-radius: 5px;
  ${(props) =>
    props.last &&
    css`
      margin-bottom: 25px;
    `}
`;
const Label = styled.label`
  font-size: 1rem;
  margin-left: 20px;
  margin-top: 25px;
`;
const Select = styled.select`
  padding-left: 20px;
  margin-right: 20px;
  margin-left: 20px;
  height: 25px;
  background-color: #eff7ff;
`;
const Button = styled.button`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 20%;
  background-color: #05224b;
  border-radius: 4px;
  color: #eff7ff;
  //height: 25px;
  font-size: 1rem;
`;
const Title = styled.h5`
  margin: 0;
  padding: 10px 10px 10px 25px;
  border-bottom: solid 1px black;
  background-color: #eff7ff;
`;

const levelsOptions = [
  {
    value: "",
    label: "Select Level",
  },
  {
    value: "level 1",
    label: "Level 1",
  },
  {
    value: "level 2",
    label: "Level 2",
  },
  {
    value: "level 3",
    label: "Level 3",
  },
  {
    value: "level 4",
    label: "Level 4",
  },
];
const selectLevel = levelsOptions.map(({ value, label }) => (
  <option key={label} value={value}>
    {" "}
    {label}
  </option>
));
const departmentOptions = [
  {
    value: "",
    label: "Select Department",
  },
  {
    value: "Mathematics ",
    label: "Maths",
  },
  {
    value: "Physics",
    label: "Physics",
  },
  {
    value: "Chemistry",
    label: "Chemistry",
  },
  {
    value: "Biology",
    label: "Biology",
  },
];
const selectDepartment = departmentOptions.map(({ value, label }) => (
  <option key={label} value={value}>
    {" "}
    {label}
  </option>
));

export function Form() {
  const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    department: "",
    level: "",
  };
  const [formData, setData] = useState(initialState);
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(formData)
    fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => {
        history.push("/");
      })
      .catch((e) => console.error(e));
  };
  const { firstName, lastName, gender, department, level } = initialState;
  return (
    <Wrapper onSubmit={onSubmit}>
      <Title>Enrolment Form</Title>
      <Label htmlFor="firstName">First Name</Label>
      <Field
        type="text"
        required
        id="firstName"
        name="firstName"
        placeholder="Enter first name"
        defaultValue={firstName}
        onChange={handleChange}
      ></Field>
      <Label htmlFor="lastName">Last Name</Label>
      <Field
        type="text"
        required
        id="lastName"
        name="lastName"
        placeholder="Enter last name"
        defaultvalue={lastName}
        onChange={handleChange}
      ></Field>
      <div>
        <br></br>
        <Label>Gender</Label>
        <br></br>
        <Label htmlFor="male">Male</Label>
        <Field
          id="male"
          required
          type="radio"
          name="gender"
          value="M"
          defaultchecked={gender === "male"}
          onChange={handleChange}
        ></Field>
        <Label htmlFor="female">Female</Label>
        <Field
          id="female"
          required
          type="radio"
          name="gender"
          value="F"
          defaultchecked={gender === "female"}
          onChange={handleChange}
        ></Field>
      </div>
      <Label>Department</Label>
      <Select name="department" Value={department} onChange={handleChange}>
        {selectDepartment}
      </Select>
      <Label>Level</Label>
      <Select name="level" defaultvalue={level} onChange={handleChange}>
        {selectLevel}
      </Select>
      <Button>Submit</Button>
    </Wrapper>
  );
}
