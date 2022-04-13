import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../../config";
import { Accordion } from "react-bootstrap";
import { useLocation } from "react-router";

const FacultyPaper = (props) => {
  const { state } = useLocation;
  const [facultyPaper, setFacultyPaper] = useState([]);

  //Sir's method
  //   const loadPaperList = (props) => {
  //     const { id } = state;
  //     const url = `${URL}/faculty/paperPublished/${id}`;
  //     axios.get(url).then((response) => {
  //       const result = response.data;
  //       if (result["status"] == "success") {
  //         setFacultyPaper(result["data"]);
  //       }
  //     });
  //   };

  //   useEffect(() => {
  //     loadPaperList();
  //   }, []);

  useEffect(() => {
    async function fetchPaperList() {
      try {
        const { employee } = state;
        const requestUrl = `${URL}/faculty/paperPublished/${employee.employeeId}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setFacultyPaper(responseJSON);
      } catch {}
    }

    fetchPaperList();
  }, []);

  const renderPaperList = (paper, index) => {
    return (
      <div className="list-group-item list-group-item-action list-group-item-dark">
        <div className="accordion accordion-flush" id="accordionFlushExample">
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
                Faculty Papers :
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Topic</th>
                      <td>{paper.paperTopic}</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{paper.paperDesc}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {console.log(facultyPaper)}
      {facultyPaper && facultyPaper.map(renderPaperList)}
    </div>
  );
};
export default FacultyPaper;
