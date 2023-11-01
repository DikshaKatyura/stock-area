import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterOptions.module.css";
import { filterActions } from "../store/filterSlice";
import Modal from "../UI/Modal";
import img from '../assets/cancel.png';
import { dataActions } from "../store/dataSlice";


const FilterOptionsMob = () =>{
    const dispatch = useDispatch();
    const cities = useSelector((state) => state.data.cities);
    const clusters = useSelector((state) => state.data.clusters);
    const spaces = useSelector((state) => state.data.spaces);
  
   return( 
   <Modal>
    <div className={styles.cancel}><img src={img} alt="cancel button" onClick={()=>{dispatch(dataActions.setShowModal())}}/></div>
<div className={styles.filterContainer}>
      <div className={styles.filterName_container_mob}>
        <div className={styles.filterName}>
          <h4>City</h4>
          <div>
            {cities.map((city) => (
              <p
                key={city}
                onClick={() => {
                  dispatch(filterActions.filterByCity(city));
                  dispatch(dataActions.setShowModal())
                }}
              >
                {city}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.filterName}>
          <h4>Cluster</h4>
          <div>
            {clusters.map((cluster) => (
              <p
                key={cluster}
                onClick={() => {
                  dispatch(filterActions.filterByCluster(cluster));
                  dispatch(dataActions.setShowModal())
                }}
              >
                {cluster}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.filterName}>
          <h4>Space Availability Linit</h4>
          <div>
            {spaces.map((space) => (
              <p
                key={space}
                onClick={() => {
                  dispatch(filterActions.filterBySpace(space));
                  dispatch(dataActions.setShowModal())
                }}
              >
                {space}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Modal>)

}

export default FilterOptionsMob;