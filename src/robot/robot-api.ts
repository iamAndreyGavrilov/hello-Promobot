import Promobot from "promobot-api";

export function GetPromobotInstance(): Promise<Promobot> {
  return Promobot.getEmulateInstance({ url: "http://192.168.26.17:8089" });
}
