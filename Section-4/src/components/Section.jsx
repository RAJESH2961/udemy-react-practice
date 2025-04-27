export default function Section({title,id,children}){
    return(
        <section id={id}>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
}
//This id is an time consuming process