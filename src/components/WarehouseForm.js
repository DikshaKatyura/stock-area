import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { filterActions } from "../store/filterSlice";
import Button from "../UI/Button";
import Inputs from "../UI/Inputs";
import styles from "./WarehouseForm.module.css";

const WarehouseForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const warehouse = useSelector((state) => state.filter.filteredWarehouses);
  const loading = useSelector((state) => state.filter.loading);
  const nameRef = useRef("");
  const cityRef = useRef("");
  const clusterRef = useRef("");
  const spaceRef = useRef("");
  const registerRef = useRef(warehouse[0].is_registered);
  const statusRef = useRef(warehouse[0].is_live);

  useEffect(() => {
    dispatch(filterActions.filterById(+params.id));
    dispatch(filterActions.setLoading(false));
  }, [params, dispatch]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(filterActions.updateData({id : +params.id,data : {
     name:  nameRef.current.value,
      city : cityRef.current.value,
      cluster : clusterRef.current.value,
     space_available :  spaceRef.current.value,
    is_live :  statusRef.current.value === 'true' ? true : false,
      is_registered : registerRef.current.value === 'true' ? true : false
    }}));
    navigate(`/${params.id}`)
  };

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && (
        <form className={styles["form-container"]} onSubmit={submitFormHandler}>
          <h3>Edit Warehouse Details</h3>
          <Inputs
            details={{
              type: "text",
              id: "name",
              defaultValue: warehouse[0].name,
            }}
            ref={nameRef}
          />
          <Inputs
            details={{
              type: "text",
              id: "type",
              defaultValue: warehouse[0].type,
              disabled: true,
            }}
          />
          <Inputs
            details={{
              type: "text",
              id: "city",
              defaultValue: warehouse[0].city,
            }}
            ref={cityRef}
          />
          <Inputs
            details={{
              type: "text",
              id: "code",
              defaultValue: warehouse[0].code,
              disabled: true,
            }}
          />
          <Inputs
            details={{
              type: "text",
              id: "cluster",
              defaultValue: warehouse[0].cluster,
            }}
            ref={clusterRef}
          />
          <Inputs
            details={{
              type: "number",
              id: "space availability",
              defaultValue: warehouse[0].space_available,
            }}
            ref={spaceRef}
          />
          <div className={styles["radio-inputs"]}>
            <span>Status: </span>
            <select defaultValue={warehouse[0].is_live} ref={statusRef}>
              <option value="true">Active</option>

              <option value="false">In-Active</option>
            </select>
          </div>
          <div className={styles["radio-inputs"]}>
            <span>Registration: </span>
            <select defaultValue={warehouse[0].is_registered} ref={registerRef}>
              <option  value="true" >Registered</option>

              <option value="false">Not Registered</option>
            </select>
          </div>
          <div className={styles.btns}>
            <Button type="submit">Save</Button>
            <Link to={`..`} relative="path">
              <Button style={{ backgroundColor: "red" }}>Cancel</Button>
            </Link>
          </div>
        </form>
      )}
    </>
  );
};

export default WarehouseForm;
