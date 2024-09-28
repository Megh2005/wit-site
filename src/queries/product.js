import axios from "axios";

export async function getAllProducts() {
  const res = await axios.get("/api/product/all");
  return res.data;
}

export async function redeemProduct(productId) {
  const res = await axios.post("/api/product/redeem?productId=" + productId);
  return res.data;
}

export async function getProductRedeemStatus(productId) {
  const res = await axios.get(
    "/api/product/redeem-status?productId=" + productId
  );
  return res.data;
}
