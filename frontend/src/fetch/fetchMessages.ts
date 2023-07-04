import IMessage from "../models/IMessage";

export default async function fetchMessages(): Promise<
  [Error | null, IMessage[] | null]
> {
  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Request was successful
      const data: IMessage[] = await response.json();
      return [null, data];
    } else {
      // Request failed
      throw new Error("Failed to fetch messages");
    }
  } catch (error:any) {
    console.error("An error occurred while fetching messages:", error);
    return [error, null];
  }
}
