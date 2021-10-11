/* You can use JSON Logic to create complex calculated values based on the
values of other fields. */
Formio.createForm(document.getElementById("formio"), {
  components: [
    {
      type: "number",
      label: "A",
      key: "a",
      input: true,
      inputType: "text",
      multiple: true,
      prefix: "+",
      validate: {
        min: 2,
        max: 100,
        step: 1,
      },
    },
    {
      type: "htmlelement",
      tag: "p",
      className: "text-center",
      content: "———— X ————",
    },
    {
      type: "number",
      label: "B",
      key: "b",
      input: true,
      inputType: "text",
      multiple: true,
      prefix: "+",
      validate: {
        min: 2,
        max: 100,
        step: 1,
      },
    },
    {
      type: "textfield",
      label: "Total",
      key: "total",
      input: true,
      inputType: "text",
      disabled: true,
      calculateValue: {
        "*": [{ _sum: { var: "data.a" } }, { _sum: { var: "data.b" } }],
      },
    },
  ],
});
