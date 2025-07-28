import { useEffect, useState } from "react";
import axios from "axios";

export default function useStudentHour() {
  const [loading, setLoading] = useState(true);
  const [approvedHours, setApprovedHours] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    const fetchHours = async () => {
      try {
        const response = await axios.get(
          "https://www.hs-service.api.crealape.com/api/v1/services",
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
            },
          }
        );

        const data = response.data;
        const total = data.reduce(
          (sum, s) => sum + (s.amount_reported || 0),
          0
        );
        const approved = data.reduce(
          (sum, s) => sum + (s.amount_approved || 0),
          0
        );

        setTotalHours(total);
        setApprovedHours(approved);
      } catch (error) {
        console.error("Error cargando horas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHours();
  }, []);

  return { totalHours, approvedHours, loading };
}
