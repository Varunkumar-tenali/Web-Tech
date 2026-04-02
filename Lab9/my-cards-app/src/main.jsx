import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StudentList from "./StudentList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentList />
  </StrictMode>
);
