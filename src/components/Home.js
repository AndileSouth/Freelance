import './Home.css';
import IMAGES from './img/Images';

const HOME = () => {
    
    return ( 
        <div className="HOME">
            <div className="home-content">
                <div className="intro row">
                    <div className='intro1'>
                        <p>Hi there, I’m Andile 👋</p>

                        <p><span className='darker'>Web Developer(backend + frontend = fullstack)</span></p>

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
            </div>
        </div>
     );
}
 
export default HOME;