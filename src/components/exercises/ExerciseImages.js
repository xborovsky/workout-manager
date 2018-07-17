import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlockLoader from '../common/BlockLoader';
import { fetchExerciseImages } from '../../api/api';

class ExerciseImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            images : []
        };
    }

    componentDidMount() {
        fetchExerciseImages(this.props.exerciseId)
            .then(images => {
                this.setState({images, loading : false});
            });
    }

    render() {
        const {loading, images} = this.state;

        return (
            loading ?
                /*<BlockLoader />*/null :
                images.length ?
                    <div className="row">
                        {images.map(image =>
                            <div className="col-sm-6 col-md-3">
                                <img key={image.id} className="img-thumbnail" src={image.image} alt="Exercise" />
                            </div>
                        )}
                    </div>
                    : null
        );
    }
}

ExerciseImages.propTypes = {
    exerciseId : PropTypes.number.isRequired
};

export default ExerciseImages;