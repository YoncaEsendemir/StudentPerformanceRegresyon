import { Form } from "react-bootstrap";

interface Props {
  label: string;
  value: number | "";
  onChange: (val: number | "") => void;
}

const InputField = ({ label, value, onChange }: Props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label className="form-label fs-5">{label}</Form.Label>
      <Form.Control
        className="form-control"
        type="number"
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          // Boş string ise "" gönder, değilse number'a çevir
          onChange(val === "" ? "" : Number(val));
        }}
      />
    </Form.Group>
  );
};

export default InputField;