import {assets} from '../../assets/assets'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src= {assets.logo} alt="logo" />
      <img className="profile" src= {assets.profile_image} alt="profile_image  " />
    </div>
  )
}
