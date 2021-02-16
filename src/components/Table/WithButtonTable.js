const WithButtonTable = () => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amout</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>PlayStation Store Gift Card</td>
                    <td>$10</td>
                    <td>100</td>
                    <td>$1,000</td>
                    <td>
                    <ul className="list-unstyled table-actions">
                        <li><a href="edit-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>Water Sports Shoes</td>
                    <td>$13.68</td>
                    <td>100</td>
                    <td>$1,368</td>
                    <td>
                    <ul className="list-unstyled table-actions">
                        <li><a href="edit-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>Wireless Security Camera</td>
                    <td>$29.99</td>
                    <td>100</td>
                    <td>$2,999</td>
                    <td>
                    <ul className="list-unstyled table-actions">
                        <li><a href="edit-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>WiFi Sports Action Camera Ultra HD</td>
                    <td>$50</td>
                    <td>100</td>
                    <td>$5,000</td>
                    <td>
                    <ul className="list-unstyled table-actions">
                        <li><a href="edit-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>Electronics Universal Smartphone</td>
                    <td>$6.99</td>
                    <td>100</td>
                    <td>$699</td>
                    <td>
                    <ul className="list-unstyled table-actions">
                        <li><a href="edit-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td>WD 4TB Elements Portable External Hard Drive</td>
                    <td>$89.99</td>
                    <td>100</td>
                    <td>$8,999</td>
                    <td>
                    <ul className="list-unstyled table-actions">
                        <li><a href="edit-product.html"><i className="bi-pencil" data-original-title="Edit" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-gear" data-original-title="Settings" data-toggle="tooltip" /></a></li>
                        <li><a href="#"><i className="bi-trash" data-original-title="Archive" data-toggle="tooltip" /></a></li>
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WithButtonTable;