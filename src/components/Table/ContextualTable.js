const ContextualTable = () => {
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
                    <th scope="row">1</th>
                    <td>PlayStation Store Gift Card</td>
                    <td>$10</td>
                    <td>100</td>
                    <td>$1,000</td>
                </tr>
                <tr className="table-primary">
                    <th scope="row">2</th>
                    <td>Water Sports Shoes</td>
                    <td>$13.68</td>
                    <td>100</td>
                    <td>$1,368</td>
                </tr>
                <tr className="table-secondary">
                    <th scope="row">3</th>
                    <td>Wireless Security Camera</td>
                    <td>$29.99</td>
                    <td>100</td>
                    <td>$2,999</td>
                </tr>
                <tr className="table-success">
                    <th scope="row">4</th>
                    <td>WiFi Sports Action Camera Ultra HD</td>
                    <td>$50</td>
                    <td>100</td>
                    <td>$5,000</td>
                </tr>
                <tr className="table-danger">
                    <th scope="row">3</th>
                    <td>Electronics Universal Smartphone</td>
                    <td>$6.99</td>
                    <td>100</td>
                    <td>$699</td>
                </tr>
                <tr className="table-warning">
                    <th scope="row">5</th>
                    <td>WD 4TB Elements Portable External Hard Drive</td>
                    <td>$89.99</td>
                    <td>100</td>
                    <td>$8,999</td>
                </tr>
                <tr className="table-info">
                    <th scope="row">6</th>
                    <td>Unlisted by Kenneth Cole Men's Dress Shirt Slim Fit Checks and Stripes</td>
                    <td>19.99</td>
                    <td>100</td>
                    <td>$1,999</td>
                </tr>
                <tr className="table-light">
                    <th scope="row">7</th>
                    <td>Unlisted by Kenneth Cole Men's Dress Shirt Slim Fit Checks and Stripes</td>
                    <td>19.99</td>
                    <td>100</td>
                    <td>$1,999</td>
                </tr>
                <tr className="table-dark">
                    <th scope="row">8</th>
                    <td>Unlisted by Kenneth Cole Men's Dress Shirt Slim Fit Checks and Stripes</td>
                    <td>19.99</td>
                    <td>100</td>
                    <td>$1,999</td>
                </tr>
                </tbody>
            </table>
            </div>
    );
}

export default ContextualTable;
