import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/AdminHome";
import AddEmployee from "./pages/Add Employee";
import Add from "./pages/AdminOptions/Add";
import AddDepartment from "./pages/Add Department";
import StaffMemberDetails from "./components/staffMemberDetails";
import Delete from "./pages/Delete/delete";
import FacultyPaper from "./pages/FacultyPaper/facultyPaper";
import EditStaffMember from "./pages/Edit/editStaffMembers";
import AddSubject from "./pages/Add Subject";
import DepartmentDetails from "./components/departmentDetails";
import Tpo from "./pages/Display/TPO";
import Admin from "./pages/Display/admin";
import Faculty from "./pages/Display/faculty";
import Librarian from "./pages/Display/Librarian";
import Navbar from "./components/Navbar/navbar";
import SubjectDetails from "./components/subjectDetails";
import EditDepartment from "./pages/Edit/editDepartment";
import Signin from "./pages/Signin/signin";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <ul>
          <li>
            <Link to="/admin/add/employee">Add employee</Link>
          </li>
          <li>
            <Link to="/admin/add">Add</Link>
          </li>
          <li>
            <Link to="/admin/allStaffMembers">get all employee</Link>
          </li>
          <li>
            <Link to="/departments/all">get all department</Link>
          </li>
          <li>
            <Link to="/yo">Navbar</Link>
          </li>
          <li>
            <Link to="/admin/signin">SignIn</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/admin/add/employee" element={<AddEmployee />} />
          <Route path="/admin/add/department" element={<AddDepartment />} />
          <Route
            path="/admin/allStaffMembers"
            element={<StaffMemberDetails />}
          />
          <Route path="/admin/add" element={<Add />} />
          <Route path="/home" element={<Home />} />
          <Route path={`/admin/delete/employee`} element={<Delete />} />
          <Route path={`/admin/FacultyPaper/:id`} element={<FacultyPaper />} />
          <Route path={"/admin/edit-employee"} element={<EditStaffMember />} />
          <Route path={"/admin/edit-department"} element={<EditDepartment />} />
          <Route path={"/admin/add/subject"} element={<AddSubject />} />
          <Route path={"/departments/all"} element={<DepartmentDetails />} />
          <Route path={"/admin/all/tpos"} element={<Tpo />} />
          <Route path={"/admin/all/admins"} element={<Admin />} />
          <Route path={"/admin/all/faculties"} element={<Faculty />} />
          <Route path={"/admin/all/librarians"} element={<Librarian />} />
          <Route path={"/yo"} element={<Navbar />} />
          <Route path={"/admin/allSubjects"} element={<SubjectDetails />} />
          <Route path={"/admin/signin"} element={<Signin />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
