export default function Header({themeMode, clickThemeMode}) {
    return (
        <>
            <div id={"headerContainer"} className={themeMode ? 'lightModeElem' : 'drkModeElem'}>
                <div id={"headerTitle"} className={themeMode ? 'lightModeText headerMargins' : 'drkModeText headerMargins'}>
                    Where in the world?
                </div>
                <div id={"darkModeContainer"} className={"headerMargins"}>
                    <button id={"darkModeButton"} className={themeMode ? 'lightModeElem' : 'drkModeElem'}
                            onClick={clickThemeMode}>
                        {themeMode ?
                            <div id={"themeMode"} className={themeMode ? 'lightModeText' : 'drkModeText'}>
                                Dark Mode
                            </div>
                            :
                            <div id={"themeMode"} className={themeMode ? 'lightModeText' : 'drkModeText'}>
                                Light Mode
                            </div>
                        }
                    </button>
                </div>
            </div>
        </>
    )
}