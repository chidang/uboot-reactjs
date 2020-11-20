const FormSearch = () => 
    <div id="form-global-search" className=" d-flex flex-grow-1 ml-4 rounded">
        <form className="w-100">
            <div className="input-group position-relative">
                <input type="text" className="form-control" placeholder="Search..." id="top-search"/>
                <button type="submit">
                <i className="bi-search fs-md text-primary"></i>
                </button>
            </div>
        </form>
    </div>

export default FormSearch;