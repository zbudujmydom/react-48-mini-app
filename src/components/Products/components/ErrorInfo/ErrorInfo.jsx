const ErrorInfo = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <section>
      <h2>We have problem...</h2>
      <button onClick={handleClick}>Try again</button>
    </section>
  );
};

export default ErrorInfo;
