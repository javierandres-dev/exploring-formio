/* You can load in data from an external API as a result of values entered in a
form. */
Formio.icons = "fontawesome";
Formio.createForm(
  document.getElementById("formio"),
  "https://examples.form.io/customerload"
).then(function (form) {
  // Triggered when they click the submit button.
  form.on("change", function (event) {
    if (
      event.changed &&
      event.changed.component.key === "customerNumber" &&
      event.changed.value
    ) {
      Formio.fetch(
        "https://examples.form.io/customers/submission?data.number=" +
          event.changed.value,
        {
          headers: {
            "content-type": "application/json",
          },
          mode: "cors",
        }
      ).then(function (response) {
        response.json().then(function (result) {
          if (Array.isArray(result) && result.length > 0) {
            var submission = { data: event.data };
            submission.data.name = result[0].data.name;
            submission.data.phoneNumber = result[0].data.phonenumber;
            form.submission = submission;
          }
        });
      });
    }
  });
});
