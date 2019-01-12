import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        console.log('Passou no construtor');

        this.state = {
            x: 'a',
            time: new Date().toLocaleString(),
        };
    }

    componentWillMount() {
        console.log('COMPONENTE VAI MONTAR');
    }

    componentDidMount() {
        console.log('COMPONENTE MONTOU');

        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString(),
            })
        }, 1000);
    }

    async shouldComponentUpdate() {
        console.log('COMPONENTE DEVE ATUALIZAR');
    }

    componentWillUpdate() {
        console.log('COMPONENTE VAI ATUALIZAR?');
    }

    componentDidUpdate() {
        console.log('COMPONENTE ATUALIZOU?');
    }

    render() {
        console.log('Passou no render');

        const name = this.props.name;
        const phrase = this.props.phrase;
        const time = this.state.time;

        return (
            <div>
                <h1>{name}</h1>
                <h2>{phrase}</h2>
                <h3>{time}</h3>
            </div>
        );
    }
}

export default Clock;