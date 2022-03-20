import { render, screen, cleanup} from '@testing-library/react';
import send from './sendmail';   //cette ligne doit etre replacer par le chemin de la fonction réelles


//test success
it('sending mail success',  async() => {
    let username="iz_mahdi@esi.dz"
       //Appel la fonction login
       await send(username).expect(201);// cette ligne à remplacer
      // ça depend le traitement de la fonction 
   } )
//invalid / empty mail
it('sending failer',  async() => {
    let username="iz_mahdi@esi.ts"
       //Appel la fonction login
       await send(username).expect(400);// cette ligne à remplacer
      // ça depend le traitement de la fonction 
   } )

