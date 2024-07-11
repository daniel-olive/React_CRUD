
import { Form } from "../Form/Form";
import { useParams } from "react-router-dom";

export const Update = () => {
    const { id } = useParams();

    return (
        <div>
            <Form id={id} />
        </div>
    );
};
