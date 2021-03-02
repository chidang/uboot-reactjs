import { Link } from "react-router-dom";

const InternalServerError = () => 
<>
    <div class="d-flex header justify-content-between mb-2">
        <h1 class="header-title h3">
            <i class="bi-exclamation-triangle text-primary"></i> Internal Server Error
        </h1>
        </div>
        <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-lg-5">
            <div class="text-center m-auto">
                <div class="mb-3 text-danger"><i class="bi-exclamation-triangle fs-xxl"></i></div>
                <p class="text-muted mb-4">Something went wrong!</p>
            </div>
            <div class="mb-0 text-center"> <Link to="/" class="text-primary"> <i class="bi-house"></i> <span>Back to Dashboard</span></Link> </div>
            </div>
        </div>
    </div>
</>

export default InternalServerError;
