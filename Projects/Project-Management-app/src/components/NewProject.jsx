import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal";
export default function NewProject({onAdd}){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        //form valitaiton userinput validation
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate === ''){
            // show error modal
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return(
    <>
    <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>OOps ... looks you forgot value</p>
    </Modal>
     <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button></li>
        </menu>
        <div>
            <Input type="text"  ref={title} label="Title"/> 
            {/* <Input label="Description" textArea={true}/> //text area will be true if it is decalred like this  */}
            {/* //text area will be true if it is decalred like this both are true */}
            <Input ref={description} label="Description" textArea/> 
            <Input type="date" ref={dueDate} label="Due Date" />

        </div>
    </div>
    </>
    );
}