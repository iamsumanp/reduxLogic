import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get10usersData } from "./redux/actions";

function App() {
  const { userData } = useSelector((state) => state.userDat);
  // const [userData,setUserData] = useState();

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(get10usersData());
    console.log("handleClickData", userData);
  };

  useEffect(() => {
    // dispatch(get10usersData());
    // console.log("userdata", userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <div>
      <button onClick={handleClick}>Click for data</button>
      <div>
        {userData
          ? userData.map((resp) => <div key={resp.id}>{resp.name}</div>)
          : null}
      </div>
    </div>
  );
}

export default App;
