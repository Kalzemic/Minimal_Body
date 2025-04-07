import BackgroundImage from "./BackgroundImage";
import tabledata from './tabledata.json'
import './CalorieChart.css'
const CalorieChart = () => {
    return (
        <div className="image-container" style={{ width: "100vw", height: "100vh" }}>
            <BackgroundImage url="/minimal_body_1.png">
                <div className="page-content">
                    <div className="table-container">
                        <h2 className="table-title"></h2>
                        <div className="table-wrapper"></div>
                        <table className="table">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 p-2">מזון</th>
                                    <th className="border border-gray-300 p-2">קטגוריה</th>
                                    <th className="border border-gray-300 p-2">קלוריות (ל-100 גרם)</th>
                                    <th className="border border-gray-300 p-2">חלבון (ל-100 גרם)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabledata.map((row) => (
                                    <tr key={row.food} className="hover:bg-gray-50" >
                                        <td className="border border-gray-300 p-2 text-center">{row.food}</td>
                                        <td className="border border-gray-300 p-2">{row.category}</td>
                                        <td className="border border-gray-300 p-2">{row.calories}</td>
                                        <td className="border border-gray-300 p-2 text-center">{row.protein}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    );
}



export default CalorieChart;