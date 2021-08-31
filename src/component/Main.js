import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

    render() {
        // console.log(this.props);
        return (
            <main>
                <div className='card-container'>
                    {this.props.Data.map(elm => {
                        return (
                            <HornedBeast
                                key={elm.title}
                                name={elm.title}
                                url={elm.image_url}
                                alt={elm.keyword}
                                description={elm.description}
                                viewBeast={this.props.viewBeast}
                            />
                        )
                    })}
                </div>
            </main>
        );
    }
}

export default Main;