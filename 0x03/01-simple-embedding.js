// You can create a form with the simple JSON schema as follows.
Formio.icons = "fontawesome";
Formio.createForm(document.getElementById("formio"), {
  components: [
    {
      type: "textfield",
      key: "firstName",
      label: "First Name",
      placeholder: "Enter your first name.",
      input: true,
      tooltip: "Enter your <strong>First Name</strong>",
      description: "Enter your <strong>First Name</strong>",
    },
    {
      type: "textfield",
      key: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      input: true,
      tooltip: "Enter your <strong>Last Name</strong>",
      description: "Enter your <strong>Last Name</strong>",
    },
    {
      type: "select",
      label: "Favorite Things",
      key: "favoriteThings",
      placeholder: "These are a few of your favorite things...",
      data: {
        values: [
          {
            value: "raindropsOnRoses",
            label: "Raindrops on roses",
          },
          {
            value: "whiskersOnKittens",
            label: "Whiskers on Kittens",
          },
          {
            value: "brightCopperKettles",
            label: "Bright Copper Kettles",
          },
          {
            value: "warmWoolenMittens",
            label: "Warm Woolen Mittens",
          },
        ],
      },
      dataSrc: "values",
      template: "<span>{{ item.label }}</span>",
      multiple: true,
      input: true,
    },
    {
      type: "button",
      action: "submit",
      label: "Submit",
      theme: "primary",
    },
  ],
}).then(function (form) {
  form.on("submit", function (submission) {
    console.log(submission);
  });
});
