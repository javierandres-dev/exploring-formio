/* The Select component allows you to connect to external data sources as well
as perform look ahead searching within that data source.
In addition, you can also make each of the selects conditional based on the
values provided from previous select lists. */
Formio.createForm(document.getElementById("formio"), {
  components: [
    {
      type: "editgrid",
      label: "Cars",
      key: "cars",
      defaultOpen: true,
      removeRow: "Cancel",
      components: [
        {
          type: "select",
          label: "Make",
          key: "make",
          placeholder: "Select your make",
          dataSrc: "values",
          validate: {
            required: true,
          },
          data: {
            values: [
              {
                label: "Chevy",
                value: "chevrolet",
              },
              {
                value: "honda",
                label: "Honda",
              },
              {
                label: "Ford",
                value: "ford",
              },
              {
                label: "Toyota",
                value: "toyota",
              },
            ],
          },
        },
        {
          type: "select",
          label: "Model",
          key: "model",
          placeholder: "Select your model",
          dataSrc: "url",
          data: {
            url: "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/{{ row.make }}?format=json",
          },
          valueProperty: "Model_Name",
          template: "<span>{{ item.Model_Name }}</span>",
          refreshOn: "cars.make",
          clearOnRefresh: true,
          selectValues: "Results",
          validate: {
            required: true,
          },
        },
      ],
    },
  ],
});
