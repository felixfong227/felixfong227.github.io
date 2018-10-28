import React from 'react';
export default class SpidingCard extends React.Component {
    render() {
        return (
            <div>
                
                <div
                    style={{
                        background: '#f7df1e',
                        color: '#161616',
                        overflow: 'hidden',
                        display: 'inline',
                        padding: '0 1em'
                    }}
                >
                    JavaScript
                </div>

                <br />

                <div
                    style={{
                        background: '#66cc33',
                        color: '#FFF',
                        overflow: 'hidden',
                        display: 'inline',
                        padding: '0em 1em'
                    }}
                >
                    Node.js
                </div>

            </div>
        )
    }
}