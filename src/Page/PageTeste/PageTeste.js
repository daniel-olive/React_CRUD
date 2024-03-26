import { Link } from "react-router-dom";

export const PageTeste = () => {
    return (
        <div>
            <h1>Page Teste</h1>
            <Link to={'/home'}>Home</Link>
        </div>
    );
};
