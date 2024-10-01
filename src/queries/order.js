import axios from "axios";

export async function getAllOrders({ pageParam = "", query }) {
  const res = await axios.get(
    `/api/order/all?pageParam=${pageParam}&q=${query}`
  );
  return res.data;
}

export async function updateOrderStatus(orderId) {
  const res = await axios.post("/api/order/update?oid=" + orderId);
  return res.data;
}
