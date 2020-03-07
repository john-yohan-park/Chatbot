import React, {Component} from 'react'

class Image extends Component {  
    render() {
      let {mode, src, height, width, style, ...props} = this.props;
      let modes = {
        'fill': 'cover',
        'fit': 'contain'
      }
      let size = modes[mode] || 'contain';
  
      let defaults = {
        height: height || 50,
        width: width || 50,
        backgroundColor: 'gray'
      }
  
      let important = {
        backgroundImage: `url("${src}")`,
        backgroundSize: size,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }
      return <div {...props} style={{...defaults, ...style, ...important}} />
    }
}

export default Image