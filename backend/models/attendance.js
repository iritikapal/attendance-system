import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  pmisId: { type: String, required: true }, // Reference to user
  date: { type: Date, required: true },
  status: { type: String, enum: ["Present", "Absent", "Leave"], required: true },
  leaveType: { type: String, enum: ["Casual", "Medical", "Earned", "Restricted", "Short"], default: "None" }
}, { timestamps: true });

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;
