import { useAccordianContext } from "./Accordian";

export default function AccordianItem({ id, title, children, className = "" }) {
    const { openItemId, openItem, closeItem } = useAccordianContext();
    const isOpen = openItemId === id;

    function handleClick() {
        if (isOpen) {
            closeItem();      // ✅ If already open, close it
        } else {
            openItem(id);     // ✅ Otherwise, open this item
        }
    }

    return (
        <li className={`border p-3 my-2 rounded ${className}`}>
            <h3
                onClick={handleClick}
                className="cursor-pointer font-semibold text-blue-700"
            >
                {title}
            </h3>
            {isOpen && (
                <div className="mt-2 text-gray-600">
                    {children}
                </div>
            )}
        </li>
    );
}
