import React from 'react'

import './StatusPanel.css'

export const StatusPanel = ({doneCount, inProcessCount}) => {

  return (
    <div className='status-panel app__status-panel'>
      Выполнено <span className='status-panel__done'>{doneCount}</span> / В процессе <span className='status-panel__inprocess'>{inProcessCount}</span>
    </div>
  )
}