/* In addition to rendering forms, this library can also be used to render
complex wizard workflows. */
Formio.createForm(
  document.getElementById("wizard"),
  "https://examples.form.io/wizard"
).then(function (wizard) {
  wizard.on("nextPage", function (page) {
    console.log(page);
  });
  wizard.on("submit", function (submission) {
    console.log(submission);
  });
});

Formio.createForm(
  document.getElementById("wizardWithOptions"),
  "https://examples.form.io/wizard",
  {
    breadcrumbSettings: { clickable: false },
    buttonSettings: { showCancel: false },
  }
).then(function (wizard) {
  wizard.on("nextPage", function (page) {
    console.log(page);
  });
  wizard.on("submit", function (submission) {
    console.log(submission);
  });
});
