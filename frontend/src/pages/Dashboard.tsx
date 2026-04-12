import { useState } from "react";
import { Container,Row,Col,Button } from "react-bootstrap";
import SelectField from "../components/SelectField";
import InputField from "../components/InputField";
import PredictionCard from "../components/PredictionCard";

const Dashboard = ()=>{


const [hours, setHours]=useState<number | "">("");
const [scores, setScores]=useState<number | "">("");
const [activities, setActivities]=useState<number>(0);
const [sleep,setSleep]=useState<number | "">("");
const [papers, setPapers]=useState<number | "">("");

const [result,setResult]=useState<number | null>(null);

    const handlePredict =async()=>{
      try{
      const res = await fetch("http://127.0.0.1:8000/predict",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          hours: Number(hours),
          scores: Number(scores),
          activities,
          sleep: Number(sleep),
          papers: Number(papers)
        })
      });

      const data = await res.json();
      setResult(Math.round(data.prediction));
  }
   catch (err) {
    console.error(err);
  }
};

    return (
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
           {/* Kartın ana yapısı */}
          <div className="card-modern">
            <h3 className="text-center fw-bold title mb-4" style={{ color: "#fff" }}>Student Performance Predictor</h3>
            <InputField label="Hours Studied" value ={hours} onChange={setHours} />
            <InputField label="Previous Scores" value={scores} onChange={setScores} />
            <SelectField value={activities} onChange={setActivities} />
            <InputField label="Sleep Hours" value={sleep} onChange={setSleep} />
            <InputField label="Sample Papers Practiced" value={papers} onChange={setPapers} />

            <Button className="btn-modern w-100 mt-3 fs-4" onClick={handlePredict}>
              🚀 Predict Performance
            </Button>

            <PredictionCard result={result} />
          </div>
        </Col>
      </Row>
    </Container>
    );
};

export default Dashboard