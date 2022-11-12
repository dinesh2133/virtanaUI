import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
}
let title="Click me"
 const temp = args => (<Button  {...args}/>)
export const Buttons = temp.bind({})

Buttons.args={
title:title
}

// const temp2 = args => (        <button onClick={...actions('clicked','onMouseOver')}  {...args}> hii there</button>)
// export const button2 = temp2.bind({})
// button2.args={} 


//It is use for display data recived by the event handlers 