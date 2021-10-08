/* Not only is Form.io capable of hosting forms, it can also host submissions
of those forms. These submissions can be accessed using the Submission API,
which simply appends a “/submission/[SUBMISSION_ID]” to the end of the Form API
like the following. */
Formio.icons = "fontawesome";
Formio.createForm(
  document.getElementById("formio"),
  "https://examples.form.io/wizard/submission/5a542c9e2a40bf0001e0f8a9",
  {
    readOnly: true,
  }
);
