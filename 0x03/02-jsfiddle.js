// You can use JSFiddle as a sandbox to play around with this renderer.
Formio.createForm(
  document.getElementById("formio"),
  "https://examples.form.io/example"
).then(function (form) {
  // Defaults are provided as follows.
  form.submission = {
    data: {
      firstName: "Joe",
      lastName: "Smith",
    },
  };

  // Register for the submit event to get the completed submission.
  form.on("submit", function (submission) {
    console.log("Submission was made!", submission);
  });

  // Everytime the form changes, this will fire.
  form.on("change", function (changed) {
    console.log("Form was changed", changed);
  });
});
