import { Calendar, MapPin } from "lucide-react";
import { formatDateTime } from "../../../../utils/formatDate";
const STATUS_STYLES = {
  CONFIRMED: "bg-green-100 text-green-700",
  PENDING: "bg-amber-100 text-amber-700",
};

const AppointmentInfo = ({ appointments }) => {

  if (!appointments || appointments.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center p-4">
        <p className="text-text-muted font-semibold text-center">
          No Upcoming appointments
        </p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col gap-2 w-full overflow-hidden">
      {appointments?.map((appointment) => {
        const statusTheme = appointment.status == 'confirmed' ? STATUS_STYLES['CONFIRMED'] : STATUS_STYLES['PENDING'];
        return (
          <div
            key={appointment.id}
            className="p-3 flex justify-between items-start gap-2 bg-bg rounded-2xl border border-border/50 w-full overflow-hidden"
          >
            <div className="flex gap-3 flex-1 min-w-0">
              <img
                className="h-10 w-10 rounded-full object-cover shrink-0"
                src="https://imgs.search.brave.com/UsPLqohNhMcDseR2O4sS2PrttEsIDyR9n_uiAAbMjhk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzQv/OTg2Lzc4NS9zbWFs/bC9wcm9maWxlLWlj/b24tc3RvY2staWxs/dXN0cmF0aW9uLWZy/ZWUtdmVjdG9yLmpw/Zw"
                alt={appointment.doctorName}
              />

              <div className="flex flex-col flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-text leading-tight truncate">
                  {appointment.doctorName}
                </h4>
                <span className="text-xs font-medium text-text-muted leading-tight truncate">
                  {appointment.specialization}
                </span>

                <div className="mt-2 flex flex-col gap-1 text-text-muted min-w-0">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span className="text-xs font-medium truncate">
                      {formatDateTime(appointment.dateTime)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 min-w-0">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="text-xs font-medium truncate">
                      {appointment.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className={`text-[10px] sm:text-xs font-medium ${statusTheme} py-1 px-2 rounded-full shrink-0 whitespace-nowrap self-start`}>
              {appointment.status}
            </span>
          </div>
      )})}
    </div>
  );
};

export default AppointmentInfo;