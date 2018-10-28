import React from 'react';
import MainBackgroundImage from './Components/MainBackgorundImage';
import SelfIntro from './Components/SelfIntro';
import ProfilePictureBanner from './Components/ProfilePictureBanner';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <MainBackgroundImage>

                    
                    {/* <div
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        
                        

                    </div> */}

                    <SelfIntro />

                </MainBackgroundImage>
            </div>
        )
    }

}