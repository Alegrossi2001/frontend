import { Typography } from "@mui/material";
import L1LineChart, { L1LinechartData } from "../../REUSABLES/Charts/L1Linechart";
import Grid from "@mui/material/Grid2";
import Counter from "../../REUSABLES/Counter";
import { useSelector } from "react-redux";
import { RootState } from "../../REDUX/Reducer";

export default function PerformanceDashboard() {

    const totalScore = useSelector((state: RootState) => state.user.points);

    const data: L1LinechartData[] = [
        { day: 1, tasksCompleted: 13, tasksPending: 1, score: 41 },
        { day: 2, tasksCompleted: 8, tasksPending: 4, score: 53 },
        { day: 3, tasksCompleted: 10, tasksPending: 2, score: 33 },
        { day: 4, tasksCompleted: 3, tasksPending: 7, score: 76 },
    ];


    const tasksCompleted = () => {
        return data.map(d => d.tasksCompleted).reduce((sum, current) => sum + current, 0);
    }

    const tasksPending = () => {
        return data.map(d => d.tasksPending).reduce((sum, current) => sum + current, 0);
    }

    const feedbackReceived = 10;
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <L1LineChart data={data} />
                </Grid>
                <Grid size={2} container justifyContent="center">
                    <Counter count={tasksCompleted()} label="Tasks completed" />
                    <Counter count={tasksPending()} label="Tasks pending" />
                </Grid>
                <Grid size={2} container justifyContent="center">
                    <Counter count={totalScore ?? 0} label="My Score" />
                    <Counter count={feedbackReceived} label="Feedback received" />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography variant="h5">Active Challenges:</Typography>
                    <p>Here I will have a table with the challenges assigned by my manager, such as a specific streak or a number of commits</p>
                </Grid>
                <Grid size={6}>
                    <Typography variant="h5">My Analytics</Typography>
                    <p>Here I will have a table with specific analytics related to my job, such as sales performance for sales and commits for devs</p>
                </Grid>
            </Grid>

        </div>
    );
}