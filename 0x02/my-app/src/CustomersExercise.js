import Formio from "formiojs/Formio";

const CustomersExercise = () => {
  const formio = new Formio("https://gznbxgfeislryaf.form.io/customersform");
  formio.loadForm().then(function (formio) {
    console.log("CustomersExercise - formio: ", formio);
  });
  return <h2>CustomersExercise</h2>;
};

export default CustomersExercise;
