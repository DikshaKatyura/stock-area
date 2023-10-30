import styles from './Header.module.css';
const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>WareHouse Management</h1>
                <div>
                    <input type="text" placeholder="search" />
                </div>
            </div>
        </header>
    )
}

export default Header;