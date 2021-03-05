import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SearchSchema = yup.object().shape({
    keyword: yup.string().required(),
});

const FormSearch = () => {
    const { register, handleSubmit, setValue, errors } = useForm({
        resolver: yupResolver(SearchSchema),
    });
    const onSubmit = data => {
        alert(JSON.stringify(data));
    };

    return <div id="form-global-search" className="d-flex flex-grow-1 ms-4 rounded">
        <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group position-relative">
                <input
                    type="text"
                    name="keyword"
                    className="form-control"
                    placeholder={errors.keyword ? "Please enter keyword to search" : "Search..." }
                    id="top-search"
                    ref={register}
                />
                <button type="submit"><i className="bi-search fs-md text-primary"></i></button>
            </div>
        </form>
    </div>
}

export default FormSearch;
