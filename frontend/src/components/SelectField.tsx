import { Form } from "react-bootstrap";

interface Props{
    value: number;
    onChange: (val:number | "")=>void;
}

const SelectField = ({value, onChange}:Props)=>{
  return(
    <Form.Group className="mb-3">
        <Form.Label className="form-label fs-5">Extracurricular Activities</Form.Label>
            <Form.Select className="form-select" value={value} onChange={(e)=>onChange(Number(e.target.value))}>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
            </Form.Select>
    </Form.Group>
  );
};

export default SelectField
