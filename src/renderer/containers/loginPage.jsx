import { connect }                  from 'react-redux'
import LoginPage                    from '../components/loginPage'
import Actions                      from '../actions'

// Redux connection
const mapStateToProps = (state) => {
  return {
    credentials: state.credentials,
    loginResult: state.loginResult
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetLocalCredentials: (autoSignin) => {
      return dispatch(Actions.getLocalCredentials(autoSignin))
    },
    onRequestLogin: (credentials, callback) => {
      return dispatch(Actions.requestLogin(credentials, callback))
    }
  }
}

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
