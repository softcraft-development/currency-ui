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
        // This is obviously just the start of the app, and there'd be a fair amount of work left.
        // This doesn't even give much of a sense of my overall design techniques; I can discuss
        // those in detail during the interview.
        // However, it's starting to illustrate a few key principles of a React-based web application:
        //  - Manage your application state in parent components, upstream of the components that do most of the rendering
        //      - I prefer using Redux for state management on large apps, not in-component state management like I'm doing here.
        //  - Split controls into their individual components where appropriate. 
        //      - Keep their behaviour encapsulated
        //      - Pay attention to prop & state updates to avoid unnecessary rerendering
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
