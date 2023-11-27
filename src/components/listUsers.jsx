import { readcookie } from "../utils/utilities";

function Listusers(props) {
    async function getListOfUsers(setUserList, userList) {
        try {
            const jwt_token = await readcookie("jwt_token");
            const response = await fetch(
                "http://localhost:5001/listAllUsers",
                {
                    method: "GET",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${jwt_token}`
                    }
                }
            );
            const data = await response.json();
            setUserList(data.details)
            console.log(data.details);
        } catch (error) {
            
        }
    }

    function handleClick(event) {
        getListOfUsers(props.setUserList, props.userList)
    }

    function handleOffClick(event) {
        props.setUserList([]);
    }


    return (
        <div class="listAllUsersPart">
            <hr />
            <h2>List all users</h2>
            <button onClick={handleClick}>Press for List</button>
            <button onClick={handleOffClick}>Press to hide</button>
            <p>The user list is as follows:</p>
            <br></br>
            {props.userList && props.userList.map((item,index) => {return(
                <div>
                    <h3>{item.email}</h3>
                </div>
            )})}
            <hr />
        </div>
    )
};

export default Listusers;