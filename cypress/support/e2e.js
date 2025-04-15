import 'cypress-file-upload';
import { login } from "./login-helper";

before(() => {
  login(); // This runs before EVERY scenario in ALL features
});

// after(()=>{
//   cy.
// })
