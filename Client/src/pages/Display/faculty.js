import axios from "axios";
import { URL } from "../../config";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const styles = {
  employeeList: {
    backgroundColor: "beige",
  },
  details: {
    color: "darkgray",
  },
  icons: {
    cursor: "pointer",
    width: "20px",
    height: "20px",
    margin: "5px",
  },
  gender: {
    cursor: "pointer",
    width: "30px",
    height: "30px",
    margin: "5px",
  },
  text: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
};

const Faculty = () => {
  const [employeeData, setEmployeeData] = useState();

  const navigateTo = useNavigate();

  const { designation } = useParams();

  const loadFacultyData = async () => {
    const response = await axios.get(
      `${URL}/admin/employeeByDesignation/faculty`
    );
    setEmployeeData(response.data);
  };

  const displayPapers = (paperList) => {
    if (paperList.length == 0) {
      return <li style={{ color: "red" }}>No Paper Published Yet!...</li>;
    } else {
      return paperList.map((paper) => {
        return (
          <div>
            <table>
              <tr>
                <td>
                  <h6>Topic : </h6>
                </td>
                <td>{paper.paperTopic}</td>
              </tr>
              <tr>
                <td>
                  <h6>Description : </h6>
                </td>
                <td>{paper.paperDesc}</td>
              </tr>
            </table>
          </div>
        );
      });
    }
  };

  const deleteEmployee = (id) => {
    axios.delete(`${URL}/admin/delete/employee/${id}`).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        toast.success("Employee Deleted Successfully!...");
        navigateTo("/admin/allStaffMembers");
      } else {
        toast.error("Employee not DELETED!...");
      }
    });
  };

  const fetchGenderLogo = (gender) => {
    if (gender == "Male") {
      return (
        <img style={styles.gender} src={require("../../assets/Male.png")} />
      );
    } else if (gender == "Female") {
      return (
        <img style={styles.gender} src={require("../../assets/Female.png")} />
      );
    } else {
      return (
        <img style={styles.gender} src={require("../../assets/Other.png")} />
      );
    }
  };

  const renderAccordion = (employee, index) => {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
          <Accordion defaultActiveKey={index} flush>
            <Accordion.Item eventKey={employee}>
              <Accordion.Header>
                <div className="col">
                  <div className="row">
                    <div className="col-1">
                      <h6>{employee.employeeId}.</h6>
                    </div>
                    <div className="col-1">
                      {fetchGenderLogo(employee.gender)}
                    </div>
                    <div className="col">
                      <h6>
                        {employee.firstName} {employee.middleName}{" "}
                        {employee.lastName}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/admin/edit-employee`}>
                    <img
                      onClick={() => {
                        navigateTo("/admin/edit-employee", {
                          state: { employeeDetails: employee },
                        });
                      }}
                      style={styles.icons}
                      src={require("../../assets/Edit.png")}
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/admin/delete/employee/${employee.employeeId}`}>
                    <img
                      onClick={() => {
                        deleteEmployee(employee.employeeId);
                      }}
                      style={styles.icons}
                      src={require("../../assets/Delete.png")}
                    />
                  </Link>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" style={styles.text}>
                    <i className="fas fa-briefcase"></i>

                    {employee.designation}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-envelope"></i>email : {employee.email}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-birthday-cake"></i>
                    Date of Birth : {employee.dob}
                  </li>
                  <li className="list-group-item">
                    <i className="far fa-calendar-alt"></i>
                    Hire Date : {employee.hireDate}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-wallet"></i>
                    Salary : {employee.salary}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-chart-line"></i>
                    Work Experience : {employee.workExperience}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-phone-alt"></i>
                    Contact No. : +91 {employee.contactNo}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-building"></i>
                    Department :{" "}
                    <ul>
                      <li>ID : {employee.department.departmentId}</li>
                      <li> Name : {employee.department.departmentName}</li>
                    </ul>
                  </li>
                  <li className="list-group-item">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            <i className="fas fa-file-alt"></i>
                            Paper Published : {employee.facultyPapers.length}
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            <li>{displayPapers(employee.facultyPapers)}</li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  };

  useEffect(() => {
    loadFacultyData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Employees</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Link
                  href="#addEmployeeModal"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  to={"/admin/add/employee"}
                >
                  {/* <i className="material-icons">&#xE147;</i>{" "} */}
                  <i className="fas fa-user-plus"></i>
                  <span>Add New Employee</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Group By
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link to="/admin/allStaffMembers" className="dropdown-item">
                All Employee
              </Link>
            </li>
            <li>
              <Link to="/admin/all/admins" className="dropdown-item">
                Admin
              </Link>
            </li>
            <li>
              <Link to="/admin/all/faculties" className="dropdown-item active">
                Faculty
              </Link>
            </li>
            <li>
              <Link to="/admin/all/TPOs" className="dropdown-item">
                TPO
              </Link>
            </li>
            <li>
              <Link to="/admin/all/librarians" className="dropdown-item">
                Librarian
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div>{employeeData && employeeData.map(renderAccordion)}</div>

      {employeeData && console.log(employeeData)}
    </div>
  );
};

export default Faculty;
