import { createContext, useContext, useState } from "react";
import AccordianItem from "./AccordianItem";

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

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id)
    }

    // function openItem(id) {
    //     setOpenItemId(id);
    // }

    // function closeItem() {
    //     setOpenItemId(null);
    // }

    const contextValue = { openItemId, toggleItem };

    return (
        <AccordianContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordianContext.Provider>
    );
}

// preventing to use accordian in outside 
// use Accordian.Item instead of using  <AccordianItem /> in App.jsx
Accordian.Item = AccordianItem