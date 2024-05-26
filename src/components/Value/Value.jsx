import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import {MdOutlineArrowDropDown } from 'react-icons/md'; 
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
    const [className, setClassName] = useState('null');

    return (
        <section className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-container'>
                <div
                 className='v-left'>
                    <div className='image-container'>
                        <img src='./value4.jpg' alt=''/>
                    </div>
                </div>
                <div className='flexColStart v-right'>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value WE Give To You</span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best services for you.
                        <br/>
                        We believe a good place to live and work is where true success begin.
                    </span>
                    <Accordion className='accordion'
                    allowMultipleExpanded={false}
                    preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='flexCenter accordionButton'>
                                                <AccordionItemState>
                                                    {({expanded}) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                                                </AccordionItemState>
                                                <div className='flexCenter icon'>{item.icon}</div>
                                                <span className='primaryText'>{item.heading}</span>
                                                <div className='flexCenter icon'>
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <span className='secondaryText'>{item.detail}</span>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value;