const SmallTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-sm">
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
                <tr>
                    <th scope="row">2</th>
                    <td>Water Sports Shoes</td>
                    <td>$13.68</td>
                    <td>100</td>
                    <td>$1,368</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Wireless Security Camera</td>
                    <td>$29.99</td>
                    <td>100</td>
                    <td>$2,999</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SmallTable;
