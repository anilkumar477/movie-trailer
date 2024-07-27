import './App.css';
import {useState} from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';


export default function App(){
  const [video,setVideo] = useState('fordvferrari')
  const [videoUrl,setVideoUrl] = useState("https://youtu.be/xAkCqox_MhE")
  
  function handleClickSearch(){
    movieTrailer(video).then((res) =>{
      setVideoUrl(res);
    })
  }
  return(
    <div className='bg-container'>
      <div>
        <h1 className='header'>Search your favorite movie Trailers</h1>
      <div className='search-bar'>
        <label className='label-text' >Search for any movies : {' '}</label>
        <input  
        type='text' 
        className='input-text'
        onChange={(e)=>{
          setVideo(e.target.value)
        }}
        
        />
        <button className='button' onClick={handleClickSearch}>Search</button>

      </div>
      <div className='player'>
      <ReactPlayer url={videoUrl} controls={true}/>
    </div>
    </div>
    </div>
  )
}