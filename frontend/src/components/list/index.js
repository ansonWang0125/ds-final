function List({ children, className, ...restProps }) {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}
export default List;
