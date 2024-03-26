
import { Form } from "../Form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { catalogosUpdate } from "../../utils/api";

export const Update = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const req = catalogosUpdate()

    const handleUpdate = async (data) => {
        return await req.putData(id, data),
        navigate('/home')
    };

    return (
        <div>
            <Form onAction={handleUpdate} />
        </div>
    );
};
