let name="Mohan";
function CheckEvenOrOdd(num){
if(num%2 === 0){
  return <div>Even</div>
}
else{
  return <div>Odd</div>
}
}
function CheckAlphabet(alphabet) {
  switch(alphabet) {
   case 'a':
    case 'e':
      case 'i':
        case 'o':
          case'u':
         return <div>Vowel</div>
    default:
        return <div>Consonant</div>
  }
}
let num=4;
const users=[
  {name:'Mohan', age:25},
  {name:'Ram', age:24},
  {name:'Rohit', age:23}
]
function Jsx() {
  return (
    <div>
      <h2>Hello {name}</h2>
      <h3>If Else Statement</h3>
      <div>
        {
          CheckEvenOrOdd(5)
        }
        <div>
        {
          CheckAlphabet('a')
          }
         </div>
        {
          num%2===0 ? <div>Even Number</div>
           : <div>Odd Number</div>
        }
        <h3>If Statement</h3>
        {
          num%2===0 &&<div>Even Number</div>
        }
      </div>
      <h3>Alphabet Checking</h3>
      <h3>Loop</h3>
      {
        users.map((item, index)=>{
          return<div key={index} >
          {item.name}  {item.age}</div>
        })
      }
    </div>
  );
}

export default Jsx;

export function Greet() {
    return <h1>Hello World</h1>
}
