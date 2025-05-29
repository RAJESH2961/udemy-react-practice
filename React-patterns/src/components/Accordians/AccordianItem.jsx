
export default function AccordianItem({children, className = "" }) {
    return (
        <li className={`border p-3 my-2 rounded ${className}`}>
            {children}
        </li>
    );
}
