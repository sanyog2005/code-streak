import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/category/cat-1.png"
const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" autoFocus placeholder="search for parking"/>
                <MdClose onClick={() => setShowSearch(false)}/>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">parking name.</span>
                            <span className="desc">parking address</span>
                            
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
