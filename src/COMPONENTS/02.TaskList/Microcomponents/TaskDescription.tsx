import { Task } from "../../../INTERFACES/Task";
import { Typography } from "@mui/material";
import { useState } from "react";
interface TaskDescriptionProps {
    task: Task;
}
export default function TaskDescription({ task }: TaskDescriptionProps) {
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedDescription, setEditedDescription] = useState(task.description || '');

    const handleTitleDoubleClick = () => {
        setIsEditingTitle(true);
    };

    const handleDescriptionDoubleClick = () => {
        setIsEditingDescription(true);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditedDescription(event.target.value);
    };

    const handleTitleBlur = () => {
        setIsEditingTitle(false);
        // Here you would typically update the task title in your state or backend
    };

    const handleDescriptionBlur = () => {
        setIsEditingDescription(false);
        // Here you would typically update the task description in your state or backend
    };

    return (
        <>
            {isEditingTitle ? (
                <input
                    value={editedTitle}
                    onChange={handleTitleChange}
                    onBlur={handleTitleBlur}
                    autoFocus
                />
            ) : (
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    onDoubleClick={handleTitleDoubleClick}
                >
                    {editedTitle}
                </Typography>
            )}
            {isEditingDescription ? (
                <textarea
                    value={editedDescription}
                    onChange={handleDescriptionChange}
                    onBlur={handleDescriptionBlur}
                    autoFocus
                    style={{ width: '100%', minHeight: '100px' }}
                />
            ) : (
                <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    onDoubleClick={handleDescriptionDoubleClick}
                >
                    {editedDescription}
                </Typography>
            )}
        </>
    )
}