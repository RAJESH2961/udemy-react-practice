import {calculateInvestmentResults, formatter} from '../util/investment.js';
export default function Results({ input }){
    // console.log(input)
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    // console.log(resultData);
    
    return <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Intreast (Year)</th>
                <th>Total Intreast </th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData => {
                const totalIntreast = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountIntreasted = yearData.valueEndOfYear - totalIntreast;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalIntreast)}</td>
                    <td>{formatter.format(totalAmountIntreasted)}</td>
                </tr>
            })}
        </tbody>
    </table>;
}