import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const styles = {
  icons: {
    cursor: "pointer",
    width: "200px",
    height: "200px",
    margin: "5px",
  },
};

const Add = () => {
  return (
    <div>
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-2">
          <h1>Add options</h1>
        </div>
        <div className="col">
          <table className="table table-borderless">
            <tr>
              <td>
                <div className="col mb-3">
                  <Link to="/admin/add/employee">
                    <img
                      style={styles.icons}
                      src={require("../../assets/StaffMember.png")}
                      className="rounded float-start"
                    />
                  </Link>
                </div>
              </td>
              <td>
                <div className="col mb-3">
                  <Link to="admin/add/student">
                    <img
                      style={styles.icons}
                      src={require("../../assets/Student.png")}
                      className="rounded float-start"
                    />
                  </Link>
                </div>
              </td>
              <td>
                <div className="col mb-3">
                  <Link to="/admin/add/department">
                    <img
                      style={styles.icons}
                      src={require("../../assets/StaffMember.png")}
                      className="rounded float-start"
                    />
                  </Link>
                </div>
              </td>
              <td>
                <div className="col mb-3">
                  <Link to="/admin/add/subject">
                    <img
                      style={styles.icons}
                      src={require("../../assets/Subject.png")}
                      className="rounded float-start"
                    />
                  </Link>
                </div>
              </td>
            </tr>
            <tr>
              <td>Add Employee</td>
              <td>Add Student</td>
              <td>Add Department</td>
              <td>Add Subject</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="row"></div>
    </div>
    // </div>
  );
};
export default Add;
