import axios from "axios";

export async function getCoinBalance() {
  const res = await axios.get("/api/balance");
  return res.data;
}

export async function transferFromSponsorToUser(data) {
  const res = await axios.post("/api/payment/transfer", { ...data });
  return res.data;
}
