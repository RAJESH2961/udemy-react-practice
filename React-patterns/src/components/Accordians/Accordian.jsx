import { createContext, useContext, useState } from "react";

const AccordianContext = createContext();

export function useAccordianContext() {
    const ctx = useContext(AccordianContext);
    if (!ctx) {
        throw new Error("Accordian components must be wrapped with <Accordian>");
    }
    return ctx;
}

export default function Accordian({ children, className }) {
    const [openItemId, setOpenItemId] = useState(null); // null when nothing is open

    function openItem(id) {
        setOpenItemId(id);
    }

    function closeItem() {
        setOpenItemId(null);
    }

    const value = { openItemId, openItem, closeItem };

    return (
        <AccordianContext.Provider value={value}>
            <ul className={className}>
                {children}
            </ul>
        </AccordianContext.Provider>
    );
}
