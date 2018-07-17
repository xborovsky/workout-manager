import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../common/Auxiliary';
import BlockLoader from '../common/BlockLoader';

class ExerciseMuscles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            muscles : []
        };
    }

    componentDidMount() {
        const { muscleIds, allMuscles } = this.props;
        this.setState({
            muscles : allMuscles.filter((muscle) => muscleIds.indexOf(muscle.id) !== -1)
        });
    }

    render() {
        const { muscles } = this.state;
        return (
            <div>
                {muscles.length ?
                    <Auxiliary>
                        <p className="card-text">
                            <strong>{this.props.isPrimary ? 'Primary' : 'Secondary'} muscles:</strong>
                        </p>
                        <p className="card-text">
                            <ul className="list-group">
                                {muscles.map((muscle) => <li key={muscle.id} className="list-group-item">{muscle.name}</li>)}
                            </ul>
                        </p>
                    </Auxiliary> :
                    null
                }
            </div>
        );
    }
}

ExerciseMuscles.propTypes = {
    isPrimary : PropTypes.bool.isRequired,
    muscleIds : PropTypes.arrayOf(PropTypes.number).isRequired,
    allMuscles : PropTypes.array.isRequired
};

export default ExerciseMuscles;