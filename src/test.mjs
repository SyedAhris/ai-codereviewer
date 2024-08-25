import axios from "axios";

const LLAMA3_API_URL = "http://localhost:11434";

async function getLLaMA3Response(prompt) {
  try {
    const response = await axios.post(`${LLAMA3_API_URL}/api/generate`, {
      prompt: prompt,
      model: "llama3.1:8b",
      stream: false,
    });

    return response.data?.response;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

getLLaMA3Response("hellow how do you do?");
