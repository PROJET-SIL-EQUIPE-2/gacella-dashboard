import { render, screen, cleanup } from "@testing-library/react";
import {fetchLogin} from "../redux/actions/actions";
import login from "./login"; //must changing


test('Login success', () => {
  let email = "is_metidji@esi.dz";
  let password = "password";
  return expect(fetchLogin({email : email , password : password})).resolves.toBe("success");
});

// test('Login success', () => {
//
//
//   expect(fetchLogin({ email : email, password : password})).toBe('success');
// });
//test success
// it("Login success", async () => {
//
//   //Appel la fonction login
//   .expect(200); // cette ligne à remplacer
//   // ça depend le traitement de la fonction
// });

//test email n'existe pas
it("fails when an email does not exist supplied", async () => {
  let mail = "test@test.test";
  let mdp = "test";
  //Appel la fonction login
  await Login(username, password).expect(400); //cette fonction àremplacer
});

//test  empty or incorrect email and password
it("fails when an incorrect/empty email and password is supplied", async () => {
  let mail = "test123@test.com";
  let mdp = "incorrectpassword";
  await login(mail, mdp).expect(400);
});
