
function Searchbar() {

}

function FilterByRegion() {

}
function FilterBar() {
    return (
        <>
            <Searchbar></Searchbar>
            <FilterByRegion></FilterByRegion>
        </>
    )
}
function CountryCard() {

}

function CountryCardsListed() {
    return (
        <>
        </>
    )
}

function HomePage() {
    return (
        <>
            <div className={"lightMode"}>
                <FilterBar></FilterBar>
                <CountryCardsListed></CountryCardsListed>
            </div>
        </>
    )
}
