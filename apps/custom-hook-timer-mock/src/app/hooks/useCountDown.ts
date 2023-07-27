import { isAfter } from 'date-fns';
import { useEffect, useState } from 'react';

interface UserBreakTimerProps {
  fromDate: Date;
  toDate: Date;
}
const second = 1000;
const secondInMinute = second * 60;
const secondInhour = secondInMinute * 60;
const secondInday = secondInhour * 24;

const countDown = (to: Date) => {
  const now = new Date();
  const timeSpan = now.getTime() - to.getTime();

  // optimize days/hours value if it's today date
  const daysInFloat = Math.abs(timeSpan / secondInday);
  const hoursInFloat = Math.abs((timeSpan % secondInday) / secondInhour);
  const minuteInFloat = Math.abs((timeSpan % secondInhour) / secondInMinute);

  /* istanbul ignore next */
  const days = daysInFloat > 0 ? Math.floor(daysInFloat) : 0;
  /* istanbul ignore next */
  const hours = hoursInFloat > 0 ? Math.floor(hoursInFloat) : 0;
  const minutes = Math.floor(minuteInFloat);
  const seconds = Math.abs(Math.floor((timeSpan % secondInMinute) / second));

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export const useCountDown = ({ fromDate, toDate }: UserBreakTimerProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerCompleted, setTimerComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const { days, hours, minutes,seconds } = countDown(toDate);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds)
      const now = new Date();

      if (isAfter(now, toDate) && !isTimerCompleted) {
        setTimerComplete(true);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [fromDate, toDate, isTimerCompleted]);

  return {
    days,
    hours,
    minutes,
    seconds,
    isTimerCompleted,
  };
};
