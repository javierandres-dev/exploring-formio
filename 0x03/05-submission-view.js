/* Not only can you view a submission as a disabled filled out webform, but you
can also provide the renderMode option, to view the submission as a HTML view.
*/
Formio.createForm(
  document.getElementById("formio"),
  "https://examples.form.io/wizard/submission/5a542c9e2a40bf0001e0f8a9",
  {
    readOnly: true,
    renderMode: "html",
  }
);

/* You can also render the full form by first loading the form, and then
changing the display to "form", and then setting the rendered form in "HTML"
mode with the submission then set afterward as the following illustrates. */
var formio = new Formio(
  "https://examples.form.io/wizard/submission/5a542c9e2a40bf0001e0f8a9"
);
formio.loadForm().then(function (form) {
  form.display = "form";
  Formio.createForm(document.getElementById("formio-full"), form, {
    readOnly: true,
    renderMode: "html",
  }).then(function (instance) {
    formio.loadSubmission().then(function (submission) {
      instance.submission = submission;
    });
  });
});
