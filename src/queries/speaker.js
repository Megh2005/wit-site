import axios from "axios";

export async function getKeynoteSpeakers() {
  const res = await axios.get("/api/speaker/keynote");
  return res.data;
}

export async function getPanelSpeakers() {
  const res = await axios.get("/api/speaker/panel");
  return res.data;
}

export async function getEsteemedSpeakers() {
  const res = await axios.get("/api/speaker/esteemed");
  return res.data;
}
