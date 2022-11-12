import React from 'react'
import {action ,actions} from '@storybook/addon-actions'

export default function Button(props) {
    let {title}=props
    function clicked(){

    }
  return (
    <div>
        <button onClick={action('clicked')} > {title}</button>
    </div>
  )
}
