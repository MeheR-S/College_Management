import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { URL } from "../config";
import Home from "../pages/Home";

const EditDetails = () => {
  const { state } = useLocation();
  const { studentDetails } = state;
  const [firstName, setFirst] = useState(`${studentDetails.firstName}`);
  const [lastName, setLastName] = useState(`${studentDetails.lastName}`);
  const [email, setEmail] = useState(`${studentDetails.email}`);
  const [password, setPassword] = useState(`${studentDetails.password}`);
  const [middleName, setMiddleName] = useState(`${studentDetails.middleName}`);
  const [contactNo, setContactNo] = useState(`${studentDetails.contactNo}`);
  const [addressLine1, setAddressLine1] = useState(
    `${studentDetails.addressLine1}`
  );
  const [addressLine2, setAddressLine2] = useState(
    `${studentDetails.addressLine2}`
  );
  const [zipId, setZipId] = useState(`${studentDetails.zipId}`);
  const [dateOfBirth, setDateOfBirth] = useState(
    `${studentDetails.dateOfBirth}`
  );

  console.log(firstName);
  const styles = {
    bar: {
      backgoundColor: "black",
      height: "80px",
      display: "flex",
    },
  };

  // used to navigate from one component to another
  const navigate = useNavigate();
  const { enrollmentNo } = sessionStorage;

  const editStudent = () => {
    const body = {
      firstName,
      lastName,
      email,
      password,
      middleName,
      contactNo,
      addressLine1,
      addressLine2,
      zipId,
      dateOfBirth,
    };

    const url = `${URL}/student/editStudentDetails/${enrollmentNo}`;
    console.log({ url });
    axios.patch(url, body).then((response) => {
      // get the data from the response
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Successfully edited student");

        // navigate to the signin page
        navigate("/personalDetails");
      } else {
        toast.error(result["error"]);
      }
    });
  };
  return (
    <div>
      <div>
        <div>
          <Home />
        </div>
        <h1 className="title">EditStudent</h1>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  First Name
                </label>
                <input
                  onChange={(e) => {
                    setFirst(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder={firstName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Middle Name
                </label>
                <input
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                  }}
                  type="text"
                  className="form-control-plaintext"
                  placeholder={middleName}
                />
              </div>

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

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Date of Birth
                </label>
                <input
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                  type="date"
                  className="form-control"
                  placeholder={dateOfBirth}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
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

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  placeholder="********"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Contact NO
                </label>
                <input
                  onChange={(e) => {
                    setContactNo(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder={contactNo}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Address Line1
                </label>
                <input
                  onChange={(e) => {
                    setAddressLine1(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder={addressLine1}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Address Line2
                </label>
                <input
                  onChange={(e) => {
                    setAddressLine2(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  placeholder={addressLine2}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Zip Id
                </label>
                <input
                  onChange={(e) => {
                    setZipId(e.target.value);
                  }}
                  type="number"
                  className="form-control"
                  placeholder={zipId}
                />
              </div>

              <div className="mb-3">
                <button
                  onClick={editStudent}
                  className="btn btn-secondary float-start"
                >
                  Save
                </button>
                <Link
                  to="/personalDetails"
                  className="btn btn-secondary float-end"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default EditDetails;
