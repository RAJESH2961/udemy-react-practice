export default function Input({label, textArea, ...props}){
    return <p>
        <label htmlFor="">{label}</label>
        {textArea ? <textArea {...props}/> : <input {...props} />}
    </p>
}