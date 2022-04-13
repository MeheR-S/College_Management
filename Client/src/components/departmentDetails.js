import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { URL } from "../config";
import { toast } from "react-toastify";

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
};

const DepartmentDetails = () => {
  const [departmentData, setDepartmentData] = useState([]);
  const navigateTo = useNavigate();
  const url = `${URL}/departments/all`;

  const loadDepartmentDetails = async () => {
    const response = await axios.get(url);
    setDepartmentData(response.data.data);
  };

  const deleteDepartment = (id) => {
    axios.delete(`${URL}/admin/deleteDepartment/${id}`).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        toast.success("Department Deleted Successfully!...");
        navigateTo("/admin/allStaffMembers");
      } else {
        toast.error("Department not DELETED!...");
      }
    });
  };

  const displaySubjects = (subjectList) => {
    if (subjectList.length == 0) {
      return <li style={{ color: "red" }}>No Subjects Assigned Yet!...</li>;
    } else {
      return subjectList.map((subject) => {
        return <li>{subject.subjectName}</li>;
      });
    }
  };

  useEffect(() => {
    loadDepartmentDetails();
  }, []);

  const renderAccordion = (department, index) => {
    return (
      <div className="row">
        <div className="col-3"> </div>
        <div className="col">
          <Accordion defaultActiveKey={index} flush>
            <Accordion.Item eventKey={department}>
              <Accordion.Header>
                <div className="col">
                  <h6>
                    {department.departmentId}. {department.departmentName}
                  </h6>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/admin/edit-department`}>
                    <img
                      onClick={() => {
                        navigateTo("/admin/edit-department");
                      }}
                      style={styles.icons}
                      src={require("../assets/Edit.png")}
                    />
                  </Link>
                </div>
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/admin/delete/department/${department.departmentId}`}
                  >
                    <img
                      onClick={() => {
                        deleteDepartment(department.departmentId);
                      }}
                      style={styles.icons}
                      src={require("../assets/Delete.png")}
                    />
                  </Link>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="fas fa-user-tie"></i>
                    Head of the Department : {department.hod}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-users"></i>
                    No. of First Year Students : {department.firstYearStudents}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-users"></i>
                    No. of Second Year Students :{" "}
                    {department.secondYearStudents}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-users"></i>
                    No. of Third Year Students : {department.thirdYearStudents}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-users"></i>
                    No. of Firth Year Students : {department.forthYearStudents}
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-book-open"></i>
                    Subjects :<ul>{displaySubjects(department.subjects)}</ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Departments</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Link
                  href="#addEmployeeModal"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  to={"/admin/add/department"}
                >
                  {/* <i className="material-icons">&#xE147;</i>{" "} */}
                  <i className="fas fa-plus-circle"></i>
                  <span>Add New Department</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{departmentData && departmentData.map(renderAccordion)}</div>
    </div>
  );
};

export default DepartmentDetails;
