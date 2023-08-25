export default function Header() {
    return (
        <>
            <div id={"headerContainer"}>
                <div id={"headerTitle"}>
                    Where in the world?
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/moon.png'} alt={"MoonIcon"}/>
                    <div id={"themeMode"}>
                        Dark Mode
                    </div>
                </div>
            </div>
        </>
    )
}