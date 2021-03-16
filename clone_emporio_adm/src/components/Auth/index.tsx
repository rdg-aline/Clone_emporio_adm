import { Route, Redirect } from 'react-router'


function Auth(props:any) {
    const isLogged = !!localStorage.getItem("token")
    return (
         isLogged ? <Route {...props} /> : <Redirect to="/" />
        )
}
export default Auth