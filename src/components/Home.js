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

                {/* <div className="client-reviews col">

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
                </div> */}

                <div className="projects">
                    <h1>Projects</h1>
                    <p>Each project encapsulates my dedication to blending design aesthetics with technical functionality. These digital creations serve as a testament to my commitment to crafting innovative online experiences that captivate users and solve real-world problems. Dive in and discover the web's endless potential through my work</p>
                    <div className='project-contaner'>

                        <div className="project">
                            <div className="image-container">
                              <a href="https://andilesouth.github.io/Furniture-website/" target="_blank" rel="noopener noreferrer">
                                <img src={IMAGES.image3} alt="" />
                                </a>  
                            </div>
                        </div>
                        <div className="project">
                            <div className="image-container">
                               <a href="https://andilesouth.github.io/Activity-Suggestion-App/" target="_blank" rel="noopener noreferrer">
                                <img src={IMAGES.image4} alt="" />
                                </a> 
                            </div>
                        </div>
                        <div className="project">
                            <div className="image-container">
                               <a href="https://andilesouth.github.io/Dad-Joke-Generator/" target="_blank" rel="noopener noreferrer">
                                <img src={IMAGES.image5} alt="" />
                                </a> 
                            </div>
                        </div>

                        
                        
                    </div>
                </div>

                <div className="skills">
                    <div className="image-container">
                        <img src={IMAGES.image2} alt="" />
                    </div>
                    
                    <h1>Skills</h1>

                    <div className="skill-container">
                        <div className="skill col">
                            <div className="profilePic"><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"/></svg></div>

                            <h2>Design</h2>

                            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>

                            <div className="tools">
                                <h3>Tools</h3>
                                <p>figma</p>
                            </div>

                        </div>

                        <div className="skill col">
                            <div className="profilePic">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/></svg>
                            </div>
                            <h2>Frontend</h2>

                            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>

                            <div className="tools">
                                <h3>Languages</h3>
                                Html,Css,Javascript and React.js
                            </div>
                        </div>

                        <div className="skill col">
                        <div className="profilePic">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                        </div>
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
            <div className="profilePic">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </div>

            <p>I look forward to the possibility of collaborating on your next digital project.</p>
            <p>
                Feel free to get in touch with me.
            </p> 

            <div className='row'>
            <div className="profilePic">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </div>

            <div className="profilePic">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            </div>

        

            </div>
            </footer>
            </div>
        </div>
     );
}
 
export default HOME;