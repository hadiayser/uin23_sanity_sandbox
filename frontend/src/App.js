import logo from './logo.svg';
import './App.css';

function App() {

  let PROJECT_ID = "nur9aj2o";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "products"]');
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  fetch(URL).then((results)=> results.json().then(({result})=>(console.log(result))))


  return (
  <h1>Innhold fra Sanity:o</h1>
  );
}

export default App;
