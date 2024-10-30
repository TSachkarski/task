import React, { useEffect, useState } from "react"; // Ensure useState is imported
import Bar from "./Bar"; // No extension
import '../styles/globals.css';
import { DataPoint } from '../Interfaces/DataPoint'; // Adjust path accordingly

const Bars: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]); // Use state correctly

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result: DataPoint[] = await response.json(); // Cast the result
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-end justify-between h-32">
      {data.map((point, index) => (
        <Bar key={index} {...point} />
      ))}
    </div>
  );
}

export default Bars;
