import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExerciseMuscles from './ExerciseMuscles';
import ExerciseEquipment from './ExerciseEquipment';
import ExerciseImages from './ExerciseImages';

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail : false
        };
    }

    toggleDetail() {
        this.setState(prevState => {
            return {showDetail : !prevState.showDetail}
        });
    }

    render() {
        const {exercise, allMuscles, allEquipment} = this.props;
        const {showDetail} = this.state;

        return (
            <div className="col-xs-12 col-sm-6">
                {showDetail ?
                    <div className="card exercises">
                        <h2>{exercise.name}</h2>
                        <div className="card-text">
                            {exercise.description.replace(/<(?:.|\n)*?>/gm, '')}
                        </div>
                        <div className="container">
                            <ExerciseImages exerciseId={exercise.id} />
                        </div>
                        <div className="container">
                            <ExerciseMuscles isPrimary={true} muscleIds={exercise.muscles} allMuscles={allMuscles} />
                            <ExerciseMuscles isPrimary={false} muscleIds={exercise['muscles_secondary']} allMuscles={allMuscles} />
                            <ExerciseEquipment equipmentIds={exercise.equipment} allEquipment={allEquipment} />
                        </div>
                        <button className="btn btn-sm btn-primary mx-auto" onClick={() => this.toggleDetail()}>
                            Hide detail...
                        </button>
                    </div>
                :
                <div className="card exercises">
                    <h2>{exercise.name}</h2>
                    <button className="btn btn-sm btn-primary mx-auto" onClick={() => this.toggleDetail()}>
                        Show detail...
                    </button>
                </div>
                }
            </div>
        );
    }
}

Exercise.propTypes = {
    exercise : PropTypes.shape({
        name : PropTypes.string.isRequired,
        description : PropTypes.string.isRequired,
        muscles : PropTypes.arrayOf(PropTypes.number).isRequired,
        // todo muscles_secondary
        equipment : PropTypes.arrayOf(PropTypes.number).isRequired
    }).isRequired,
    allMuscles : PropTypes.array.isRequired,
    allEquipment : PropTypes.array.isRequired
};

export default Exercise;