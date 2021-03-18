// Libraries
import { Switch, Route } from 'react-router-dom'
// Pages
import HomePage from '../pages/home/Home'

const Routes = () => {
  const routes = [
    { path: '/', component: <HomePage />, options: { exact: true } },
    { path: '/about', component: <div>About</div>, options: {} },
  ]
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} {...route.options}>
          {route.component}
        </Route>
      ))}
    </Switch>
  )
}

export default Routes
