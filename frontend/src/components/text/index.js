const sizeClasses = {};

function Text({ children, className = "", size, as, ...restProps }) {
  const Component = as || "p";

  return (
    <Component className={`text-left ${className} ${size && sizeClasses[size]}`} {...restProps}>
      {children}
    </Component>
  );
}

export default Text;
