import React, {Fragment} from 'react'


function ListOfRecyclables() {

    const [ firstOptionsMenuToggle, setFirstOptionsMenuToggle ] = useState(false)
  
    const [ secondOptionsMenuToggle, setSecondOptionsMenuToggle ] = useState(false)
  
    const displayFirstOptionsMenu = () => {
      setFirstOptionsMenuToggle(!firstOptionsMenuToggle)
    }
    
    const displaySecondOptionsMenu = () => {
      setSecondOptionsMenuToggle(!secondOptionsMenuToggle)
    }
    
    const hideAllOptionsMenus = () => {
      setFirstOptionsMenuToggle(false)
      setSecondOptionsMenuToggle(false)
    }

    
    return (
        <React.Fragment >
            <img className='eachitemicon' value='smartphone' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/new-mobile-phone.png')} alt='icon of a smart phone' />
            <img className='eachitemicon' value='laptop' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/laptop.png')} alt='icon of a laptop' />
            <img className='eachitemicon' value='console' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/console.png')} alt='icon of a video game console' />
            <img className='eachitemicon' value='smartwatch' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/smartwatch.png')} alt='icon of a smart watch' />
            <img className='eachitemicon' value='dvdplayer' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/home-cinema.png')} alt='icon of a dvd player' />
            <img className='eachitemicon' value='monitor' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/monitor.png')} alt='icon of a mintor' />
            <img className='eachitemicon' value='musicplayer' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/music-player.png')} alt='icon of a music player' />
            <img className='eachitemicon' value='flipphone' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/cell-phone.png')} alt='icon of a flip phone' />
            <img className='eachitemicon' value='printer' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/printer.png')} alt='icon of a printer' />
            <img className='eachitemicon' value='photocamera' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/photo-camera.png')} alt='icon of a photo camera' />
            <img className='eachitemicon' value='videocamera' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/video-camera.png')} alt='icon of a video camera' />
            <img className='eachitemicon' value='server' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/server.png')} alt='icon of a server' />
            <img className='eachitemicon' value='router' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/router1.png')} alt='icon of a router' />
            <img className='eachitemicon' value='speakers' onClick={()=>{displayFirstOptionsMenu()}} src={require('./../images/icons/audio-system.png')} alt='icon of a speaker' />
        <React.Fragment />
    )
}

export default ListOfRecyclables
