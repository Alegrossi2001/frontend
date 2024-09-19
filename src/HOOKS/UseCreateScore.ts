import { Task } from "../INTERFACES/Task";


export function UseCreateScore(task: Task): number {
    //first we identify the urgency of the task
    let score = 0;
    if (task.urgencyLevel === "high") {
        score += 30;
    } else if (task.urgencyLevel === "medium") {
        score += 13;
    } else if (task.urgencyLevel === "low") {
        score += 5;
    }

    //now we increase it based on the deadline
    const deadline = new Date(task.dueDate ?? new Date());
    const today = new Date();
    const timeDifference = deadline.getTime() - today.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    //if the task is due, we decrease the score
    if (daysDifference < 0) {
        score -= 10;
        //if the task is due in 3 days, we increase it by 5 points
    } else if (daysDifference < 3) {
        score += 5;
    }
    //if it's due in 1 week, we increase it by 3 points
    else if (daysDifference < 7) {
        score += 5;
    }
    //if it's due in 1 month, we increase it by 1 point
    else if (daysDifference < 30) {
        score += 10;
    }

    //Now we increase it based on the priority of the task
    if (task.priority === "high") {
        score += 20;
    } else if (task.priority === "medium") {
        score += 10;
    } else if (task.priority === "low") {
        score += 5;
    }

    return score;
}

