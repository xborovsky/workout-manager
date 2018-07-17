import React, { Component } from 'react';
import { fetchExercises, fetchMusles, fetchEquipment } from '../../api/api';
import BlockLoader from '../common/BlockLoader';
import Exercise from './Exercise';
import BreadCrumbs from '../common/BreadCrumbs';

class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises : [],
            allMuscles : [],
            allEquipment : [],
            pageNum : 1,
            loadMoreVisible : true,
            loading : false
        };
    }

    componentDidMount() {
        fetchExercises(this.props.match.params.muscleId)
            .then(res => this.setState({exercises : res.exercises}));
        fetchMusles().then(muscles => this.setState({allMuscles : muscles}));
        fetchEquipment().then(equipment => this.setState({allEquipment : equipment}))
    }

    loadMore() {
        const { pageNum } = this.state,
            nextPageNum = pageNum + 1;

        this.setState({loading : true, pageNum : nextPageNum});

        fetchExercises(this.props.match.params.muscleId, nextPageNum)
            .then(res =>
                this.setState(prevState => {
                    return {
                        exercises : prevState.exercises.concat(res.exercises),
                        loadMoreVisible : res.hasNextPage
                    };
                })
            );

        this.setState({loading : false});
    }

    render() {
        const { exercises, allMuscles, allEquipment, loading, loadMoreVisible } = this.state;

        return (
            <div className="row">
                <div className="container">
                    <BreadCrumbs items={[{link : '/', label : 'Muscles'}, {label : 'Exercises', active : true}]} />
                </div>

                <h2><small>Exercises for </small> {this.props.location.state.muscleName} <small>muscles</small></h2>
                <div className="row">
                    {exercises ?
                        exercises.map((exercise) => <Exercise key={exercise.id} exercise={exercise} allMuscles={allMuscles} allEquipment={allEquipment} />) :
                        <BlockLoader />}
                </div>
                { loading ?
                    <BlockLoader /> :
                    loadMoreVisible ?
                        <div className="mx-auto">
                            <button className="btn btn-primary" onClick={() => this.loadMore()}>Load more...</button>
                        </div> :
                        null
                }
            </div>
        );
    }
}

export default Exercises;