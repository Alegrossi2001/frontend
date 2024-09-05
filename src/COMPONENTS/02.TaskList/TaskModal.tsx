import L1Modal from "../../REUSABLES/L1Modal";
import Grid from "@mui/material/Grid2";
import { Task } from "../../INTERFACES/Task";
//import TaskComments from "./Microcomponents/TaskComments";
import TaskDescription from "./Microcomponents/TaskDescription";
import TaskDetails from "./Microcomponents/TaskDetails";

interface TaskModalProps {
    open: boolean;
    handleClose: () => void;
    task: Task;
}
export default function TaskModal({ open, handleClose, task }: TaskModalProps) {
    return (
        <L1Modal open={open} handleClose={handleClose}>
            <Grid container>
                <Grid size={8}>
                    <TaskDescription task={task} />
                </Grid>
                <Grid size={4}>
                    <TaskDetails task={task} />
                </Grid>
            </Grid>
            {/* <Grid>
                <TaskComments />
            </Grid> */}
        </L1Modal>
    );
}