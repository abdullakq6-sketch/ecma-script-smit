var stData = {
    sname : "ali",
    snroll : 10,


    //  detail:function() {
    //     return `name is ${this.sname} and roll no is ${this.snroll}`//es5

    // }

    detail() {
        return  `name is ${this.sname} and roll no is ${this.snroll}`//es6
    }
}
console.log(stData.detail())
