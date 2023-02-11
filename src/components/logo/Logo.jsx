export default function Logo({type}) {
  return (
    <>
      {type === "muted" ? (
        <img src="/images/logo-muted.svg" />
      ) : (
        <img src="/images/logo.svg" />
      )}
    </>
  );
}