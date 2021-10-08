window.onload = function () {
  Formio.createForm(
    document.getElementById("test-register"),
    "https://gznbxgfeislryaf.form.io/test/register"
  ).then(function (form) {
    form.submission = {
      data: {
        firstName: "Joe",
      },
    };
    console.log("form: ", form);
    console.log("submission: ", form.submission);
    console.log("data: ", form.submission.data);
  });
};
