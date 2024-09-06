import TaskBoard from "../02.TaskList/TaskBoard";
import { Routes, Route } from "react-router-dom";
import PerformanceDashboard from "../04.Performance/PerformanceDashboard";
export default function ContentRouter() {
    return (
        <Routes>
            <Route path="/Tasks" element={<TaskBoard />}></Route>
            <Route path="/Performance" element={<PerformanceDashboard />}></Route>


        </Routes>
    );
}