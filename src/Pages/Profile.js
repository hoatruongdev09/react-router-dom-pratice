import { useEffect } from "react"
import { Route, Switch, useHistory, useRouteMatch } from "react-router"
import { Link } from "react-router-dom"

import EditProfile from '../components/EditProfile'
import ViewProfile from '../components/ViewProfile'

function Profile({ login }) {
    const history = useHistory()

    useEffect(() => {
        if (!login) {
            history.push('/')
        }
    }, [login, history])
    const { path, url } = useRouteMatch()
    return (
        <>
            <h1> Profile page </h1>
            <ul>
                <li><Link to={`${url}/view`}>View Profile</Link></li>
                <li><Link to={`${url}/edit`}>Edit Profile</Link></li>
            </ul>
            <Switch>
                <Route path={`${path}/view`} component={ViewProfile} />
                <Route path={`${path}/edit`} component={EditProfile} />
            </Switch>
        </>
    )
}

export default Profile
