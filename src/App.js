import './App.css';
import testImage from "../src/images/test.png";



function App() {
  return (
<div className="container p-5">
<div className=" mb-5">
  <label for="exampleFormControlInput1" className="form-label"></label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Keyword"/>
  </div>

<div className="card mb-3 p-5 bg-white " style={{maxwidth: 540}}>

  <div className="row g-0 bg-white mb-4 ">
    <div className="col-md-2 bg-white">
      <img id = "imgtest" src={testImage} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-10 bg-white">
      <div className="card-body bg-white  mt-2">
        <p className='bg-white fw-bold'>Flight number:Mission Name (Launch Year)</p>
        <p className="card-text bg-white">Details: Lorem Ispum dolo sit amet.</p>
       </div>
    </div>
  </div>

  <div className="row g-0 mb-4 bg-white">
    <div className="col-md-2 bg-white">
      <img id = "imgtest" src={testImage} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-10 mb-4 bg-white">
      <div className="card-body bg-white mt-2">
        <p className='bg-white fw-bold'>Flight number:Mission Name (Launch Year)</p>
        <p className="card-text bg-white">Details: Lorem Ispum dolo sit amet.</p>
      </div>
    </div>
  
    <div className="row g-0 mb-4 bg-white">
    <div className="col-md-2 bg-white">
      <img id = "imgtest" src={testImage} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-10  bg-white">
      <div className="card-body bg-white mt-2">
        <p className='bg-white fw-bold'>Flight number:Mission Name (Launch Year)</p>
        <p className="card-text bg-white">Details: Lorem Ispum dolo sit amet.</p>
        
      </div>
    </div>
  </div>
  <div className="row g-0 mb-4 bg-white">
    <div className="col-md-2 bg-white">
      <img id = "imgtest" src={testImage} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-10 bg-white">
      <div className="card-body bg-white mt-2">
        <p className='bg-white fw-bold'>Flight number:Mission Name (Launch Year)</p>
        <p className="card-text bg-white">Details: Lorem Ispum dolo sit amet.</p>
        
      </div>
    </div>
  </div>
  
  </div>




</div>


</div>
  );
}

export default App;
