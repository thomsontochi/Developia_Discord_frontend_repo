import {BrowserRouter as Router, Routes} from 'react-router-dom';
import "./App.css";
import {AllRoutes} from "./utils/routes.jsx";

function App() {
  return (
      <>
    {/*<Router>*/}
    {/*  <div className="site-wrap">*/}
    {/*    <Header />*/}
    {/*    <Hero/>*/}
    {/*    <Product/>*/}
    {/*     <Routes>*/}
    {/*      <Route path="/" element={<Home />} />*/}

    {/*    </Routes>*/}
    {/*    <Footer />*/}
    {/*  </div>*/}
    {/*</Router>*/}
<Router>
    <Routes>{AllRoutes}</Routes>
</Router>
      </>
  );
}

export default App;