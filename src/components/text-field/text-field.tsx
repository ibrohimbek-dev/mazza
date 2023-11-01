import { TextFieldProps } from "./text-field.props";
import { FieldHookConfig, useField, ErrorMessage } from "formik";

const TextField = ({ ...props }: TextFieldProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group">
      <input
        id={field.name}
        className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
        {...props}
        {...field}        
      />      
      <p className="text-danger">
        <ErrorMessage name={field.name} />
      </p>
    </div>
  );
};

export default TextField;
