import { Link } from "react-router-dom";


function NotFound() {

  return (

    <main className="not-found">

      <div className="container">

        <p className="eyebrow">
          404
        </p>

        <h1>
          Page not found
        </h1>

        <Link to="/">
          ← Back Home
        </Link>

      </div>

    </main>

  );

}

export default NotFound;