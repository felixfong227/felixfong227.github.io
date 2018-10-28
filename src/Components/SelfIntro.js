import React from 'react';
import SlidingCard from './SlidingCard';
import ProfilePictureBanner from './ProfilePictureBanner';

export default class SelfIntro extends React.Component {
    render() {
        return (
            <div
                style={{
                    width: '50%',
                    height: '50%',
                    backgroundColor: '#161616',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                }}
            >

                <div
                    style={{
                        color: '#FFF',
                        margin: '3em',
                    }}
                >
                    <h1>Felix Fong</h1>

                    <h3>
                        I'm a
                        <SlidingCard />
                        Developer
                    </h3>
                    
                </div>

                <div
                    style={{
                        marginLeft: '3em',
                    }}
                >
                    <ProfilePictureBanner />
                </div>

            </div>
        )
    }
}