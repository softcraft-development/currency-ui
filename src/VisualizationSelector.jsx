import React from 'react';
import Visualization from './Visualization';

export class VisualizationSelector extends React.Component {
    constructor(state, context) {
        super(state, context);
        this.rateClicked = this.rateClicked.bind(this);
        this.historyClicked = this.historyClicked.bind(this);
    }

    changeType(type){
        if (this.props.type !== type){
            this.props.onChange(type);
        }
    }

    historyClicked(event){
        event.preventDefault();
        this.changeType(Visualization.Type.History);
    }

    rateClicked(event){
        event.preventDefault();
        this.changeType(Visualization.Type.Rate);
    }

    render() {
        const rateClass = this.props.type === Visualization.Type.Rate ? 'active btn-primary' : 'btn-default';
        const historyClass = this.props.type === Visualization.Type.History ? 'active btn-primary' : 'btn-default';

        return <div id='visualization'>
            <button name='rate' type='button' className={"btn " + rateClass} onClick={this.rateClicked}>Get Rate</button>
            <button name='history' type='button' className={"btn " + historyClass} onClick={this.historyClicked}>Rate 30 Day History</button>
        </div>;
    }
}
export default VisualizationSelector;
