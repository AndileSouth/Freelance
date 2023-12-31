import React from 'react';
import './Menu.css';

export const MENU = () => {

    const visabilility = () => {
        const menu = document.getElementById('menu');

        const displayStyle = window.getComputedStyle(menu).getPropertyValue('display');

        if(displayStyle === 'flex') {
            menu.style.display = 'none';
        }
    }

  return (
    <div id='menu' className='MENU'>
        <div id='exit1' onClick={visabilility}></div>
        <ul>
            <div id='exit2' className='exit' onClick={visabilility}><svg fill='currentcolor' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
            <li className='cursor'>
                Projects
            </li>

            <li className='cursor'>
                Skills
            </li>
        </ul>
    </div>
  )
}
