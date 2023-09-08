import {useState} from "react";
import {getAllCountries} from "../services/countryService";

function Searchbar({updateSearchForState, themeMode}) {

    return (
        <>
            <div id={"searchBarContainer"}
                 className={themeMode ? 'lightModeElem lightModeBoxShadow' : 'drkModeElem drkModeBoxShadow'}>
                <img id={"searchIcon"} src={process.env.PUBLIC_URL + '/search.png'} alt={"search"}/>
                <input id={"searchInput"} type={"search"}
                       className={themeMode ? 'lightModeText lightModeElem' : 'drkModeText drkModeElem'}
                       placeholder={"Search for a country..."} onChange={(event) => {
                    updateSearchForState(event.target.value)
                }}/>
            </div>
        </>
    )
}

function FilterByRegion({updateFilterByState, themeMode}) {
    return (
        <>
            <select
                className={themeMode ? 'lightModeText lightModeElem lightModeBoxShadow' : 'drkModeText drkModeElem drkModeBoxShadow'}
                defaultValue={""} name="region" id="regionNames" onChange={(event) => {
                updateFilterByState(event.target.value)
            }}>
                <option value="" disabled={true}>Filter by Region</option>
                <option value="">None</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    )

}

function FilterBar({updateSearchForState, updateFilterByState, themeMode}) {
    return (
        <>
            <div id={"filterBarContainer"}>
                <Searchbar updateSearchForState={updateSearchForState} themeMode={themeMode}></Searchbar>
                <FilterByRegion updateFilterByState={updateFilterByState} themeMode={themeMode}></FilterByRegion>
            </div>
        </>
    )
}

function CountryCard({country, themeMode}) {
    return (
        <>
                <div className={themeMode ? 'lightModeElem lightModeBoxShadow' : 'drkModeElem drkModeBoxShadow'}
                     id={"cardContainer"}>
                    <img id={"countryFlag"} src={country.flags.png} alt={"countryFlag"}/>
                    <div id={"countryInfoContainer"}>
                        <h3 className={themeMode ? 'lightModeText' : 'drkModeText'}
                            id={"countryTitle"}>{country.name.common}</h3>
                        <div id={"population"} className={"flexContainer"}>
                            <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Population:</h4>
                            <span
                                className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{country.population.toLocaleString()}</span>
                        </div>
                        <div id={"region"} className={"flexContainer"}>
                            <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Region:</h4>
                            <span
                                className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{country.region}</span>
                        </div>
                        <div id={"capitol"} className={"flexContainer"}>
                            <h4 className={themeMode ? 'countryInfo lightModeText' : 'countryInfo drkModeText'}>Capital:</h4>
                            <span
                                className={themeMode ? 'countrySpan lightModeText' : 'countrySpan drkModeText'}>{country.capital}</span>
                        </div>
                    </div>
                </div>
        </>
    )

}

function CountryCardsListed({countries, themeMode }) {
    return (
        <>
            {countries.map((country, index) => {
                return (
                    <CountryCard key={index} country={country} themeMode={themeMode}></CountryCard>
                )
            })}
        </>
    )
}

export default function HomePage({ themeMode }) {
    const [searchFor, setSearchFor] = useState("")
    const [filterBy, setFilterBy] = useState("")
    const [countryArray, setCountryArray] = useState([])

    getAllCountries().then((response) => {
        setCountryArray(response)
    })

    function filteredCountries(searchFor, filterBy) {
        return countryArray.filter((country) => {
            return country.name.common.toLowerCase().includes(searchFor.toLowerCase()) && country.region.includes(filterBy)
        })
    }
    function updateSearchForState(search) {
        setSearchFor(search)
    }

    function updateFilterByState(filterBy) {
        setFilterBy(filterBy)
    }

    return (
        <>
            <div className={themeMode ? 'lightModeBackground' : 'drkModeBackground'}>
                <FilterBar updateSearchForState={updateSearchForState} updateFilterByState={updateFilterByState}
                           themeMode={themeMode}></FilterBar>
                <div id={"countryCardsListedContainer"}>
                    <CountryCardsListed countries={filteredCountries(searchFor, filterBy)} themeMode={themeMode}></CountryCardsListed>
                </div>
            </div>
        </>
    )
}
