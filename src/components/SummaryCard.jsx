import {Link} from "react-router-dom"

const SummaryCard = ({ title, viewAllTo, icon: Icon, children }) => {

    return (
        <div className='bg-surface p-3 border rounded-2xl border-border min-h-60 max-h-80 flex flex-col'>
            <div className="flex items-center justify-between border-b-2 border-border">
                <div className="p-2 flex items-center gap-2 min-w-0">
                    {Icon && <Icon className="h-5 w-5 text-primary" />}
                    <h3 className="text-text font-medium text-base sm:text-lg truncate">{title}</h3>
                </div>
                {viewAllTo && (<Link to={viewAllTo}
                    className="font-medium text-xs sm:text-sm text-primary hover:text-primary-dark active:scale-95 shrink-0 whitespace-nowrap">View All
                    </Link>)}
            </div>
            <main className="p-2 flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}

export default SummaryCard
