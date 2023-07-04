import Message from "../models/IMessage";

export default async function postMessage(data: Message) {
  try {
    const response = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Request was successful
      console.log("Message sent successfully");
    } else {
      // Request failed
      console.error("Failed to send message");
    }
  } catch (error) {
    console.error("An error occurred while sending the message:", error);
  }
}
