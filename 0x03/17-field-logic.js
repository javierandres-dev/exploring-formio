/* You can use field logic to dynamically change field component definitions
based on many different triggers. */
Formio.icons = "fontawesome";
Formio.createForm(document.getElementById("formio"), {
  components: [
    {
      type: "textfield",
      key: "iAmATrigger",
      label: "I am a trigger",
      placeholder: "Enter joe or bob.",
      input: true,
    },
    {
      type: "textfield",
      key: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      input: true,
      tooltip: "Enter your <strong>Last Name</strong>",
      description: "Enter your <strong>Last Name</strong>",
      logic: [
        {
          name: "Bob Logic",
          trigger: {
            type: "simple",
            simple: {
              show: true,
              when: "iAmATrigger",
              eq: "bob",
            },
          },
          actions: [
            {
              name: "Set to snob",
              type: "value",
              value: "value = 'snob';",
            },
          ],
        },
        {
          name: "Joe Logic",
          trigger: {
            type: "simple",
            simple: {
              show: true,
              when: "iAmATrigger",
              eq: "joe",
            },
          },
          actions: [
            {
              name: "Set schmoe",
              type: "value",
              value: "value = 'schmoe';",
            },
          ],
        },
      ],
    },
  ],
});
