// Libraries
import { connect } from 'react-redux'
// Action Creators
import * as DefaultActionCreator from '../../stores/actions/action-default'

const HomePage = (props: any) => {
  console.log({ props })
  return <div>Home Page</div>
}

const mapStateToProps = (state: any) => ({ defaultStore: state.defaultStore })

const mapDispatchToProps = (dispatch: any) => ({
  defaultAction: () => dispatch(DefaultActionCreator.defaultAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
