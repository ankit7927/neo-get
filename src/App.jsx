import Explorer from "./components/explorer/Explorer"
import Request from "./components/request/Request"
import Response from "./components/response/Response"


function App() {
  return (
    <main style={{"minHeight": "100vh"}}>
      <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-md-3">
            <Explorer/>
          </div>
          <div className="col-md-4">
            <Request/>
          </div>
          <div className="col-md-5">
            <Response/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
