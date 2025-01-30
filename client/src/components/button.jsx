export default function ExcuseButton({ setExcuse }) {
  const fetchRandomExcuse = async () => {
    try {
      const response = await fetch(`http://localhost:8080/`);
      const data = await response.json();
      console.log(data);
      setExcuse(data.payload[0].work);
    } catch (error) {
      console.error("Error fetching excuse:", error);
      setExcuse("Failed to load excuse. Try again!");
    }
  };
  return <button onClick={fetchRandomExcuse}>Generate Excuse</button>;
}
