import React from 'react'
import './Contact.css'
import {MdCall, MdCallReceived} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className='c-wrapper'>

        <div className='paddings innerWidth flexCenter c-container'>
            <div className='flexColStart c-left'>
                <span className='secondaryText'>Questions About Our Services?</span>
                <span className='primaryText'>We're Here To Help</span>
                <span className='secondaryText'> Our team is here to support and answer all your questions. Just give us a call at (123) 456-7890 or send us an email at 0hJwP@example.com</span>


                <div className='flexColStart contactModes'>

                    <div className='flexStart row'>
                        <div className='flexColStart mode'>
                            <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <MdCall size={25} />
                            </div>
                            
                            <div className='flexColStart detail'>
                                <span>Call</span>
                                <span>(123) 456-7890</span>
                            </div>
                        </div>
                            <div className='flexCenter button'>Call Now </div>
                        </div>

                        {/**second mode */}
                        <div className='flexColStart mode'>
                            <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <MdCallReceived size={25} />
                            </div>
                            
                            <div className='flexColStart detail'>
                                <span>Video</span>
                                <span>(123) 456-7890</span>
                            </div>
                        </div>
                            <div className='flexCenter button'>Video Call Now </div>
                        </div>
                    </div>

                {/**third mode */}
                <div className='flexStart row'>
                        <div className='flexColStart mode'>
                            <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25} />
                            </div>
                            
                            <div className='flexColStart detail'>
                                <span>Message</span>
                                <span>(123) 456-7890</span>
                            </div>
                        </div>
                            <div className='flexCenter button'>Message Now</div>
                        </div>

                        {/**fourth mode */}
                        <div className='flexColStart mode'>
                            <div className='flexStart'>
                            <div className='flexCenter icon'>
                                <HiChatBubbleBottomCenter size={25} />
                            </div>
                            
                            <div className='flexColStart detail'>
                                <span>Chat</span>
                                <span>(123) 456-7890</span>
                            </div>
                        </div>
                            <div className='flexCenter button'>Chat Now </div>
                        </div>
                    </div>

                </div>
                  
            </div>


          {/*right side */} 
          <div className='flexColStart c-right'>
            <div className='image-container'>
                <img src='./contact.jpg' alt=''/>
            </div>
        </div>     

    </div>
    </section>
  )
}

export default Contact
