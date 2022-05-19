import "./header.scss";
import Typewriter from "./sub-components/typewriter";

function Header() {
    return (
        <div className="heading">
            <div className="header_box">
                <h1>
                    <span className="heading-part-1">
                        <Typewriter props={"HHi.. I am Mahamudur Rahman"} />
                    </span>
                    <span className="heading-part-2 animate">
                        I am a full-stack developer
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Header;
