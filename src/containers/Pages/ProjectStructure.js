import { Link } from "react-router-dom";
import StructureImage from "../../assets/images/project-structure.jpg";

const ProjectStructure = () => 
<>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Page</span></li>
        <li className="breadcrumb-item active" aria-current="page">Project Structure</li>
      </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-4">
      <h1 className="header-title h3">
        <i className="bi-question-circle text-primary" /> Project Structure
      </h1>
    </div>
    <div className="card">
      <div className="card-body show">
      <img src={StructureImage} class="img-fluid" alt="Project Structure"/>
      </div>
    </div>
</>

export default ProjectStructure;
