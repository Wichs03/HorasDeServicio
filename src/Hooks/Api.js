import axios from "axios";


const BASE_URL = "https://api.funval.com";

export async function StudentHourServices(studentId) {
  try {
    const response = await axios.get(`${BASE_URL}/students/${studentId}/hours`);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
