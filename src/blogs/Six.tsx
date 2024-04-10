import "../styles/blogs/Blog-six.css";
const Six = () => {
    return (
        <div className="blog-six">
            <div className="left-side">
                <div className="text-wrapper">
                    <h1>The Design of the Camera Holder</h1>
                    <p>We must not forget the eyes on our robot! We're working hard to build a camera holder that is both stable and ideally positioned. We're experimenting with materials and angles in an effort to find the perfect balance between practicality and style. Although it's a difficult process, we're committed to doing it correctly and managed to design and print the final version of it in just one prototype. Our robot sees the world through the camera, so we want to make sure it has the finest vision possible.</p>
                </div>

            </div>
            <div className="images">
                <div className="text-image">
                    <img src="/images/Camera.jpeg" alt="Camera" />
                </div>
                <div className="text-image">
                    <img src="/images/prototypeCamera.gif" alt="Camera" />
                    <p><u>The prototype:</u> This prototype was okay but it was missing the bolt holes that were going to connect the camera to the robot so we added two metric 5 size holes.</p>
                </div>
            </div>
        </div>
    )
}

export default Six;