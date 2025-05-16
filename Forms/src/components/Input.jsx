export default function Input ({ label, id,error, ...props }) {
    return (
        <div className="control no-margin">
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            {...props}
          />
          {/* Error message shown only if email is invalid and blurred */}
          <div className="control-error">
            {error && <p className="control-error">{error}</p>}
          </div>
        </div>
    )
}