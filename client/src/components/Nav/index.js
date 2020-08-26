import React from 'react'
import "./style.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import "./style.css"


export default function Nav() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
                <h1>Wandr</h1>
                  <IconButton>
                <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </div>
    )
} 