import React, { useState, useEffect } from 'react'

class CountDown extends React.Component {
    state = {
        count: 3
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
            // this.props.onTimesUp()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count - 1 });
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
                // this.props.onTimesUp()
            }
        }
    }
    render() {
        return (
            <div>{this.state.count} class</div>
        )
    }

}

const NewCountDown = (props) => {
    const [count, setCount] = useState(3)
    useEffect(() => {
        if (count === 0) {
            // props.onTimesUp()
            return
        }
        let timer = setTimeout(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>{count} hook</div>
    )
}

export { NewCountDown, CountDown } 
