import { Link } from "react-router-dom";

function Error() {
    return (
        <section id="error">
            <div className="container">
                <div className="heading">
                    <h2>Page Not Found</h2>
                </div>
                <div className="description">
                    <h4>The url might be mispelled or doesn't exist</h4>
                </div>
                <div className="links">
                    <Link to="/">Go to Homepage &rarr;</Link>
                    <Link to="/">&larr; Go Back</Link>
                </div>
            </div>
        </section>
    );
}

export default Error;