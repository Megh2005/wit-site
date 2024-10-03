import axios from "axios";

export async function getGameStatus(game) {
  const res = await axios.get("/api/games/status/" + game);
  return res.data;
}

export async function submitAiGameResponse(response) {
  const res = await axios.post("/api/games/slogan-symphony", response);
  return res.data;
}
