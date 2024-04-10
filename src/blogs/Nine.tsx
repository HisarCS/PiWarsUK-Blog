import "../styles/blogs/Blog-nine.css";
const Nine = () => {
    return (
        <div className="blog">
            <div className="text-wrapper">
                <h1>The Complete Robot and Testing</h1>
                <p>Today, we put all the things together and started to test the capabilities of our robot and make it better by learning from its shortcomings.</p>
                <p>Below, you can watch us testing our robot, its naked version, to see what it can do:</p>
                <video width="500px" controls>
                    <source src="/videos/obstacle.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="text-image">
                <img src="/images/Final.gif" alt="Final Robot" />
                <p>We still have to improve our camera codes but we have achieved so many things in a fixed amount of time and we are proud of each other.</p>
            </div>     
        </div>
    )
}

export default Nine;