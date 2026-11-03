import { formatDate } from "../../../../utils/formatDate";
const ReportsList = ({ reports }) => {
    if (!reports || reports.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center p-4">
        <p className="text-text-muted font-semibold text-center">
          No Upcoming appointments
        </p>
      </div>
    );
  }
    return (
        <div className="flex flex-col">
            {reports?.map((report) => (
                <div
                    key={report.id}
                    className="p-2 border-b border-border flex justify-between items-center">

                    <div className="flex flex-col gap-0.5 min-w-0">
                        <h4 className="text-sm font-medium leading-tight truncate">{report.title}</h4>
                        <span className="text-xs font-medium text-text-muted">{report.doctorName}</span>
                    </div>

                    <span className="text-xs text-text-muted font-medium shrink-0 whitespace-nowrap">{formatDate(report.date)}</span>

                    <span className="text-xs py-1 px-3 border rounded-2xl bg-primary/20 border-transparent text-primary font-medium shrink-0 whitespace-nowrap">{report.type}</span>
                </div>
            ))}
        </div>

    )

}

export default ReportsList
