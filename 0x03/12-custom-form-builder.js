/* Not only can this library be used to render the default form builder as seen
within the form builder section, but you can also create your own customized
form builder interface by providing the components you wish to add to the
builder within the builder configuration.

To see this in action, you can use the pre-built formio builder libraries as
follows. */
Formio.builder(
  document.getElementById("builder"),
  {},
  {
    builder: {
      basic: false,
      advanced: false,
      data: false,
      customBasic: {
        title: "Basic Components",
        default: true,
        weight: 0,
        components: {
          textfield: true,
          textarea: true,
          email: true,
          phoneNumber: true,
        },
      },
      custom: {
        title: "User Fields",
        weight: 10,
        components: {
          firstName: {
            title: "First Name",
            key: "firstName",
            icon: "terminal",
            schema: {
              label: "First Name",
              type: "textfield",
              key: "firstName",
              input: true,
            },
          },
          lastName: {
            title: "Last Name",
            key: "lastName",
            icon: "terminal",
            schema: {
              label: "Last Name",
              type: "textfield",
              key: "lastName",
              input: true,
            },
          },
          email: {
            title: "Email",
            key: "email",
            icon: "at",
            schema: {
              label: "Email",
              type: "email",
              key: "email",
              input: true,
            },
          },
          phoneNumber: {
            title: "Mobile Phone",
            key: "mobilePhone",
            icon: "phone-square",
            schema: {
              label: "Mobile Phone",
              type: "phoneNumber",
              key: "mobilePhone",
              input: true,
            },
          },
        },
      },
      layout: {
        components: {
          table: false,
        },
      },
    },
    editForm: {
      textfield: [
        {
          key: "api",
          ignore: true,
        },
      ],
    },
  }
).then(function (builder) {
  builder.on("saveComponent", function () {
    console.log(builder.schema);
  });
});
