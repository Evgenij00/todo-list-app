
import './Row.css'

export const Row = ({left, right}) => {

  return (
    <div className='roww app__roww'>
      <div className='roww__left'>{left}</div>
      <div className='roww__right'>{right}</div>
    </div>
  )
}