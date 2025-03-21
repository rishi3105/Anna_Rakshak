//import "../../App.css"
import "../css/mainline.css"
import { useNavigate } from 'react-router-dom';

export default function mainLine({ user, userRole }) {
    const navigate = useNavigate();

    const handleDonateClick = () => {
        console.log(userRole);

        if (user) {
            if (userRole === 'donor') {
                navigate("/dashboard");
            } else {
                navigate("/register");
                alert('Please register as a donor to make a donation.');
                
            }
        } else {
            navigate("/login");;
        }
    }


    return (
        <div className="textBox">
            <div className="title">Anna Rakshak</div>
            <h4>Join Us in Fighting Hunger: Together, Lets Make a Difference by Sharing Meals and Nurturing Hope in Every Bite!</h4>
            {userRole==='donor' && <button className="ExploreBtn" onClick={handleDonateClick}>
                Donate
            </button>}
        </div>
    )
}