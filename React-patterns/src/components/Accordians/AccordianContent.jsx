import { useAccordianContext } from "./Accordian";

export default function AccordianContent({ id, className, children }) {
    const { openItemId } = useAccordianContext();
    const isOpen = openItemId === id;

    if (!isOpen) return null;

    return (
        <div className={className}>
            {children}
        </div>
    );
}
