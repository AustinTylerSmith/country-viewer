export default function Header() {
    return (
        <>
            <div id={"headerContainer"}>
                <div id={"headerTitle"} className={"headerMargins"}>
                    Where in the world?
                </div>
                <div id={"darkModeContainer"} className={"headerMargins"}>
                    <img id={"darkMode"} src={process.env.PUBLIC_URL + '/darkMode.png'} alt={"MoonIcon"}/>
                    <div id={"themeMode"}>
                        Dark Mode
                    </div>
                </div>
            </div>
        </>
    )
}