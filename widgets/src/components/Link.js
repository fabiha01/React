const Link = ( {className, href, children} ) => {
  const onClick = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return <a onClick={onClick} className={className} href={href}>{children}</a>
};
 
export default Link;