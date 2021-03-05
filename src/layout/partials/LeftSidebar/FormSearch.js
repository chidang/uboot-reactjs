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

    return <div className="nav-filter align-items-center justify-content-center flex-row mb-4 p-2">
        <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                name="keyword"
                className="w-100 form-control"
                tabIndex="0"
                placeholder={errors.keyword ? "Please enter keyword" : "Quick search..." }
                ref={register}
            />
        </form>
    </div>
}

export default FormSearch;
