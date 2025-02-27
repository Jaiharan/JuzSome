const SkimmerCards = () => {
  return (
    <div className=" m-10">
      <div className="skimmer-card bg-gray-200 p-4 rounded-lg shadow-md w-64">
        <div className="skimmer-img bg-gray-300 h-80 w-full mb-4 rounded"></div>
        {/* <div className="skimmer-text bg-gray-300 h-6 w-3/4 rounded"></div> */}
      </div>
    </div>
  );
};

const DefaultSkimmerArraySize = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export { DefaultSkimmerArraySize };
export default SkimmerCards;
