export interface Message {
    id: string; // The unique identifier of the message
    user: string;
    message: string;
    recipient?: string | null; // The recipient of the message, either user or group
    time?: string | null; // The time the message was sent
    read?: boolean | null; // Whether the message has been read
    attachments?: string[] | null; // The attachments of the message
}