import { render, screen, cleanup } from "@testing-library/react";
import reset from "./reset"; //cette ligne doit etre replacer par le chemin de la fonction réelles
import Login from "./login";

//test success
it("Reset realised with success", async () => {
  let username = "iz_mahdi@esi.dz";
  let password = "test";
  //Appel la fonction login
  await reset(username, password).expect(201); // cette ligne à remplacer
  // ça depend le traitement de la fonction
  await Login(username, password).expect(200); // pour confirmer le login
});

//mot de passe n'est pas changer
it("Reset failed/empty password", async () => {
  let username = "iz_mahdi@esi.dz";
  let password = "";
  //Appel la fonction login
  await reset(username, password).expect(400); // cette ligne à remplacer
  // ça depend le traitement de la fonction
});
