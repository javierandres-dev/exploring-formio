/* Every form within Form.io can be rendered within this library using the
Embed URL of that form. You can then provide the src parameter of the Form
renderer to show the form within your page. */
Formio.icons = "fontawesome";
Formio.createForm(
  document.getElementById("formio"),
  "https://examples.form.io/example"
).then(function (form) {
  // Default the submission.
  form.submission = {
    data: {
      firstName: "Joe",
      lastName: "Smith",
    },
  };
});
