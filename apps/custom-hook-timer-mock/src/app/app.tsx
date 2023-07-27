// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { CountDownViewer } from './components/count-down-viewer';
import { useWindowSize } from './hooks/useWindowSize';
import {sub, add} from 'date-fns';

export function App() {
  const width = useWindowSize();
  const now = new Date('July 27, 2023');
  const fromDate = sub(now, {
      days: 1,
      hours: 5,
      minutes: 20,
    });
  const toDate = add(now, {
    days: 5,
    hours: 5,
    minutes: 20,
  });;

  return (
    <div className='flex flex-col h-screen justify-center items-center bg-slate-100'>
      <h1 className='text-4xl mb-10'><b>Custom Hook & Timer Mock</b></h1>
      <div
          style={{
            width: width/3,
            minWidth: 660,
            height: 200
          }}
          className='shadow-xl bg-white rounded-lg flex justify-center items-center'
        >
          <CountDownViewer from={fromDate} to={toDate} />
      </div>
    </div>

  );
}

export default App;
