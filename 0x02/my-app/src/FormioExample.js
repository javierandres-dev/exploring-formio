import Formio from "formiojs/Formio";

const FormioExample = () => {
  const formio = new Formio("https://examples.form.io/example");
  formio.loadForm().then(function (formio) {
    console.log("FormioExample - formio: ", formio);
  });
  return <h2>FormioExample</h2>;
};

export default FormioExample;
