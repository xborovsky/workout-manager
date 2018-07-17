import React, { Component } from 'react';
import { fetchExercises, fetchMusles } from '../../api/api';
import BlockLoader from '../common/BlockLoader';
import Exercise from './Exercise';

class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises : [],
            allMuscles : []
        };
    }

    componentDidMount() {
        fetchExercises(this.props.match.params.muscleId)
            .then(exercises => this.setState({exercises}));
        fetchMusles().then(muscles => this.setState({allMuscles : muscles}));
    }

    render() {
        const { exercises, allMuscles } = this.state;

        return (
            <div className="row">
                <h2><small>Exercises for </small> {this.props.location.state.muscleName} <small>muscles</small></h2>
                {exercises ?
                    exercises.map((exercise) => <Exercise key={exercise.id} exercise={exercise} allMuscles={allMuscles} />) :
                    <BlockLoader />}
            </div>
        );
    }
}

export default Exercises;