import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  if (req.method == "GET") {
    connectDB();
    if (req.query.id) {
      const hotel = Hotel.findById(rq.query.id);
      res.status(200).json({ msg: "Good", hotel });
    }
  }
}
