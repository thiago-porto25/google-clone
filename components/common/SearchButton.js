export default function SearchButton({ children, ...props }) {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
