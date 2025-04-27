// //This id is an time consuming process
// export default function Section({title,id,children}){
//     return(
//         <section id={id}>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     );
// }


//Here the left over passed data apart from title are gropued into props and passed in section as props by using...
//The Incoming Objects are grouped into props and expanded in Section
export default function Section({title,children, ...props}){
    return(
        <section {...props}>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
}
