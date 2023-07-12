"use client"
import { useForm, Controller } from "react-hook-form";
// @ts-ignore
import { NumericFormat } from 'react-number-format';
export default function Home() {
  const {
    control,
    handleSubmit,
      watch,
    formState: { errors }
  } = useForm();
const valueForm = watch()
  console.log("valueFormvalueForm",valueForm)
  const onSubmit = (data:any) => console.log(data);
    return (
    <div style={{backgroundColor:"white"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            control={control}
            name="cardNumber"
            render={({ field: { onChange, name, value } }) => (
                <NumericFormat
                    style={{color:"black"}}
                     thousandSeparator=","
                    name={name}
                    value={value}
                    onChange={onChange}
                    allowNegative={false}
                    decimalScale={0}
                />
            )}
        />
        <input type="submit" />
      </form>
    </div>
  )
}
