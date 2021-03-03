import { Link } from "react-router-dom";
import 'react-dual-listbox/lib/react-dual-listbox.css';
import Basic from './Basic';
import Optgroups from './Optgroups';
import Filtering from './Filtering';
import ChangingDefaultIcons from './ChangingDefaultIcons';

const DualListBoxes = () => {
    return  <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
                <li className="breadcrumb-item"><span>UI Kit</span></li>
                <li className="breadcrumb-item active" aria-current="page">Dual listbox</li>
            </ol>
        </nav>
        <div className="header mb-5">
            <h1 className="header-title h3">
                <i className="bi-star text-primary" /> Dual listbox <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
            </h1>
            <p className="mt-2">
            A feature-rich dual listbox for React.
            </p>
        </div>
        <Basic />
        <Optgroups />
        <Filtering />
        <ChangingDefaultIcons />
    </>
}

export default DualListBoxes;
