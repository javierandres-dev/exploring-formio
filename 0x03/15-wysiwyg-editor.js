/* With this form renderer, you can also configure any Text area to render as a
WYSIWYG editor using the amazing Quill editor (https://quilljs.com/) . */
Formio.createForm(document.getElementById("formio"), {
  components: [
    {
      type: "textfield",
      label: "Title",
      placeholder: "Enter the title.",
      validate: {
        required: true,
      },
      key: "title",
      input: true,
      inputType: "text",
    },
    {
      type: "textarea",
      label: "Content",
      wysiwyg: true,
      validate: {
        required: true,
      },
      key: "content",
      input: true,
      inputType: "text",
    },
    {
      type: "button",
      action: "submit",
      label: "Submit",
      theme: "primary",
      key: "submit",
      disableOnInvalid: true,
    },
  ],
});

/* It is also possible to provide your own custom configurations to the WYSIWYG
editor found @ https://quilljs.com/docs/configuration. These configurations can
be provided instead of the “true” value of the wysiwyg attribute. Like so. */
Formio.createForm(document.getElementById("formio-custom"), {
  components: [
    {
      type: "textfield",
      label: "Title",
      placeholder: "Enter the title.",
      key: "title",
      input: true,
      inputType: "text",
    },
    {
      type: "textarea",
      label: "Content",
      wysiwyg: {
        theme: "snow",
        modules: {
          toolbar: ["bold", "italic", "underline", "strike"],
        },
      },
      key: "content",
      input: true,
      inputType: "text",
    },
    {
      type: "button",
      action: "submit",
      label: "Submit",
      theme: "primary",
      key: "submit",
    },
  ],
});
