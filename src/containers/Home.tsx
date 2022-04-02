import { Link } from "react-router-dom";
import React from "react";

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <p>Welcome to Getsafe's Insurance Buyflow</p>
            <Link to="/buy/insurance_dev">Buy Developer Insurance</Link>
            <br />
            <Link to="/buy/insurance_designer">Buy Designer Insurance</Link>
        </>
    )
}

export default Home;
