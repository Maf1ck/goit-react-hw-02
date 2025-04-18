import { useState, useEffect} from 'react';
import Description from './components/Description/Description';
import './App.css';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notifications/Notification';
import Option from './components/Options/Option';


function App() {
  const [counterGood, setCounterGood] = useState(() => Number(localStorage.getItem("counterGood")) || 0);
  const [counterBad, setCounterBad] = useState(() => Number(localStorage.getItem("counterBad")) || 0);
  const [counterNeutral, setCounterNeutral] = useState(() => Number(localStorage.getItem("counterNeutral")) || 0);

  useEffect(() => {
    localStorage.setItem("counterGood", counterGood);
    localStorage.setItem("counterNeutral", counterNeutral);
    localStorage.setItem("counterBad", counterBad);
  }, [counterGood, counterNeutral, counterBad]);
  
  const total = counterGood + counterNeutral + counterBad;

  const Reset = () => {
    setCounterGood(0);
    setCounterNeutral(0);
    setCounterBad(0);
  };
  
  const positive = Math.round((counterGood / total) * 100)

  return (
    <div>
      <Description />
      <Option
        onGood={() => setCounterGood((prev) => prev + 1)}
        onNeutral={() => setCounterNeutral((prev) => prev + 1)}
        onBad={() => setCounterBad((prev) => prev + 1)}
        onReset={Reset}
        total={total} />
      <Feedback
        counterGood={counterGood}
        counterNeutral={counterNeutral}
        counterBad={counterBad}
        positive={positive}
        total={total}
      />
      <Notification/>
    </div>
  );
}
export default App
