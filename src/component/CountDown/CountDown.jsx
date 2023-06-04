import React from 'react';

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.startFrom,
        }
    }
    //useEffect(fn,[]);
    componentDidMount() {
        const intervalId = setInterval(() => {
            if (this.state.current > 0) {
                this.setState({
                    current: this.state.current - 1,
                })
            } else {
                clearInterval(intervalId);
            }
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {

    }
    componentWillUnmount() {
        
    }
    render() {
        return (
            <ul>
                <li> Starts From : {this.props.startFrom}</li>
                <li>Current Count: {this.state.current}</li>
            </ul>
        )
    }
}
export default CountDown;