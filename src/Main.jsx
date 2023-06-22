import Hello from "./Hello";

function Main(props) {
  return (
    <main>
      <h1>
        <i className="bi bi-card-checklist"></i>Main
      </h1>
      <Hello name={props.appname} />

      <p>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
        dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
        fermentum massa justo sit amet.
      </p>
    </main>
  );
}
export default Main;
