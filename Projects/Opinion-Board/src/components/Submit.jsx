import { useFormStatus } from 'react-dom';
import Spinner from './Spinner';

export default function Submit() {
    const { pending } = useFormStatus();
    return(
        <p className="actions">
       <button type="submit" disabled={pending} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      {pending ? (
        <>
          <Spinner size={16} /> Submitting…
        </>
      ) : (
        'Submit'
      )}
    </button>       
        </p>
    )

}