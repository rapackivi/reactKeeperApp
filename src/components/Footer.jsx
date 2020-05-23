import React from 'react';

class Footer extends React.Component {
    
   constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    const year = new Date().getFullYear();
    return (<footer>
                <p>Copyright ⓒ Alexey Semeninin, {year}</p>
            </footer>);
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Footer;
