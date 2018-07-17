import React from 'react';
import PropTypes from 'prop-types';
import ExerciseMuscles from './ExerciseMuscles';

const Exercise = ({exercise, allMuscles}) =>
    <div className="col-sm-12">
        <div className="card">
            <h2>{exercise.name}</h2>
            <div className="card-text">
                {exercise.description.replace(/<(?:.|\n)*?>/gm, '')}
            </div>
            <div className="container">
                <ExerciseMuscles isPrimary={true} muscleIds={exercise.muscles} allMuscles={allMuscles} />
                <ExerciseMuscles isPrimary={false} muscleIds={exercise['muscles_secondary']} allMuscles={allMuscles} />
            </div>
            TODO muscles, equipment
        </div>
    </div>
;

Exercise.propTypes = {
    exercise : PropTypes.shape({
        name : PropTypes.string.isRequired,
        description : PropTypes.string.isRequired,
        muscles : PropTypes.arrayOf(PropTypes.number).isRequired,
        // todo muscles_secondary
        equipment : PropTypes.arrayOf(PropTypes.number).isRequired
    }).isRequired,
    allMuscles : PropTypes.array.isRequired
};

export default Exercise;