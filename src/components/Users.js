import User from "./User"

const Users =( { users } )=> {

    const userComponents = users.map(user => {
        return <User 
                    key={user.user_id}
                    lastName={user.lName}
                    firstName={user.fName}
                    username={user.username}
                    email={user.email}
                    dateCreated={user.date_created}
                />
    })

    return(
        <main className="main" id="usersMain">
            <div className="container">
                <h2 className="display-3 text-capitalize">users</h2>
                <div className="row">
                    { userComponents }
                </div>
            </div>
        </main>
    )
}

export default Users