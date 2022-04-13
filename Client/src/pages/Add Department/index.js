import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [hod, setHod] = useState("");
  const [firstYearStudents, setFirstYearStudents] = useState("");
  const [secondYearStudents, setSecondYearStudents] = useState("");
  const [thirdYearStudents, setThirdYearStudents] = useState("");
  const [forthYearStudents, setForthYearStudents] = useState("");
  const [noOfFaculty, setNoOfFaculty] = useState("");

  const navigateTo = useNavigate();

  const save = () => {
    if (departmentName.length === 0) {
      toast.warning("Department name field can not be empty");
    } else if (hod.length === 0) {
      toast.warning("HOD name field can not be empty");
    } else if (firstYearStudents.length === 0) {
      toast.warning("first Year Student Year Students field can not be empty");
    } else if (secondYearStudents.length === 0) {
      toast.warning("Second Year Student field can not be empty");
    } else if (thirdYearStudents.length === 0) {
      toast.warning("Third Year Student field can not be empty");
    } else if (forthYearStudents.length === 0) {
      toast.warning("Forth Year Student field can not be empty");
    } else if (noOfFaculty.length === 0) {
      toast.warning("No. of faculty Year Student field can not be empty");
    } else {
      const body = {
        departmentName,
        hod,
        firstYearStudents,
        secondYearStudents,
        thirdYearStudents,
        forthYearStudents,
        noOfFaculty,
      };

      const url = `${URL}/admin/department`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          toast.success("New Department Added Successfully");
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
                  <h2>Add New Department</h2>
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setDepartmentName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>
                      <i className="fas fa-building"></i>
                      <b />
                      <b />
                      <b />
                      Department Name
                    </label>
                  </div>
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setHod(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>
                      <i className="fas fa-user-tie"></i>
                      <b />
                      <b />
                      <b />
                      Head Of the Department
                    </label>
                  </div>
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setNoOfFaculty(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      id="floatingDob"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingDob">
                      <i className="fas fa-users"></i>
                      <b />
                      <b />
                      <b />
                      No. of Faculties
                    </label>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setFirstYearStudents(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      id="floatingDob"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingDob">
                      <i className="fas fa-users"></i>
                      <b />
                      <b />
                      <b />
                      First Year Students
                    </label>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setSecondYearStudents(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      id="floatingDob"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingDob">
                      <i className="fas fa-users"></i>
                      <b />
                      <b />
                      <b />
                      Second Year Students
                    </label>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setThirdYearStudents(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      id="floatingDob"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingDob">
                      <i className="fas fa-users"></i>
                      <b />
                      <b />
                      <b />
                      Third Year Students
                    </label>
                  </div>
                </div>
                <div className="col"></div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setForthYearStudents(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      id="floatingDob"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingDob">
                      <i className="fas fa-users"></i>
                      <b />
                      <b />
                      <b />
                      Forth Year Students
                    </label>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
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
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartment;
