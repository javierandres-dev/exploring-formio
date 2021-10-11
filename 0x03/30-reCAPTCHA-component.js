/* Please read Help Docs to learn details of how reCAPTCHA component works.
(https://help.form.io/userguide/form-components/#recaptcha) */
Formio.setProjectUrl("https://examples.test-form.io");
const formJSON = {
  components: [
    {
      label: "Test",
      action: "event",
      type: "button",
      key: "test",
      event: "test",
    },
    {
      eventType: "buttonClick",
      type: "recaptcha",
      key: "reCaptcha",
      label: "reCAPTCHA",
      buttonKey: "test",
    },
    {
      eventType: "formLoad",
      type: "recaptcha",
      key: "reCaptcha2",
      label: "reCAPTCHA",
    },
    {
      type: "button",
      label: "Submit",
      key: "submit",
      action: "submit",
    },
  ],
  name: "testRecaptchaForm",
  settings: {
    recaptcha: {
      isEnabled: "true",
      siteKey: "6Ldc54MUAAAAAP4KjayrT1InduuvCnXvNZUpZpQj",
    },
  },
};
Formio.createForm(document.getElementById("formio"), formJSON).then(function (
  form
) {
  // Provide a default submission.
  form.submission = {
    data: {},
  };
  form.on("submit", function (submission) {
    console.log(submission);
    var jsonElement = document.getElementById("formio-submission-json");
    jsonElement.innerHTML = JSON.stringify(submission, null, 4);
  });
});
