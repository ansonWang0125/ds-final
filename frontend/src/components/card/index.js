export default function Card({ children, className, ...restProps }) {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}
