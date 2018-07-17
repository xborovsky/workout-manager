import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../common/Auxiliary';

class ExerciseEquipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment : []
        };
    }

    componentDidMount() {
        const { equipmentIds, allEquipment } = this.props;
        this.setState({
            equipment : allEquipment.filter(equipment => equipmentIds.indexOf(equipment.id) !== -1)
        });
    }

    render() {
        const { equipment } = this.state;

        return (
            <div>
                {equipment.length ?
                    <Auxiliary>
                        <p className="card-text">
                            <strong>Equipment needed:</strong>
                        </p>
                        <p className="card-text">
                            <ul className="list-group">
                                {equipment.map(item =>
                                    <li key={item.id} className="list-group-item">{item.name}</li>
                                )}
                            </ul>
                        </p>
                    </Auxiliary>
                    : null
                }
            </div>
        );
    }
}

ExerciseEquipment.propTypes = {
    equipmentIds : PropTypes.arrayOf(PropTypes.number).isRequired,
    allEquipment : PropTypes.array.isRequired
};

export default ExerciseEquipment;