// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import ReactSelect from "react-select";
// import { TextField, Checkbox } from "@material-ui/core";
// import { ApiGet_Simple } from '../ApiGet';

// interface IFormInputs {
//   TextField: string
//   MyCheckbox: boolean
// }

// const Form: React.FC = () => {
//   const methods = useForm<IFormInputs>();
//   const { handleSubmit, control, reset } = methods;
//   const onSubmit = (data: IFormInputs) => { // 作成した関数を実行
//     // ApiGet_Simple("http://localhost:8080/api/v1/relevance")
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Option 1: pass a component to the Controller. */}
//       <Controller as={TextField} name="TextField" control={control} defaultValue="" />
      
//       {/* Option 2: use render props to assign events and value */}
//       <Controller
//         name="MyCheckbox"
//         control={control}
//         defaultValue={false}
//         rules={{ required: true }}
//         render={props => <Checkbox {...props} />} // props contains: onChange, onBlur and value
//       />
//       <input type="submit" />
//     </form>
//   );
// }

// export default Form;