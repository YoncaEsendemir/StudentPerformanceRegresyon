interface Props {
  result: number | "";
}

const PredictionCard =({result}:Props)=>{
    if(result==null) return null;
    return (
           <div className="result-display mt-4 animate__animated animate__fadeIn">
           <h4 style={{ fontSize: '0.9rem', color: '#22c55e', textTransform: 'uppercase' }}>
            Predicted Performance Index
           </h4>
           <h1 className="display-3 fw-bold m-0 text-white">{result}</h1>
           </div>
    );
};

export default PredictionCard;