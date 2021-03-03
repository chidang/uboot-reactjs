import { Link } from "react-router-dom";
import pic_1 from "../../../assets/images/natural/pic-1.jpg";
import pic_2 from "../../../assets/images/natural/pic-2.jpg";
import pic_3 from "../../../assets/images/natural/pic-3.jpg";
import pic_4 from "../../../assets/images/natural/pic-4.jpg";
import pic_5 from "../../../assets/images/natural/pic-5.jpg";
import pic_6 from "../../../assets/images/natural/pic-6.jpg";
import pic_7 from "../../../assets/images/natural/pic-7.jpg";
import pic_8 from "../../../assets/images/natural/pic-8.jpg";
import pic_9 from "../../../assets/images/natural/pic-9.jpg";
import pic_10 from "../../../assets/images/natural/pic-10.jpg";
import pic_11 from "../../../assets/images/natural/pic-11.jpg";
import pic_12 from "../../../assets/images/natural/pic-12.jpg";
import pic_13 from "../../../assets/images/natural/pic-13.jpg";
import pic_14 from "../../../assets/images/natural/pic-14.jpg";
import pic_15 from "../../../assets/images/natural/pic-15.jpg";
import pic_16 from "../../../assets/images/natural/pic-16.jpg";

const ImageList = () => {
    return (
        <>
            <div class="fs-sm mb-1"><b>IMAGE LIST</b></div>
            <div className="widget-image-list">
                <div className="d-flex p-1">
                    <div className="w-25">
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_1 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_2 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_3 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_4 + ")" }} /></Link>
                    </div>
                    <div className="w-25">
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_5 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_6 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_7 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_8 + ")" }} /></Link>
                    </div>
                    <div className="w-25">
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_9 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_10 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_11 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_12 + ")" }} /></Link>
                    </div>
                    <div className="w-25">
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_13 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_14 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_15 + ")" }} /></Link>
                        <Link className="widget-image-list-item" to="#"><span className="bg-image" style={{ backgroundImage: "url(" + pic_16 + ")" }} /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageList;
