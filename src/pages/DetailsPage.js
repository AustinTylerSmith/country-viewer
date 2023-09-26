import {Link, useLocation} from "react-router-dom";

function BackButton() {
    return (
        <>
            <Link to={"/"}>
                <button>
                    Back
                </button>
            </Link>
        </>
    )
}

function CountryDetail({themeMode}) {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
            <img id={"detailFlag"} src={state.flags.png} alt={"testing"}/>
            <div id={'detailsContainer'}>
                <h1>
                    {state.name.common}
                </h1>
                <div id={'detailPageInfoContainer'}>
                    <div id={'leftDetails'}>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Native
                            Name:</h4> <span
                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>Native Name</span>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Population:</h4>
                        <span
                            className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.population.toLocaleString()}</span>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Region:</h4>
                        <span
                            className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.region}</span>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Sub
                            Region:</h4> <span
                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.subregion}</span>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Capital:</h4>
                        <span
                            className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.capital}</span>
                    </div>
                    <div id={'rightDetails'}>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Top Level
                            Domain:</h4> <span
                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.tld}</span>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Currencies:</h4>
                        <span
                            className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>itterate through key value pairs smae as language</span>
                        <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Languages:</h4>
                        {Object.entries(state.languages).map(([code, name], key, arr) => {
                            const comma = key < arr.length - 1 ? ', ' : '';
                            return (
                                <span
                                    key={code}
                                    className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>
                                    {name + comma}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}

export default function DetailPage({ themeMode }) {
    return (
        <>
            <BackButton/>
            <CountryDetail themeMode={themeMode}/>
        </>
    )
}

