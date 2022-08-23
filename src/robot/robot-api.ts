import Promobot from "promobot-api";

let currentInstance: Promobot | undefined;

export function GetPromobotInstance(): Promise<Promobot> {
  if (currentInstance) return Promise.resolve(currentInstance);
  const robotInstance =
    typeof QWebChannel !== "undefined"
      ? Promobot.getInstance(null)
      : Promobot.getEmulateInstance({ url: "http://192.168.26.17:8089" });

  return robotInstance.then((inst) => {
    currentInstance = inst;
    return inst;
  });
}
