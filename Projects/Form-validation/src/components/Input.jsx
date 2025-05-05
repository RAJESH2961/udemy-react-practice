// import {styled} from 'styled-components';

// const Label = styled.label`
//  display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color:${({$invalid})=> $invalid ? '#f87171' : '#6b7280'};
// `
// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({ $invalid }) => $invalid ? '#fed3d2' : '#d1d5db' };
//   color: ${({ $invalid }) => $invalid ? '#ef4444' : '#374151' };
//   border: 1px solid ${({ $invalid }) => $invalid ? '#f73f3f' : 'transparent' };
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
//               0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

// export default function CustomInput({label, invalid, ...props}){
//     return <p>
//         <Label $invalid={invalid}>{label}</Label>
//         <Input $invalid={invalid} {...props} />
//     </p>
// }


export default function Input({ label, invalid, ...props }) {
  // Label color based on validity
  const labelClasses =
    'block mb-2 text-xs font-bold tracking-wide uppercase ' +
    (invalid ? 'text-red-500' : 'text-stone-300');

  // Input border color based on validity
  const inputClasses =
    'w-full px-3 py-2 leading-tight text-gray-700 rounded shadow bg-stone-100 border ' +
    (invalid ? 'border-red-500 focus:outline-red-500' : 'border-stone-300 focus:outline-stone-500');

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
