import Link from "next/link";
import "../restaurant/style.css"

const RestaurantHeader = () => {
  return (
    <div className="header-wrapper">
        <div className="logo">
            <img style={{width:200}} src="../../../public/freepik-doodle-delivery-services-logo-20251004190914C8Eo (1).png" alt="logo" />
        </div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Login/Signup</Link>
            </li>
            <li>
                <Link href="/">Profile</Link>
            </li>
        </ul>
    </div>
  )
};

export default RestaurantHeader;
