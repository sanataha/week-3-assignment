import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Image1 from './img/hulk-1.jpg';
import Image2 from './img/venom-1.jpg';
import Image3 from './img/venom-2.jpg';
import ImageCard from './components/ImageCard';

import SearchInput from './components/searchInput';
import './App.css';

function App() {
  return (
<div>
<Header />

    <header class="header">
      <div class="container">
        <h1 class="title">Mavel's Fearless</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
          molestias earum eveniet.
        </p>
      {/* search input component */}
<SearchInput/>
        
   {/*<!--sample wallpaper.-->.*/}
        <div class="sample-wallpaper">

        <ImageCard uri={Image1}/>
        <ImageCard uri={Image2}/>
        <ImageCard uri={Image3}/>


          </div> 
           
       
</div>
  
    </header>
  



   </div>
  );
}

export default App;
