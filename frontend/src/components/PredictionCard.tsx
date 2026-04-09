interface Props {
  result: number | "";
}

const PredictionCard =({result}:Props)=>{
    if(result==null) return null;
    return (
           <div>
            <h4>Predicted Performance Index</h4>
            <h1>{result}</h1>
           </div>
    );
};

export default PredictionCard;