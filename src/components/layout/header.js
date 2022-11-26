import logo from '../../assets/logo.png'
/**
 * display header
 * @returns display header
 */
export function Header() {
    return (
        <header className="containerHeader">
            <div className='HorizontalBarre'>
                <img src={logo} className="App-logo" alt="logo" />
                <p className='headerText'>Accueil</p>
                <p className='headerText'>Profil</p>
                <p className='headerText'>Réglage</p>
                <p className='headerText'>Communauté</p>
            </div>
        </header>
    )
}