import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import "./css/widget.css"
function Widget() {
  return (
    <div className='widget'>
    <div className='widget_top'>
        <div className='widget__header'>
            <h4>Connect_In News</h4>
            <InfoIcon />
        </div>
        <div className='widget__body'>
            <ul className='widget__options'>
                <li>
                    <h4>Slaying Job Search</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>

                <li>
                    <h4>Slaying Job Search</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>

                <li>
                    <h4>Slaying Job Search</h4>
                    <p>6d ago * 4,55 readers</p>
                </li>
            </ul>
        </div>

    </div>


      
    </div>
  )
}

export default Widget
