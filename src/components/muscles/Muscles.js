import React, { Component } from 'react';
import { fetchMusles } from '../../api/api';
import BlockLoader from '../common/BlockLoader';
import Auxiliary from '../common/Auxiliary';

class Muscles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            muscles : []
        };
    }

    componentDidMount() {
        fetchMusles().then(muscles => {
            this.setState({ muscles });
        });
    }

    buildMusclessSections(type) {
        const front = type === 'front',
              { muscles } = this.state;

        return muscles.map((muscle) =>
            (front && muscle['is_front']) || (!front && !muscle['is_front']) ?
                <div className="col-sm-3">
                    <div className="card" key={muscle.id}>
                        <div className="card-body">
                            <h3>{muscle.name}</h3>
                        </div>
                    </div>
                </div> : null
        );
    }

    render() {
        const { muscles } = this.state;
        return(
            muscles ?
                <Auxiliary>
                    <h2>Front part musles</h2>
                    <div className="row muscles-list">
                        { this.buildMusclessSections('front') }
                    </div>
                    <h2>Back part musles</h2>
                    <div className="row muscles-list">
                        { this.buildMusclessSections('back') }
                    </div>
                </Auxiliary> :
                <BlockLoader />
        );
    }
}

export default Muscles;