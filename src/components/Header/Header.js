import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div style={{border: "1px solid #000", display: 'flex', justifyContent: "center", alignItems: "center"}}>
           <h1>CRUD com ReactJS</h1>
            <div>
                <button onClick={() => navigate('/home')}>Home</button>
                <button onClick={() => navigate('/')}>Page</button>
            </div>
        </div>
    );
};
