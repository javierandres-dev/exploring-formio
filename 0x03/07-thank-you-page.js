/* You can respond to a submission event and change the page of the browser to
a thank you page. This can be either another page of your website or can use
your framework’s routing system if you are using a framework. */
Formio.icons = "fontawesome";
Formio.createForm(
  document.getElementById("formio"),
  "https://examples.form.io/example"
).then(function (form) {
  // What to do when the submit begins.
  form.on("submitDone", function (submission) {
    window.location = "./thank-you-page.html";
  });
});
