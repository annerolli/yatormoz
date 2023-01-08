import "./Tabs.css"

export function Tabs({ children }) {
    return (
        <div 
            role="tablist"
            className="Tabs">
            {children}
        </div>
    )
}