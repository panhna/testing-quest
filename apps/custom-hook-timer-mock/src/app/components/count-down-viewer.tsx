import { useCountDown } from "../hooks/useCountDown";
interface CountDownViewerProps {
  from: Date,
  to: Date,
}

export const CountDownViewer = ({from: fromDate, to: toDate}:CountDownViewerProps) => {
  const {days, hours, minutes, seconds, isTimerCompleted} = useCountDown({
    fromDate,
    toDate
  });

  if (isTimerCompleted) {
    return (
      <h1>Countdown Completed!!</h1>
    );
  }

  return (
    <ul className="flex flex-row m-0 text-5xl justify-evenly items-end">
      <li className='text-right w-14 font-bold'>{days}</li>
      <li className="px-3 text-slate-400 text-xl">days</li>
      <li className='text-right w-14 font-bold'>{hours}</li>
      <li className="px-3 text-slate-400 text-xl">hours</li>
      <li className='text-right w-14 font-bold'>{minutes}</li>
      <li className="px-3 text-slate-400 text-xl">minutes</li>
      <li className='text-right w-14 font-bold'>{seconds}</li>
      <li className="px-3 text-slate-400 text-xl">seconds</li>
    </ul>
  );
};
