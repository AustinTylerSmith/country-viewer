import {Link, useLocation} from "react-router-dom";

function BackButton() {
    return (
        <>
            <Link id={"backButton"} to={"/"}>
                <button>
                    Back
                </button>
            </Link>
        </>
    )
}

function CountryDetail({themeMode}) {
    const {state} = useLocation();

    function returnNativeName(nativeNameObj) {
        let propertyName = Object.keys(nativeNameObj)[0]
        return nativeNameObj[propertyName].official
    }

    return (
        <>
            <div id={"flexContainerDetail"}>
                <img id={"detailFlag"} src={state.flags.png} alt={"testing"}/>
                <div id={'detailsContainer'}>
                    <h1 className={themeMode ? 'lightModeText' : 'drkModeText'}>
                        {state.name.common}
                    </h1>
                    <div id={'detailPageInfoContainer'}>
                        <div id={"countryDetailsGroup"}>
                            <div id={'leftDetails'}>
                                <div className={"flexContainer"}>
                                    <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Native
                                        Name:</h4>
                                    <span
                                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{returnNativeName(state.name.nativeName)}</span>
                                </div>
                                <div className={"flexContainer"}>
                                    <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Population:</h4>
                                    <span
                                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.population.toLocaleString()}</span>
                                </div>
                                <div className={"flexContainer"}>
                                    <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Region:</h4>
                                    <span
                                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.region}</span>
                                </div>
                                <div className={"flexContainer"}>
                                    <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Sub
                                        Region:</h4> <span
                                    className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.subregion}</span>
                                </div>
                                <div className={"flexContainer"}>
                                    <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Capital:</h4>
                                    <span
                                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.capital}</span>
                                </div>
                            </div>
                            <div id={'rightDetails'}>
                                <div className={"flexContainer"}>
                                    <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Top
                                        Level
                                        Domain:</h4> <span
                                    className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{state.tld}</span>
                                </div>
                                <div className={"flexContainer"}>
                                    <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Currencies:</h4>
                                    <span
                                        className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>itterate through key value pairs smae as language</span>
                                </div>
                                <div className={"flexContainer"}>
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
                        <h4 className={themeMode ? 'lightModeText' : 'drkModeText'}>Border Countries:</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function DetailPage({themeMode}) {
    return (
        <>
            <div id={"detailPageContainer"} className={themeMode ? 'lightModeBackground' : 'drkModeBackground'}>
                <BackButton/>
                <CountryDetail themeMode={themeMode}/>
            </div>
        </>
    )
}

