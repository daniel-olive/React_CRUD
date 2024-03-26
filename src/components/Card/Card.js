import { useNavigate } from 'react-router-dom';
import '../../App.css';

export const Card = ({ item, OnDelete }) => {
    const navigate = useNavigate();
    const handleDelete = () => {
        OnDelete(item)
    }

    return (
        <>
            <div className='lista'>
                <h3>{item.nome}</h3>
                <div>
                    <p onClick={handleDelete} className='excluir'>Delete</p>
                    <p onClick={() => navigate(`/updateCatalogo/${item.id}`)} className='editar'>Editar</p>
                </div>
            </div>
        </>
    );
};
