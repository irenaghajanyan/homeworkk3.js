//1

 
<script>
  const a = function( one, two, three) {
    const operation =  ((one+two)/three) *(three+one)
    return operation
  } ;
  const c= a(3,5,8)
console.log(c)
 
</script>


//2

<script>
  const boo = function() {
    const hoo = "smth" ;
    const doo = "anything" ;
    return hoo +" " + doo ;

  }
  console.log(boo()) ;
</script>

//3

<script>
  const add = function(num1, num2) {
  
    const boo= num1 * num2 ;
  console.log(boo) ;
}
  const addition= add("5","6")
</script>

//4


const string = function(first,second,third) {
    if (first.lenght > second.lenght ) {
      if  (first.lenght > third.lenght) {
    return first } 
    }     
        else if (second.lenght > third.lenght) {
        return second ; 
        } 
        else { return third ;
             } 
    
  }
   console.log(string("hello", "hi", "goodbye"))
                
 //5

                <script>
  const number = function(Num1,Num2){
    if( Num1 > Num2) {
    return 1
    }
    if (Num1 === Num2){
    return 0
    }
    if (Num1 < Num2) {
    return -1
    }
    
  }
  console.log(number(2,5))
</script>

//6
<script>
const arg= function(arg1,arg2) {
arg3= arg1*arg2
return arg3
}
console.log(arg(4,5))
</script>
//7
<script>
const argument= function(arg6,arg7) {
    const div= arg6/arg7 ;
    return div ;
    }
    console.log(argument("8","2"))
    </script>

    //8

    const arg= function(arg1,arg2) {
        const multiply= arg1*arg2 ;
        return multiply ;
        }
    
        console.log(arg(4,5))
        
        
        const argument= function(arg6,arg7) {
            const divide= arg6/arg7 ;
            return divide ;
            }
            console.log(argument(8,2))
            
            
        
            const triangle= function(base,height) {
             const baa= arg(base,height)
             const area = argument(baa,2)
            return area
            }
        console.log(triangle(10,4))

    