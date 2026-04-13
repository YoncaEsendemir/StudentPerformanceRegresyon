interface Props {
  result: number | null;  // null kabul et
}

const PredictionCard = ({ result }: Props) => {
  return (
    <div className="mt-4 p-2 bg-light rounded text-center">
      <h4>Predicted Performance Index:</h4>
      <h2 className="text-primary">
        {result !== null ? result : "—"}
      </h2>
    </div>
  );
};

export default PredictionCard;