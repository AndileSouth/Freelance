import './Home.css';
import IMAGES from './img/Images';

const HOME = () => {
    
    return ( 
        <div className="HOME">
            <div className="home-content">
                <div className="intro row">
                    <div className='intro1'>
                        <p className='hello'>Hi there, I’m Andile 👋</p>

                        <p><span className='darker'>Web Developer(backend + frontend)</span></p>

                        <p>I specialize in crafting dynamic and engaging websites that bring your digital vision to life. Whether you're a small startup or a medium-sized company, I'm here to create a stunning online presence for your business.</p>

                        <div className='row btns'>
                            <div className='work cursor'>
                                    View my work
                            </div>
                            <div className='work cursor'>
                                Message me
                            </div>
                        </div>
                        
                    </div>
                    <div className='row image1'>
                        <div className="image-container row">
                            <img src={IMAGES.image1} alt="" />
                        </div>
                        
                    </div>
                </div>
            <div className="below-home">

                <div className="client-reviews col">

                    <div><h1>Client Reviews</h1></div>
                    <div className="reviews">

                        <div className="boxes">
                            <div className="profilePic">

                            </div>

                        </div>
                        <div className="boxes">
                            <div className="profilePic">

                            </div>

                        </div> 


                        <div className="boxes">
                            <div className="profilePic">

                            </div>

                        </div>
                        <div className="boxes">
                            <div className="profilePic">

                            </div>

                        </div>         

                    </div>
                </div>

                <div className="projects">
                    <h1>Projects</h1>
                    <p>Each project encapsulates my dedication to blending design aesthetics with technical functionality. These digital creations serve as a testament to my commitment to crafting innovative online experiences that captivate users and solve real-world problems. Dive in and discover the web's endless potential through my work</p>
                    <div className='project-contaner'>

                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>

                        <div className="project"></div>
                        <div className="project"></div>
                        <div className="project"></div>
                        
                    </div>
                </div>

                <div className="skills">
                    <div className="image-container">
                        <img src={IMAGES.image2} alt="" />
                    </div>
                    
                    <h1>Skills</h1>

                    <div className="skill-container">
                        <div className="skill col">
                            <div className="profilePic"></div>

                            <h2>Design</h2>

                            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>

                            <div className="tools">
                                <h3>Tools</h3>
                                <p>figma</p>
                            </div>

                        </div>

                        <div className="skill col">
                            <div className="profilePic"></div>
                            <h2>Frontend</h2>

                            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>

                            <div className="tools">
                                <h3>Languages</h3>
                                Html,Css,Javascript and React.js
                            </div>
                        </div>

                        <div className="skill col">
                        <div className="profilePic"></div>
                        <h2>Backend</h2>
                        <p>Php</p>
                        <p>mySQL</p>
                        <p>Apache</p>
                        </div>
                    </div>

                </div>

                <div className="contacts">
                    <h1>In need of a Developer ?</h1>
                    <div className='animation row'><span className='availability'></span> I'm currently available for work</div>

                    <button className='work cursor'>
                        Message me
                    </button>
                </div>

            </div>
                
            <footer className='col'>
            <div className="profilePic"></div>

            <p>I look forward to the possibility of collaborating on your next digital project.</p>
            <p>
                Feel free to get in touch with me.
            </p> 

            <div className='row'>
            <div className="profilePic"></div>
            <div className="profilePic"></div>
            <div className="profilePic"></div>
            <div className="profilePic"></div>
            </div>
            </footer>
            </div>
        </div>
     );
}
 
export default HOME;