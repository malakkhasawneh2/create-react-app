import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'


class Main extends React.Component {
    render() {
        return (
            <>
                <Row xs={1} md={3} className="g-4">
                    {this.props.Data.map((item) => {
                        return (
                            <HornedBeasts
                                title={item.title}
                                imgUrl={item.image_url}
                                description={item.description}
                                showModal={this.props.showModal}
                                updateSelectedBeastData={this.props.updateSelectedBeastData}
                            />
                        )
                    })}





                </Row>
            </>)
    }
}
export default Main
