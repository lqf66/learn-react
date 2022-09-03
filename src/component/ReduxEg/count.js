import { connect } from 'react-redux'

function Count(props) {
  console.log('props: ', props)
  return <div>

  </div>
}

const withConnect = connect(state => {
  return {
    count: state.count
  }
})

export default withConnect(Count)
