import Formio from "formiojs/Formio";

const Formio1 = () => {
  const formio = new Formio("https://examples.form.io/example");
  formio.loadForm().then(function (formio) {
    console.log("formio1 - formio: ", formio);
  });
  return <h2>Formio1</h2>;
};

export default Formio1;
