import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../config";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddletName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [salary, setSalary] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const navigateTo = useNavigate();

  const save = () => {
    if (firstName.length === 0) {
      toast.warning("First name field can not be empty");
    } else if (middleName.length === 0) {
      toast.warning("Middle name field can not be empty");
    } else if (lastName.length === 0) {
      toast.warning("Last name field can not be empty");
    } else if (email.length === 0) {
      toast.warning("email field can not be empty");
    } else if (password.length === 0) {
      toast.warning("Password field can not be empty");
    } else if (contactNo.length === 0) {
      toast.warning("Contact no. field can not be empty");
    } else if (designation.length === 0) {
      toast.warning("Designation field can not be empty");
    } else if (dob.length === 0) {
      toast.warning("Date of birth field can not be empty");
    } else if (gender.length === 0) {
      toast.warning("Gender field can not be empty");
    } else if (hireDate.length === 0) {
      toast.warning("Hire Date field can not be empty");
    } else if (salary.length === 0) {
      toast.warning("Salary field can not be empty");
    } else if (workExperience.length === 0) {
      toast.warning("Work Experience field can not be empty");
    } else {
      const body = {
        firstName,
        middleName,
        lastName,
        email,
        password,
        contactNo,
        designation,
        dob,
        gender,
        hireDate,
        salary,
        workExperience,
        departmentId,
      };

      const url = `${URL}/admin/add/employee`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          toast.success("New Employee Added Successfully");
          navigateTo("/home");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  const cancel = () => {
    navigateTo("/home");
  };

  return (
    <div>
      <div className="container">
        <div className="form">
          <div className="row">
            <div className="col-2">Menus</div>
            <div className="col">
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <h2>Add New Employee</h2>
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>First Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setMiddletName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>Middle Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>Last Name</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>
                      <i className="fas fa-envelope"></i>
                      <b />
                      <b />
                      <b />
                      Email address <b></b>
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <label>
                      <i className="fas fa-key"></i>
                      <b />
                      <b />
                      <b />
                      Password
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                      type="date"
                      className="form-control"
                      id="floatingDob"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingDob">
                      <i className="fas fa-birthday-cake"></i>
                      <b></b>
                      <b></b>
                      <b></b>
                      Date of Birth
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setHireDate(e.target.value);
                      }}
                      type="date"
                      className="form-control"
                      id="floatingHireDate"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingHireDate">
                      <i className="far fa-calendar-alt"></i>
                      <b></b>
                      <b></b>
                      <b></b>
                      Hire Date
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <select
                      onChange={(e) => {
                        const selectedGender = e.target.value;
                        setGender(selectedGender);
                      }}
                      className="form-select"
                      id="floatingSelectGender"
                      aria-label="Floating label select example"
                    >
                      <option defaultValue="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label htmlFor="floatingSelectGender">Gender</label>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <div className="form-floating mb-3">
                        <select
                          onChange={(e) => {
                            const selectedDesignation = e.target.value;
                            setDesignation(selectedDesignation);
                          }}
                          className="form-select"
                          id="floatingSelectDesignation"
                          aria-label="Floating label select example"
                        >
                          <option value="Admin">Admin</option>
                          <option defaultValue="Faculty">Faculty</option>
                          <option value="Librarian">Librarian</option>
                          <option value="TPO">TPO</option>
                        </select>
                        <label htmlFor="floatingSelectDesignation">
                          Designation
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <i className="fas fa-phone-alt"></i>
                  <b></b>
                  <b></b>
                  <b></b>
                  Contact No.
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      +91
                    </span>
                    <input
                      onChange={(e) => {
                        setContactNo(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      placeholder="9876543210"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setSalary(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      placeholder="Password"
                    />
                    <label>
                      <i className="fas fa-wallet"></i>
                      <b></b>
                      <b></b>
                      <b></b>
                      Salary
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setWorkExperience(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      placeholder="Password"
                    />
                    <label>
                      <i className="fas fa-chart-line"></i>
                      <b></b>
                      <b></b>
                      <b></b>
                      Work Experience
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        const deptId = e.target.value;
                        console.log(deptId);
                        setDepartmentId(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      id="floatingDepartmentId"
                      placeholder="name@example.com"
                    />
                    <label>
                      <i className="fas fa-building"></i>
                      <b></b>
                      <b></b>
                      <b></b>
                      Department ID
                    </label>
                  </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            onClick={save}
            className="btn btn-primary me-md-2"
            type="button"
          >
            Save
          </button>
          <button onClick={cancel} type="button" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
