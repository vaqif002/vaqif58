const a = [4,3,6,3,4,3]

function count_duplicate(a){
 let counts = {}

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
    for (let rop in counts){
        if (counts[rop] >= 2){
            console.log(rop + " reqem: " + counts[rop] + " defe.")
        }
    }
  
}
count_duplicate(a)