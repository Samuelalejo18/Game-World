/* eslint-disable react/prop-types */
const ButtonList = ({ companies, filtrerCompany }) => {


    return (
        <>
            <div className="container2">
                <div className="controls">
                    {companies.map(company => (

                        <button onClick={() => filtrerCompany(company)} key={company} type="button" className="control" >
                            {company}
                        </button>

                    ))}
                </div>

            </div>


        </>
    )
}
export default ButtonList;
