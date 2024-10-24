import axios from "axios";

export async function getGameStatus(game) {
  const res = await axios.get("/api/games/status/" + game);
  return res.data;
}

export async function submitAiGameResponse(response) {
  const res = await axios.post("/api/games/slogan-symphony", response);
  return res.data;
}

export async function getFindAllusers() {
  const res = await axios.get("/api/games/find-user");
  return res.data;
}

export async function getTreasureHunts() {
  const res = await axios.get("/api/games/treasure-hunt");
  return res.data;
}

export async function getQuiz(quizName) {
  const res = await axios.get("/api/games/quiz/" + quizName);
  return res.data;
}

export async function submitQuiz(quizName, data) {
  const res = await axios.post("/api/games/quiz/" + quizName, data);
  return res.data;
}
