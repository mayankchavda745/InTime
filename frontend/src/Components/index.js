import React , {useState,useEffect} from 'react'

const Index = () => {
    const [data,setData] = useState([]);
   
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  return (
    <>
    <h1>hello</h1>
    {data && data.map((d,i)=><div key={i}>{d.Id} || {d.name}</div>)}
    </>
  )
}

export default Index