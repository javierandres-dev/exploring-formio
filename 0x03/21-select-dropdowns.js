/* Form.io incorporates the amazing Choices.js library to be used as a Select
control, but also has the ability to render raw HTML select dropdowns. Below
are some examples of different configurations for Select dropdowns.
(https://github.com/jshjohnson/Choices) */
Formio.createForm(document.getElementById("single-select"), {
  components: [
    {
      type: "select",
      label: "Single Select",
      key: "single",
      placeholder: "Select one",
      data: {
        values: [
          { value: "apple", label: "Apple" },
          { value: "banana", label: "Banana" },
          { value: "pear", label: "Pear" },
          { value: "orange", label: "Orange" },
        ],
      },
      dataSrc: "values",
      defaultValue: "banana",
      template: "<span>{{ item.label }}</span>",
      input: true,
    },
  ],
});

Formio.createForm(document.getElementById("json-values"), {
  components: [
    {
      type: "select",
      label: "Select JSON",
      key: "selectjson",
      placeholder: "Select one",
      data: {
        json: `[
          {"value":"a","label":"A"},
          {"value":"b","label":"B"},
          {"value":"c","label":"C"},
          {"value":"d","label":"D"}
        ]`,
      },
      dataSrc: "json",
      template: "<span>{{ item.label }}</span>",
      input: true,
    },
  ],
});

Formio.createForm(document.getElementById("multi-select"), {
  components: [
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
  ],
});

Formio.createForm(document.getElementById("url-select"), {
  components: [
    {
      type: "select",
      label: "Model",
      key: "model",
      placeholder: "Select your model",
      dataSrc: "url",
      defaultValue: "Pilot",
      lazyLoad: false,
      data: {
        url: "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json",
      },
      valueProperty: "Model_Name",
      template: "<span>{{ item.Model_Name }}</span>",
      selectValues: "Results",
    },
  ],
});

Formio.createForm(document.getElementById("lazy-load-infinite-scroll"), {
  components: [
    {
      type: "select",
      label: "Companies",
      key: "companies",
      placeholder: "Select a company",
      dataSrc: "url",
      data: {
        url: "https://example.form.io/company/submission?limit={{ limit }}&skip={{ skip }}",
      },
      limit: 10,
      valueProperty: "data.name",
      searchField: "data.name__regex",
      lazyLoad: true,
      template: "<span>{{ item.data.name }}</span>",
    },
  ],
});

Formio.createForm(document.getElementById("lazy-load"), {
  components: [
    {
      type: "select",
      label: "Model",
      key: "model",
      placeholder: "Select your model",
      dataSrc: "url",
      defaultValue: "Pilot",
      data: {
        url: "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json",
      },
      valueProperty: "Model_Name",
      lazyLoad: true,
      template: "<span>{{ item.Model_Name }}</span>",
      selectValues: "Results",
    },
  ],
});

Formio.createForm(document.getElementById("lazy-load-default"), {
  components: [
    {
      type: "select",
      label: "Customer",
      key: "customer",
      placeholder: "Select a customer",
      dataSrc: "url",
      data: {
        url: "https://examples.form.io/customer/submission",
      },
      valueProperty: "data.email",
      searchField: "data.email__regex",
      lazyLoad: true,
      template:
        "<span>{{ item.data.firstName }} {{ item.data.lastName }}</span>",
    },
  ],
}).then(function (form) {
  form.submission = {
    data: {
      customer: "joe@example.com",
    },
  };
});

Formio.createForm(document.getElementById("html5-select"), {
  components: [
    {
      type: "select",
      label: "Single Select",
      key: "html5select",
      placeholder: "Select one",
      data: {
        values: [
          { value: "apple", label: "Apple" },
          { value: "banana", label: "Banana" },
          { value: "pear", label: "Pear" },
          { value: "orange", label: "Orange" },
        ],
      },
      dataSrc: "values",
      defaultValue: "banana",
      widget: "html5",
      template: "<span>{{ item.label }}</span>",
      input: true,
    },
  ],
});
