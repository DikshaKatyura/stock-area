
import { filterActions } from '../store/filterSlice';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
const Header = () =>{
    const input = useSelector(state => state.filter.input);
    const dispatch = useDispatch();
    const inputChangeHandler = (event) =>{
        dispatch(filterActions.searchInput(event.target.value));
    }

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>WareHouse Management</h1>
                <div>
                    <input type="text" placeholder="search by name..." value={input} onChange={inputChangeHandler}/>
                </div>
            </div>
        </header>
    )
}

export default Header;