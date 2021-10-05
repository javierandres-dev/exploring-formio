/* import Formio from 'formiojs/Formio';

const formio = new Formio('https://examples.form.io/example');
formio.loadForm().then(function(formio) {
  console.log("formio: ", formio);
}); */

/* import Formio from 'formiojs';

let formio = new Formio('https://examples.form.io/example');
formio.loadForm((form) => {
  console.log("form: ", form);
  formio.saveSubmission({data: {
    firstName: 'Joe',
    lastName: 'Smith',
    email: 'joe@example.com'
  }}).then((submission) => {
    console.log("submission: ", submission);
  });
}); */

/* import Formio from "formiojs";

const formio = new Formio("https://examples.form.io/example");
formio.loadForm().then(function (form) {
  console.log("form: ", form);

  formio
    .saveSubmission({
      data: {
        firstName: "Joe",
        lastName: "Smith",
        email: "joe@example.com",
      },
    })
    .then(function (submission) {
      console.log("submission: ", submission);
    });
}); */
