import { useCountdown } from "../Utility/useCountdown";

type TimerType= {
    time : string
}

export const ComponentTimerTile = ({time}:TimerType) => {
    const [days, hours, minutes, seconds]:number[] = useCountdown(time);
    if (days + hours + minutes + seconds <= 0) {
        return (
            <div className="flex justify-center items-center text-center text-red-500">Offer is Expired</div>
        );
      }
    return (
    <div className="flex gap-2">
        <div className="flex flex-col">
          {days} 
          <span className="text-light-tritary-text text-[12px]">day</span>
        </div>
        :
        <div className="flex flex-col">
          {hours} 
          <span className="text-light-tritary-text text-[12px]">Hour</span>
        </div>
        :
        <div className="flex flex-col">
          {minutes}
          <span className="text-light-tritary-text text-[12px]">min</span>
        </div>
        :
        <div className="flex flex-col">
          {seconds}
          <span className="text-light-tritary-text text-[12px]">sec</span>
        </div>
      </div>
  )
}
