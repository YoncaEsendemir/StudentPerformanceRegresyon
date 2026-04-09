import {Form} from "react-bootstrap"

interface Props{
    label: string;
    value: number | "";
    onChange: (val:number | "")=>void;
}

const InputField =({ label, value, onChange }: Props)=>{return (
 <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control type="number" value={value} onChange={(e)=>onChange(Number(e.target.value))}/>

 </Form.Group>
);};

export default InputField