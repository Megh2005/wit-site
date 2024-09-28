import axios from "axios";

export async function getAllOrders() {
  const res = await axios.get("/api/order/all");
  return res.data;
}
