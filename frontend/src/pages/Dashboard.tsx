import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SelectField from "../components/SelectField";
import InputField from "../components/InputField";
import PredictionCard from "../components/PredictionCard";

const Dashboard = () => {
  // State'ler: number | "" (boş input için)
  const [hours, setHours] = useState<number | "">("");
  const [scores, setScores] = useState<number | "">("");
  const [activities, setActivities] = useState<number>(0);
  const [sleep, setSleep] = useState<number | "">("");
  const [papers, setPapers] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);

  const handlePredict = async () => {
    // NaN kontrolü düzeltildi
    if (hours === "" || scores === "" || sleep === "" || papers === "") {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    try {
       //http://127.0.0.1:8000/predict
      const API_URL = "https://studentperformanceregresyon.onrender.com";
      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hours: Number(hours),
          scores: Number(scores),
          activities: activities,
          sleep: Number(sleep),
          papers: Number(papers),
        }),
      });

      const data = await res.json();
      setResult(Math.round(data.prediction));
    } catch (err) {
      console.error(err);
    }
  };

  // Yardımcı onChange fonksiyonları (tip uyumu için)
  const handleHoursChange = (val: number | "") => setHours(val);
  const handleScoresChange = (val: number | "") => setScores(val);
  const handleSleepChange = (val: number | "") => setSleep(val);
  const handlePapersChange = (val: number | "") => setPapers(val);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="card-modern">
            <h3 className="text-center fw-bold title mb-4" style={{ color: "#fff" }}>
              Student Performance Predictor
            </h3>

            <InputField label="Hours Studied" value={hours} onChange={handleHoursChange} />
            <InputField label="Previous Scores" value={scores} onChange={handleScoresChange} />
            <SelectField value={activities} onChange={setActivities} />
            <InputField label="Sleep Hours" value={sleep} onChange={handleSleepChange} />
            <InputField label="Sample Papers Practiced" value={papers} onChange={handlePapersChange} />

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

export default Dashboard;