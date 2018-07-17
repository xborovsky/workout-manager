import React, { Component } from 'react';
import { fetchExercises, fetchMusles, fetchEquipment } from '../../api/api';
import BlockLoader from '../common/BlockLoader';
import Exercise from './Exercise';

class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises : [],
            allMuscles : [],
            allEquipment : []
        };
    }

    componentDidMount() {
        fetchExercises(this.props.match.params.muscleId)
            .then(exercises => this.setState({exercises}));
        fetchMusles().then(muscles => this.setState({allMuscles : muscles}));
        fetchEquipment().then(equipment => this.setState({allEquipment : equipment}))
    }

    render() {
        const { exercises, allMuscles, allEquipment } = this.state;

        return (
            <div className="row">
                <h2><small>Exercises for </small> {this.props.location.state.muscleName} <small>muscles</small></h2>
                <div className="row">
                    {exercises ?
                        exercises.map((exercise) => <Exercise key={exercise.id} exercise={exercise} allMuscles={allMuscles} allEquipment={allEquipment} />) :
                        <BlockLoader />}
                </div>
            </div>
        );
    }
}

export default Exercises;