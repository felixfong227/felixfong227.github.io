import React from 'react';

class Picture extends React.Component {

    state = {
        image: '',
    }

    async componentDidMount() {
        const imageSource = 'https://images.weserv.nl/?url=avatars0.githubusercontent.com/u/13918481?v=4&h=300';
        try {
            const convertWebpImage = await import('../Utils/convertWebpImage');
            const newImageSource = await convertWebpImage.default(imageSource);
            this.setState({
                image: newImageSource,
            });
        }
        catch(error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div 
                style={{
                    backgroundImage: `url(${this.state.image})`,
                    width: '10em',
                    height: '10em',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                    display: 'inline-block'
                }}
            />
        )
    }
}

export default class ProfilePictureBanner extends React.Component {

    render() {
        return (
            <div
                style={{
                    position: 'relative',
                }}
            >
                <Picture />
                <div
                    style={{
                        background: '#FFF',
                        display: 'inline-block',
                        padding: '1em 2em'
                    }}
                >
                    <a className="fa fa-github" style={{ marginRight: '1em', fontSize: '1.5em', textDecoration: 'none', color: '#161616'  }} href="https://github.com/felixfong227" />
                    <a className="fa fa-twitter" style={{ fontSize: '1.5em', textDecoration: 'none', color: '#161616'  }} href="https://twitter.com/felixfong227" />
                </div>
            </div>
        )
    }
}