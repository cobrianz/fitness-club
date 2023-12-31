import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/programs';
import Reasons from './components/Reasons/Reasons';
import Footer from './components/footer/Footer';
import Join from './components/join/Join';
import Testimonial from './components/testimonials/Testimonial';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonial/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
