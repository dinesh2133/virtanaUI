import Costbyacc from "./Costbyacc";
    
export default {
  title: 'Costbyacc',
  component: Costbyacc,
};

let dataofacc=[
  {id:1,name: 'Port Opration',y: 36},
  {id:2,name: 'Warehouse',y: 27},  
  {id:3,name: 'Shipping',y: 20},
  {id:4,name: 'CRM & HR',y: 17}]
  
  let color=['#3d80cb','#923dbd','#6aa41e' ,'#889acc']
const temp = args => ( <Costbyacc  style ="customWidth" {...args}/>)

export const costbyaccount = temp.bind({})

costbyaccount.args={
  data:dataofacc,
  color:color
}