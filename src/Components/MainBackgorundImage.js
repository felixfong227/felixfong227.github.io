import React from 'react';

export default class MainBackgroundImage extends React.Component {

    state = {
        imageUrl: '',
    }

    async componentDidMount() {
        const imageSource = 'https://images.weserv.nl/?url=pre00.deviantart.net/4158/th/pre/f/2018/017/a/3/soar_through_the_sky_by_ghost3641-dc06giq.png&blur=3';
        try {
            const convertWebpImage = await import('../Utils/convertWebpImage');
            const newImageSource = await convertWebpImage.default(imageSource);
            this.setState({
                imageUrl: newImageSource,
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
                    backgroundImage: `url(${this.state.imageUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: 'cover'
                }}
            >

                <div 
                    title="The following artwork is granted by the original author for such(my use case) personally"
                    style={{
                        position: 'absolute',
                        bottom: '1em',
                        left: '1em',
                    }}
                >
                    <span>
                        Artwork by: 
                    </span>
                    <a href="https://ghost3641.deviantart.com/art/Soar-through-the-sky-725895458">Ghost3641</a>
                </div>

                {
                    this.props.children
                }

            </div>
        )
    }
}