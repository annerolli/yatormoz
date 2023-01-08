export function TabPanel({ children, tabId = -1, activeTabId }) {
    return (
        <section
            id={`panel-${tabId}`} 
            role="tabpanel"
            tabIndex={0}
            hidden={activeTabId !== tabId}
            aria-labelledby={`tab-${tabId}`}>
            {children}
        </section>
    );
}
