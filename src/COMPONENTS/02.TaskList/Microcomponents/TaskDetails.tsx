import { Task } from "../../../INTERFACES/Task";
///This component is used to display the details of a task, visualised on the right hand side of the modal.

interface TaskDetailsProps {
    task: Task;
}

export default function TaskDetails({ task }: TaskDetailsProps) {
    return (
        <div>
            <p><strong>Project: </strong>{task.project}</p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Priority:</strong></td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{task.priority}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Urgency Level:</strong></td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{task.urgencyLevel}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Status:</strong></td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{task.status}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Tags:</strong></td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{task.tags?.join(', ')}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Assigned To:</strong></td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{task.assignedTo}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Assigned By:</strong></td>
                        <td style={{ padding: '8px', border: '1px solid #ddd' }}>{task.assignedBy}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}