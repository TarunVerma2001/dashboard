const BarChart = ({ heights }) => {
  return (
    <div className="flex items-baseline space-x-2">
      {heights.map(({ height, active }, index) => (
        <div key={index}>
          {!active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height={height}
              viewBox={`0 0 16 ${height}`}
              fill="none"
            >
              <path
                opacity="0.2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d={`M0 0H16V${height}H0V0Z`}
                fill={active ? "#157AFF" : "#157AFF"}
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="60"
              viewBox="0 0 16 60"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H16V60H0V0Z"
                fill="#157AFF"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default BarChart;
