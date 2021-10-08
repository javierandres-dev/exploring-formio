/* Custom wizards can be implemented using a combination of custom buttons
within each page, and then hiding some buttons that you wish to not show. This
can be used to create a “Review” or “Thank you” page at the end of your wizard.
*/
Formio.createForm(
  document.getElementById("wizard"),
  "https://examples.form.io/customwizard",
  {
    buttonSettings: {
      showCancel: false,
      showPrevious: false,
      showNext: false,
      showSubmit: false,
    },
  }
).then(function (wizard) {
  wizard.on("gotoNextPage", function () {
    wizard.nextPage();
  });
  wizard.on("gotoPreviousPage", function () {
    wizard.prevPage();
  });
  wizard.on("wizardSave", function () {
    wizard.submit().then(function () {
      wizard.onChange();
      wizard.nextPage();
    });
  });
});
