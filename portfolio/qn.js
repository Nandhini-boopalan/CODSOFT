function print(){
    var a=5
    setTimeout(()=>{
console.log(this.a)
    },0)
}
print()