import Input from "./Input"
export default function NewProject(){
    return <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <Input label="Title"/>
            {/* <Input label="Description" textArea={true}/> //text area will be true if it is decalred like this  */}
            {/* //text area will be true if it is decalred like this both are true */}
            <Input label="Description" textArea/> 
            <Input label="Due Date"/>

        </div>
    </div>
}