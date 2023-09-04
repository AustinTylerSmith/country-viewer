import {useState} from "react";
import { getAllCountries } from "../services/countryService";

function Searchbar({updateSearchForState}) {

    return (
        <>
            <div id={"searchBarContainer"}>
                <img id={"searchIcon"} src={process.env.PUBLIC_URL + '/search.png'} alt={"search"}/>
                <input id={"searchInput"} type={"search"} placeholder={"Search for a country..."} onChange={(event) => {
                    updateSearchForState(event.target.value)
                }}/>
            </div>
        </>
    )
}

function FilterByRegion({updateFilterByState}) {
    return (
        <>
            <select defaultValue={""} name="region" id="regionNames" onChange={(event) => {
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

function FilterBar({ updateSearchForState, updateFilterByState }) {
    return (
        <>
            <div id={"filterBarContainer"}>
                <Searchbar updateSearchForState={updateSearchForState}></Searchbar>
                <FilterByRegion updateFilterByState={updateFilterByState}></FilterByRegion>
            </div>
        </>
    )
}

function CountryCard({country}) {
    return (
        <>
            <div id={"cardContainer"}>
                <img id={"countryFlag"} src={country.flags.png} alt={"countryFlag"}/>
                <div id={"countryInfoContainer"}>
                    <h3 id={"countryTitle"}>{country.name.common}</h3>
                    <div id={"population"} className={"flexContainer"}>
                        <h4 className={"countryInfo"}>Population:</h4> <span
                        className={"countrySpan"}>{country.population.toLocaleString()}</span>
                    </div>
                    <div id={"region"} className={"flexContainer"}>
                        <h4 className={"countryInfo"}>Region:</h4> <span
                        className={"countrySpan"}>{country.region}</span>
                    </div>
                    <div id={"capitol"} className={"flexContainer"}>
                        <h4 className={"countryInfo"}>Capital:</h4> <span
                        className={"countrySpan"}>{country.capital}</span>
                    </div>
                </div>
            </div>
        </>
    )

}

function CountryCardsListed({countries}) {
    return (
        <>
            {countries.map((country, index) => {
                return (
                    <CountryCard key={index} country={country}></CountryCard>
                )
            })}
        </>
    )
}

export default function HomePage() {
    const [searchFor, setSearchFor] = useState("")
    const [filterBy, setFilterBy] = useState("")
    const [countryArray, setCountryArray ] = useState([])

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
            <div className={"lightMode"}>
                <FilterBar updateSearchForState={updateSearchForState} updateFilterByState={updateFilterByState}></FilterBar>
                <div id={"countryCardsListedContainer"}>
                    <CountryCardsListed countries={filteredCountries(searchFor, filterBy)}></CountryCardsListed>
                </div>
            </div>
        </>
    )
}
