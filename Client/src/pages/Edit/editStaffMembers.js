import axios from "axios";
import { useEffect, useState } from "react";
import { Link as button, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../../config";
import { useLocation } from "react-router";
import StaffMemberDetails from "../../components/staffMemberDetails";

const EditStaffMember = () => {
  const { state } = useLocation();
  // const { employee } = state;

  const [employeeId, setEmployeeId] = useState(`${state.emp.employeeId}`);
  const [firstName, setFirstName] = useState(`${state.emp.firstName}`);
  const [middleName, setMiddleName] = useState(state.emp.middleName);
  const [lastName, setLastName] = useState(state.emp.lastName);
  const [email, setEmail] = useState(state.emp.email);
  const [password, setPassword] = useState(state.emp.password);
  const [contactNo, setContactNo] = useState(state.emp.contactNo);
  const [designation, setDesignation] = useState(state.emp.designation);
  const [dob, setDob] = useState(state.emp.dob);
  const [gender, setGender] = useState(state.emp.gender);
  const [hireDate, setHireDate] = useState(state.emp.hireDate);
  const [salary, setSalary] = useState(state.emp.salary);
  const [workExperience, setWorkExperience] = useState(
    state.emp.workExperience
  );
  const [departmentId, setDepartmentId] = useState(
    state.emp.department.departmentId
  );

  const navigateTo = useNavigate();
  // useEffect(() => {
  //   const { emp } = state;
  //   setFirstName(`${state.firstName}`);
  //   setMiddleName(state.middleName);
  //   setLastName(state.laststName);
  //   setEmail(state.email);
  //   setContactNo(state.contactNo);
  //   setDesignation(state.designation);
  //   setDob(state.dob);
  //   setGender(state.gender);
  //   setHireDate(state.hireDate);
  //   setSalary(state.salary);
  //   setWorkExperience(state.workExperience);
  //   setDepartmentId(state.departmentId);
  //   console.log(firstName);
  // }, []);

  const update = () => {
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
      department: { departmentId },
    };

    const url = `${URL}/admin/update/${employeeId}`;
    axios.put(url, body).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        toast.success("Employee Updated Successfully");
        navigateTo("/admin/allStaffMembers");
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const cancel = () => {
    navigateTo("/admin/allStaffMembers");
  };

  // const getEmployee = async () => {
  //   const response = await axios.get(`${URL}/admin/faculty/${employeeId}`);
  //   setEmployeeData(response.data.data);
  // };

  useEffect(() => {
    // console.log(employee);
    console.log(state.emp);
    console.log(state.emp.department.departmentId);
    //getEmployee();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col">
            <div className="form">
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      First Name
                    </label>
                    <input
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder={firstName}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      Middle Name
                    </label>
                    <input
                      onChange={(e) => {
                        setMiddleName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder={middleName}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      Last Name
                    </label>
                    <input
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder={lastName}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  <i className="fas fa-envelope"></i>
                  Email Address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder={email}
                />
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      <i className="fas fa-birthday-cake"></i>
                      Date of Birth
                    </label>
                    <input
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                      type="date"
                      className="form-control"
                      placeholder={dob}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      <i className="far fa-calendar-alt"></i>
                      Hire Date
                    </label>
                    <input
                      onChange={(e) => {
                        setHireDate(e.target.value);
                      }}
                      type="date"
                      className="form-control"
                      placeholder={dob}
                    />
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

              <div className="row">
                <div className="col-4">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      <i className="fas fa-phone-alt"></i>
                      Contact No
                    </label>
                    <input
                      onChange={(e) => {
                        setContactNo(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      placeholder={contactNo}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      <i className="fas fa-wallet"></i>
                      Salary
                    </label>
                    <input
                      onChange={(e) => {
                        setSalary(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      placeholder={salary}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      <i className="fas fa-chart-line"></i>
                      Work Experience
                    </label>
                    <input
                      onChange={(e) => {
                        setWorkExperience(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder={workExperience}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="" className="label-control">
                      <i className="fas fa-building"></i>
                      Department ID
                    </label>
                    <input
                      onChange={(e) => {
                        setDepartmentId(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      placeholder={departmentId}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <button
                  onClick={update}
                  className="btn btn-secondary float-start"
                >
                  Save
                </button>
                <button
                  onClick={cancel}
                  className="btn btn-secondary float-end"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStaffMember;
