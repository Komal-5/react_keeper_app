import React from "react";

const yearNow = new Date().getFullYear();
function Footer(){
    return (
        <div>
            <footer>
                <p>Copyright @{yearNow}</p>
            </footer>
        </div>
    );
}

export default Footer;