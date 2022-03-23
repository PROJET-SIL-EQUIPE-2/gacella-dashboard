import { render, screen, cleanup } from "@testing-library/react";
import { validerUtil, refuserUtil } from "./val_rej";
import login from "./login";

//test valider
it("valider success", async () => {
  let username = "iz_mahdi@esi.dz";
  // on supose l'utilisateur inscrit, sinon on l'ajoute inscription(iz_mahdi@esi.dz)

  //Appel la fonction validerUtil
  await validerUtil(username).expect(200); // sucess code
  // test qu'il peut bien acceder au compte
  await login(username).expect(200); // sucess code
});

//test refuser
it("refuser success", async () => {
  let username = "iz_mahdi@esi.dz";
  // on supose l'utilisateur inscrit, sinon on l'ajoute inscription(iz_mahdi@esi.dz)

  //Appel la fonction validerUtil
  await refuserUtil(username).expect(200); // sucess code
  // test qu'il peut bien acceder au compte
  await login(username).expect(400); // failure  code
});
