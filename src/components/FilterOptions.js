import styles from './FilterOptions.module.css';
const FilterOptions = () =>{
return(
    <div className={styles.filterContainer}>
            <h3>Filter By:</h3>
            <div className={styles.filterName}>
            <div>Name</div>
            <div>Cluster</div>
            <div>Space available limit</div>
            </div>
        </div>
)
}

export default FilterOptions;