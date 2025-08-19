"use client";
import { useEffect, useState } from "react";

export default function AttendancePage() {
  const [data, setData] = useState<string>("Loading...");

  useEffect(() => {
    fetch("/api/attendance") // this goes to backend via proxy
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch(() => setData("Error fetching data"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Attendance Page</h1>
      <p className="mt-4">Backend says: {data}</p>
    </div>
  );
}
