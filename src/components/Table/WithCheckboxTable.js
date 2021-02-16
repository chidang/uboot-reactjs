const WithCheckboxTable = () => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col" />
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Amout</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <label className="custom-checkbox">
                        <input type="checkbox" />
                        <span />
                    </label>
                    </td>
                    <td>PlayStation Store Gift Card</td>
                    <td>$10</td>
                    <td>100</td>
                    <td>$1,000</td>
                </tr>
                <tr>
                    <td>
                    <label className="custom-checkbox">
                        <input type="checkbox" defaultChecked />
                        <span />
                    </label>
                    </td>
                    <td>Water Sports Shoes</td>
                    <td>$13.68</td>
                    <td>100</td>
                    <td>$1,368</td>
                </tr>
                <tr>
                    <td>
                    <label className="custom-checkbox custom-checkbox-success">
                        <input type="checkbox" />
                        <span />
                    </label>
                    </td>
                    <td>Wireless Security Camera</td>
                    <td>$29.99</td>
                    <td>100</td>
                    <td>$2,999</td>
                </tr>
                <tr>
                    <td>
                    <label className="custom-checkbox custom-checkbox-danger">
                        <input type="checkbox" />
                        <span />
                    </label>
                    </td>
                    <td>WiFi Sports Action Camera Ultra HD</td>
                    <td>$50</td>
                    <td>100</td>
                    <td>$5,000</td>
                </tr>
                <tr>
                    <td>
                    <label className="custom-checkbox custom-checkbox-bold custom-checkbox-danger">
                        <input type="checkbox" />
                        <span />
                    </label>
                    </td>
                    <td>Electronics Universal Smartphone</td>
                    <td>$6.99</td>
                    <td>100</td>
                    <td>$699</td>
                </tr>
                <tr>
                    <td>
                    <label className="custom-checkbox custom-checkbox-solid-warning">
                        <input type="checkbox" />
                        <span />
                    </label>
                    </td>
                    <td>WD 4TB Elements Portable External Hard Drive</td>
                    <td>$89.99</td>
                    <td>100</td>
                    <td>$8,999</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default WithCheckboxTable;
