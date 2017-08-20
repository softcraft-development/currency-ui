import React from 'react';
import Amount from './Amount';
import Visualization from './Visualization';
import VisualizationSelector from './VisualizationSelector';

export class CurrencyApplication extends React.Component {
    constructor(state, context) {
        super(state, context);
        this.setAmount = this.setAmount.bind(this);
        this.setVisualization = this.setVisualization.bind(this);
    }

    componentWillMount() {
        this.setState((previousState, props) => {
            return {
                visualization: Visualization.Type.Rate,
                amount: null,
                from: null,
                to: null,
                result: null
            };
        });
    }

    render() {
        return <div id='currency-ui'>
            <h1>Currency UI</h1>
            <VisualizationSelector type={this.state.visualization} onChange={this.setVisualization} />
            <div className='inputs'>
                <div>
                    <Amount value={this.state.amount} onChange={this.setAmount} />
                </div>
            </div>
        </div>;
    }

    setAmount(value) {
        this.setState((previousState) => {
            return Object.assign({}, previousState, { amount });
        });
    }

    setVisualization(visualization) {
        this.setState((previousState) => {
            return Object.assign({}, previousState, { visualization });
        });
    }
}
export default CurrencyApplication;
