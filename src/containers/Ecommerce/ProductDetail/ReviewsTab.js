import avatar from "../../../assets/images/avatar.jpg";
import femaleAvatar from "../../../assets/images/default-female-avatar.jpg";

const ReviewsTab = () => {
    return (
        <div>
            <div className="comments">
            <h4 className="product-tab-title">2 Review For <span>T-Shirt Form Girls</span></h4>
            <ul className="list-none comment-list mt-4">
                <li className="d-flex flex-row">
                <div className="comment-img me-3">
                    <img src={avatar} style={{height: '60px'}} alt="User" className="rounded" />
                </div>
                <div className="comment-block">
                    <div className="rating-wrap float-end">
                    <div className="rating">
                        <div className="product-rate" style={{width: '80%'}} />
                    </div>
                    </div>
                    <div className="customer-meta">
                    <span className="review-author fw-700 d-block">Schirsten Vander</span>
                    <span className="comment-date"><i>March 5, 2020</i></span>
                    </div>
                    <div className="description">
                    <p>Duis interdum gravida erat eu congue. Aenean malesuada sapien risus, sed lacinia dui sodales venenatis. Sed vitae felis vitae dolor consequat semper. Vestibulum hendrerit nulla justo, et hendrerit nibh accumsan et. Sed faucibus erat id eleifend accumsan.</p>
                    </div>
                </div>
                </li>
                <li className="d-flex flex-row">
                <div className="comment-img me-3">
                    <img src={femaleAvatar} style={{height: '60px'}} alt="" className="rounded" />
                </div>
                <div className="comment-block">
                    <div className="rating-wrap float-end">
                    <div className="rating">
                        <div className="product-rate" style={{width: '60%'}} />
                    </div>
                    </div>
                    <div className="customer-meta">
                    <span className="review-author fw-700 d-block">Robert Nordic</span>
                    <span className="comment-date"><i>Apr 5, 2020</i></span>
                    </div>
                    <div className="description">
                    <p>Praesent tristique ex sit amet ante sodales, vel dignissim nisl laoreet. Nunc sit amet orci dolor. Duis sit amet porttitor diam. Sed nisi sapien, lobortis eget lacus vitae, tincidunt dapibus mauris.</p>
                    </div>
                </div>
                </li>
            </ul>
            </div>
        </div>
    );
  };
  
export default ReviewsTab;
