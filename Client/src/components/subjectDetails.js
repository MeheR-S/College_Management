import axios from "axios";
import { URL } from "../config";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import { formatDate, formatDateAgo } from "../utils";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

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

const SubjectDetails = () => {
  const [subjectData, setSubjectData] = useState();

  const navigateTo = useNavigate();

  const url = `${URL}/subject/allSubjects`;

  const loadSubjectDetails = async () => {
    const response = await axios.get(url);
    setSubjectData(response.data.data);
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

  const deleteSubject = (id) => {
    axios.delete(`${URL}/admin/delete/subject/${id}`).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        toast.success("Subject Deleted Successfully!...");
        navigateTo("/admin/allSubjects");
      } else {
        toast.error("Subject not DELETED!...");
      }
    });
  };

  const fetchGenderLogo = (gender) => {
    if (gender == "Male") {
      return <img style={styles.gender} src={require("../assets/Male.png")} />;
    } else if (gender == "Female") {
      return (
        <img style={styles.gender} src={require("../assets/Female.png")} />
      );
    } else {
      return <img style={styles.gender} src={require("../assets/Other.png")} />;
    }
  };

  const renderAccordion = (subject, index) => {
    return (
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
          <Accordion defaultActiveKey={index} flush>
            <Accordion.Item eventKey={subject}>
              <Accordion.Header>
                <div className="col">
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-book-open"></i>
                    </div>
                    <div className="col-1">
                      <h6>{subject.subjectId}.</h6>
                    </div>
                    <div className="col">
                      <h6>{subject.subjectName}</h6>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/admin/delete/subject/${subject.subjectId}`}>
                    <img
                      onClick={() => {
                        deleteSubject(subject.subjectId);
                      }}
                      style={styles.icons}
                      src={require("../assets/Delete.png")}
                    />
                  </Link>
                </div>
              </Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    );
  };

  useEffect(() => {
    loadSubjectDetails();
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
                  Manage <b>Subjects</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <Link
                  href="#addEmployeeModal"
                  className="btn btn-outline-dark"
                  data-toggle="modal"
                  to={"/admin/add/subject"}
                >
                  {/* <i className="material-icons">&#xE147;</i>{" "} */}
                  <i className="fas fa-user-plus"></i>
                  <span>Add New Subject</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>{subjectData && subjectData.map(renderAccordion)}</div>
      {/* {console.log(employeeData)} */}
    </div>
  );
};

export default SubjectDetails;
