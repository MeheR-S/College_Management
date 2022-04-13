import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";

const AddSubject = () => {
  const [subjectName, setSubjectName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const navigateTo = useNavigate();

  const save = () => {
    if (subjectName.length == 0) {
      toast.warning("Subject name can not be Empty!...");
    } else if (departmentId.length == 0) {
      toast.warning("Departmet Name can not be Empty!...");
    } else {
      const body = {
        subjectName,
        department: { departmentId },
      };
      const url = `${URL}/admin/add/subject`;
      axios.post(url, body).then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          toast.success("New Subject Added Successfully!...");
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
                  <h2>Add New Subject</h2>
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setSubjectName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>Subject Name</label>
                  </div>
                </div>
                <div className="col"></div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input
                      onChange={(e) => {
                        setDepartmentId(e.target.value);
                      }}
                      type="number"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>Department ID</label>
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

export default AddSubject;
