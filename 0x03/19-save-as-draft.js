/* Within the Form.io renderer, you can also enable a Save as Draft feature
which will save a submission in “draft” mode either periodically (every 5
seconds), or manually, as the user is filling out the form. This system will
also “restore” a draft submission if the user leaves the page, and then comes
back in a later session. A common term used to describe this process is “save
and return” capability.

This feature works along with our authentication system to attach a “draft”
submission to a user who has been authenticated, to periodically store the
draft of that submission as that user is using the form.

In order to enable this feature, you simply need to use the saveDraft parameter
when you are rendering the form. */
Formio.icons = "fontawesome";
Formio.createForm(
  document.getElementById("formio"),
  "https://examples.form.io/example",
  {
    saveDraft: true,
  }
);
