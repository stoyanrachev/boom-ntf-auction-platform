function Logo(props) {
  return (
    <>
      {props.type === "muted" ? (
        <img src="/images/logo-muted.svg" />
      ) : (
        <img src="/images/logo.svg" />
      )}
    </>
  );
}

export default Logo;
