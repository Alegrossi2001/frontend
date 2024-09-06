import React from 'react';
import L1Modal from "../../REUSABLES/L1Modal";
import { Task } from "../../INTERFACES/Task";
import { useForm, SubmitHandler } from "react-hook-form"
import { Box, Typography } from "@mui/material";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Grid,
} from '@mui/material';


import store from '../../REDUX/00.Store/store';

interface AddTaskModalProps {
    open: boolean;
    handleClose: () => void;
}

interface TaskFormInputs {
    title: string;
    description?: string;
    score: number;
    urgencyLevel: 'low' | 'medium' | 'high';
    assignedBy: string;
    assignedTo: string;
    dueDate?: string;  // Change this to string
    completed: boolean;
    project: string;
    status: 'not started' | 'in progress' | 'completed' | 'blocked';
    priority: 'low' | 'medium' | 'high';
    tags?: string;
}



export default function AddTaskModal({ open, handleClose }: AddTaskModalProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<TaskFormInputs>();

    const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
        // Convert form inputs to Taskaa object
        const taskData: Task = {
            id: 'unique-id', // Ideally, generate a unique ID here
            title: data.title,
            description: data.description,
            score: data.score,
            urgencyLevel: data.urgencyLevel,
            assignedBy: data.assignedBy,
            assignedTo: data.assignedTo,
            dueDate: data.dueDate ? new Date(data.dueDate).toISOString() : undefined,
            completed: false,
            project: data.project,
            status: data.status,
            priority: data.priority,
            tags: data.tags ? data.tags.split(',').map(tag => tag.trim()) : undefined,
            createdAt: Date.now().toString(),
        };
        store.dispatch({
            type: 'taskAdded',
            payload: taskData,
        });
        handleClose();
    };

    return (
        <L1Modal open={open} handleClose={handleClose}>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant="h6" padding={2}>Add Task</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Title"
                            {...register("title", { required: "Title is required" })}
                            error={!!errors.title}
                            helperText={errors.title?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            multiline
                            rows={4}
                            {...register("description")}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="number"
                            label="Score"
                            {...register("score", { required: "Score is required", valueAsNumber: true, min: 0 })}
                            error={!!errors.score}
                            helperText={errors.score?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Urgency Level</InputLabel>
                            <Select
                                defaultValue=""
                                {...register("urgencyLevel", { required: "Urgency level is required" })}
                                error={!!errors.urgencyLevel}
                            >
                                <MenuItem value="low">Low</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="high">High</MenuItem>
                            </Select>
                            {errors.urgencyLevel && <p style={{ color: 'red' }}>{errors.urgencyLevel.message}</p>}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Assigned By"
                            {...register("assignedBy", { required: "Assigned by is required" })}
                            error={!!errors.assignedBy}
                            helperText={errors.assignedBy?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Assigned To"
                            {...register("assignedTo", { required: "Assigned to is required" })}
                            error={!!errors.assignedTo}
                            helperText={errors.assignedTo?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Due Date"
                            InputLabelProps={{ shrink: true }}
                            {...register("dueDate")}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Project"
                            {...register("project", { required: "Project is required" })}
                            error={!!errors.project}
                            helperText={errors.project?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Status</InputLabel>
                            <Select
                                defaultValue=""
                                {...register("status", { required: "Status is required" })}
                                error={!!errors.status}
                            >
                                <MenuItem value="not started">Not Started</MenuItem>
                                <MenuItem value="in progress">In Progress</MenuItem>
                                <MenuItem value="completed">Completed</MenuItem>
                                <MenuItem value="blocked">Blocked</MenuItem>
                            </Select>
                            {errors.status && <p style={{ color: 'red' }}>{errors.status.message}</p>}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Priority</InputLabel>
                            <Select
                                defaultValue=""
                                {...register("priority", { required: "Priority is required" })}
                                error={!!errors.priority}
                            >
                                <MenuItem value="low">Low</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="high">High</MenuItem>
                            </Select>
                            {errors.priority && <p style={{ color: 'red' }}>{errors.priority.message}</p>}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Tags"
                            placeholder="Comma-separated tags"
                            {...register("tags")}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </L1Modal >
    );
}