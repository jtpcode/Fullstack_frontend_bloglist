const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    const successStyle = {
      color: 'green',
      backGround: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    }

    const errorStyle = {
      color: 'red',
      backGround: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10
    }

    const style = message.type === 'success' ? successStyle : errorStyle

    return (
      <div style={style}>
        {message.text}
      </div>
    )
  }

export default Notification