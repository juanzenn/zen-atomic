import PropTypes from 'prop-types';

const Text = (props) => {
  const { children, tag } = props

  const TextTag = () => {
    switch (tag) {
      case "h1":
        return <h1 className='text-6xl lg:text-7xl font-bold'>{children}</h1>
      case "h2":
        return <h2 className='text-5xl lg:text-6xl font-bold'>{children}</h2>
      case "h3":
        return <h3 className="text-4xl lg:text-5xl font-bold">{children}</h3>
      case "h4":
        return <h4 className="text-3xl lg:text-4xl font-bold">{children}</h4>
      case "h5":
        return <h5 className="text-2xl lg:text-3xl font-bold">{children}</h5>
      case "h6":
        return <h6 className='text-xl lg:text-2xl font-bold'>{children}</h6>
      case "base":
        return <p className="text-base lg:text-lg">{children}</p>
      case 'small':
        return <p className='text-sm lg:text-base'>{children}</p>
      default:
        return <p className='text-base lg:text-lg'>{children}</p>
    }
  }

  return (
    <TextTag />
  )
}

Text.propTypes = {
  children: PropTypes.string,
  tag: PropTypes.string
}

export default Text