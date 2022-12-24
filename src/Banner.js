import React from 'react';
import "./Banner.css";

export default function Banner() {

    function truncate(string,n){
        return string?.length>n? string.substr(0,n-1)+'...' : string;
    }

    return (
        <header className='banner'
            style={{
                backgroundImage: `url("https://cdn.flickeringmyth.com/wp-content/uploads/2019/11/Sex-Education-season-2-banner.jpg")`
            }}
        >
            <div className='banner__content'>
                <h1 className='banner__title'>Movie Title</h1>
                <div className='banner__buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner__description'> 
               {truncate(
                `This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description
                This is the movi description`
                ,150)} </h1>
            
            </div>
            <div className='banner__fadeBottom'/>

        </header >
    )
}
