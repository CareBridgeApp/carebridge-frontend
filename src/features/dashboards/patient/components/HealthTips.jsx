import { Lightbulb } from "lucide-react"
import { healthTips } from '../../../../data/healthTips'
const getTipOfTheDay = () => {

  if (!healthTips.length) return null;

  const MS_PER_DAY = 86400000;

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dayNumber = Math.floor(Date.UTC(year, month, day) / MS_PER_DAY);
  return healthTips[dayNumber % healthTips.length];
}

const HealthTips = () => {
  const tip = getTipOfTheDay(new Date())
  return (
    <div className="p-2 text-center border overflow-hidden bg-green-200 border-green-600 rounded-xl">
      <div className="flex justify-center items-center gap-2">
        <Lightbulb className="h-5 w-5 text-text/70 fill-yellow-400" />
        <p className=" font-semibold text-green-700">Today's Healthy Tip</p>
      </div>
      <span className="text-text font-medium text-sm">- {tip}</span>

    </div>
  )
}

export default HealthTips

