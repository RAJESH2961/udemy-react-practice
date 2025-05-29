import { useAccordianContext } from "./Accordian"

export default function AccordianTitle({id,className, children}) {
    // getting toggleItem from useAccordianContext
    const { toggleItem } = useAccordianContext();
        function handleClick() {
        // if (isOpen) {
        //     closeItem();      // ✅ If already open, close it
        // } else {
        //     openItem(id);     // ✅ Otherwise, open this item
        // }
        toggleItem(id);
    }
    return <h3 className={className}
                onClick={handleClick}
                // className="cursor-pointer font-semibold text-blue-700"
            >{children}</h3>
}