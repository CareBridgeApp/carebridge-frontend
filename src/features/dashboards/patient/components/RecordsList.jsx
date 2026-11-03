import { FileText, ChevronRight} from "lucide-react"
import { Link } from "react-router-dom";
import { formatDateTime } from "../../../../utils/formatDate";
const COLOR_PALETTE = [
  { bg: "bg-blue-100", color: "text-blue-600" },
  { bg: "bg-emerald-100", color: "text-emerald-600" },
  { bg: "bg-amber-100", color: "text-amber-600" },
  { bg: "bg-purple-100", color: "text-purple-600" },
];

const RecordsList = ({ records }) => {
  if (!records || records.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center p-4">
        <p className="text-text-muted font-semibold text-center">
          No records available
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      {records?.map((record, index) => {
        const theme = COLOR_PALETTE[index % COLOR_PALETTE.length];

        return (
          <div 
          key={record.id}
          className="p-2 flex gap-3 items-center border-b border-border">
            <div className={`p-2 rounded-xl ${theme.bg} ${theme.color} shrink-0`}>
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-medium truncate text-text text-sm">{record.title}</span>
              <span className="text-xs text-text-muted font-medium truncate">{formatDateTime(record.dateTime)}</span>
            </div>
            <Link to={'/patient-dashboard/medical-records'}
            className="ml-auto shrink-0 active:scale-95 hover:text-primary">
            <ChevronRight className="h-5 w-5" />
            </Link>
            
          </div>
        )
      })}

    </div>
  )
}

export default RecordsList
