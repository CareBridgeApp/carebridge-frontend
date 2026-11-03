import { Pill } from "lucide-react"

const COLOR_PALETTE = [
    { bg: "bg-blue-100", color: "text-blue-600" },
    { bg: "bg-emerald-100", color: "text-emerald-600" },
    { bg: "bg-amber-100", color: "text-amber-600" },
    { bg: "bg-purple-100", color: "text-purple-600" },
];
const MedicinesList = ({ medicines }) => {
    if (!medicines || medicines.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center p-4">
        <p className="text-text-muted font-semibold text-center">
          No Current medicines
        </p>
      </div>
    );
  }
    return (
        <div className="flex flex-col">
            {medicines?.map((med, index) => {
                const theme = COLOR_PALETTE[index % COLOR_PALETTE.length]

                return (
                    <div
                        key={med.id}
                        className="flex items-center gap-4 border-b border-border py-2">
                        <div className={`p-2 ${theme.bg} ${theme.color} rounded-xl`}>
                            <Pill className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-medium text-sm">{med.name}</span>
                            <span className="text-xs font-medium text-text-muted">{med.dosage}</span>
                        </div>

                    </div>
                )
            })}
        </div>


    )
}

export default MedicinesList
