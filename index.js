//const flavours = ['chocolate','vanilla','strawerry','mint','coffee','caramel']
//console.table(flavours)
//const userInput= prompt('Enter the flavor you would like to order.', 'chocolate,vanilla,strawerry,mint,coffee,caramel')


//if (order == 'chocolate'|| 'vanilla'|| 'strawberry' || 'mint'||'coffee'||'caramel' ){
  //  console.log('Order has been submitted')}
  //  else if (order!= 'chocolate'||order!= 'vanilla'||order!= 'strawberry' || order!== 'mint'||order !=='coffee'||order !=='caramel' )
   // {
  //  console.log ('Flavour is not avalaible')}  }
//placeOrder()

const userInput= prompt('Enter the flavor you would like to order.', 'chocolate,vanilla,strawerry,mint,coffee,caramel')

//const userInput= prompt('Enter the flavor you would like to order.', 'chocolate,vanilla,strawerry,mint,coffee,caramel')


function placeOrder(){
    const  order={};
    if (userInput==='chocolate' || userInput=== 'vanilla'|| userInput== 'strawbery' || userInput=== 'mint'||userInput=== 'coffee' || userInput=== 'caramel' ){
        console.log( userInput + ' has been submitted')}
     else  {
       // {console.log('Item Unavaliable')}
       //console.log('${userInput} has been submitted')}
       console.log( userInput ,' is not availible ')}
    }



const stringArray=userInput.split(',')
const count={} ;
for(let i=0;i<stringArray.length;i++){
    let flavor=stringArray[i];
    if(flavor in count){
        count[flavor]++;
    } else {count[flavor]=1}
}
placeOrder()

console.table(count)




