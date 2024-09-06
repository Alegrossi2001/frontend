import DataTable, { TableColumn } from "react-data-table-component"
import { tempdata } from "./TEMP/data"
import { useState } from "react";
import TaskModal from "./TaskModal";
import TaskInteractionBar from "./TaskInteractionBar";
import { Task } from "../../INTERFACES/Task";
import store from "../../REDUX/00.Store/store";

const Dropdown: React.FC<{
    options: { value: Task['status']; label: string }[];
    onChange: (value: Task['status']) => void;
    value: Task['status'];
}> = ({ options, onChange, value }) => (
    <select onChange={(e) => onChange(e.target.value as Task['status'])} value={value}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

export default function TaskBoard() {

    const [getTask, setTask] = useState<Task | undefined>();
    const [data, setData] = useState<Task[]>(store.getState().tasks);
    const [open, setOpen] = useState(false);

    store.subscribe(() => {
        const state = store.getState();
        setData(state.tasks);
    });

    const OpenTask = (row: Task, event: any) => {
        const task = data.find((item) => item.id === row.id);
        setTask(task);
        setOpen(true);
    };

    const handleDropdownChange = (id: string, newValue: Task['status']) => {
        setData((prev) =>
            prev.map((row) => (row.id === id ? { ...row, status: newValue } : row))
        );
    };

    const columns: TableColumn<Task>[] = [
        {
            name: "id",
            selector: (row: { id: string; }) => row.id,
            omit: true
        },
        {
            name: 'Title',
            selector: (row: { title: string; }) => row.title,
        },
        {
            name: 'Score',
            selector: (row: { score: number; }) => row.score,
        },
        {
            name: 'Assigned To',
            selector: (row: { assignedTo: string; }) => row.assignedTo,

        },
        {
            name: 'Assigned By',
            selector: (row: { assignedBy: string; }) => row.assignedBy,
        },
        {
            name: 'Status',
            selector: (row: { status: 'not started' | 'in progress' | 'completed' | 'blocked'; }) => row.status,
            cell: (row) => (
                <Dropdown
                    options={[
                        { value: 'not started', label: 'Not Started' },
                        { value: 'in progress', label: 'In Progress' },
                        { value: 'completed', label: 'Completed' },
                        { value: 'blocked', label: 'Blocked' },
                    ]}
                    onChange={(value) => handleDropdownChange(row.id, value)}
                    value={row.status}

                />)
        },
        {
            name: 'Priority',
            selector: (row: { priority: 'low' | 'medium' | 'high'; }) => row.priority,
        },
        {
            name: 'Created At',
            selector: (row: { createdAt: string; }) => row.createdAt,  // Formatting Date to string
        },
        {
            name: 'Due Date',
            selector: (row: { dueDate?: string; }) => row.dueDate ? row.dueDate : 'No Due Date',  // Handling optional field
        },
    ];

    const conditionalRowStyles = [
        {
            when: (row: { urgencyLevel: string; }) => row.urgencyLevel === "low",
            style: {
                backgroundColor: 'rgba(63, 195, 128, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: (row: { urgencyLevel: string; }) => row.urgencyLevel === "medium",
            style: {
                backgroundColor: 'rgba(248, 148, 6, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        },
        {
            when: (row: { urgencyLevel: string; }) => row.urgencyLevel === "high",
            style: {
                backgroundColor: 'rgba(242, 38, 19, 0.9)',
                color: 'white',
                '&:hover': {
                    cursor: 'not-allowed',
                },
            },
        },
    ];

    return (
        <>
            <TaskInteractionBar />
            <DataTable
                columns={columns}
                data={data}
                theme="dark"
                pagination
                onRowClicked={OpenTask}
                conditionalRowStyles={conditionalRowStyles}
            />
            {getTask && <TaskModal open={open} handleClose={() => setOpen(false)} task={getTask} />}
        </>

    )
}