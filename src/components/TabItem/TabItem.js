import "./TabItem.css"

export function TabItem({ selected = false, children, tabId = -1, onClick }) {
    return (
        <button
            id={`tab-${tabId}`}
            aria-controls={`panel-${tabId}`}
            aria-selected={selected}
            tabIndex={selected ? 0 : -1}
            role="tab"
            className="TabItem"
            onClick={onClick}
            >
            {children}
        </button>
    )
}