import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";
import AddFeedBack from "./components/AddFeedBack";
import EditFeedBack from "./components/EditFeedBack";
import DeleteFeedBack from "./components/DeleteFeedBack";
import ViewFeedBack from "./components/ViewFeedBack";

import ProtectedRouter from "./security/ProtectedRouter";

function App() {
  return (
    <BrowserRouter>

      <Routes>

       
        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        
        <Route element={<ProtectedRouter />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/add" element={<AddFeedBack />} />

          <Route path="/edit/:id" element={<EditFeedBack />} />

          <Route path="/delete/:id" element={<DeleteFeedBack />} />

          <Route path="/view/:id" element={<ViewFeedBack />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;