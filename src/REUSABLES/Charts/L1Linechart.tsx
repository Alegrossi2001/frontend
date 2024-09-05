import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


//Current metrics for everyone are:
//Tasks completed
//Tasks pending
//Score

export interface L1LinechartData {
    tasksCompleted: number;
    tasksPending: number;
    score: number;
    day: number;
}

interface L1LinechartProps {
    data: L1LinechartData[];
}

export default function L1LineChart({ data }: L1LinechartProps) {

    const tasksCompleted = data.map(d => d.tasksCompleted);
    const tasksPending = data.map(d => d.tasksPending);
    const score = data.map(d => d.score);
    const day = data.map(d => d.day);

    const series = React.useMemo(() => [
        { data: tasksCompleted, label: 'Tasks Completed' },
        { data: tasksPending, label: 'Tasks Pending' },
        { data: score, label: 'Score' },
    ], [tasksCompleted, tasksPending, score]);

    if (series.some(s => !s.data?.length)) {
        return <div>No data available</div>;
    }

    return (
        <LineChart
            width={500}
            height={300}
            series={series}
            xAxis={[{ scaleType: 'point', data: day }]}
        />
    );
}
