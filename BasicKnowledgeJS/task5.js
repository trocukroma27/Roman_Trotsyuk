//Task 5
function guests_list(str){
    let list = str.toUpperCase().split(';').map(el => [el.split(':')[1], el.split(':')[0]]);
    list = list.sort().map(el =>  el.join(', '));
    
    let new_str = "(" + list.join(')(') + ")";

    return new_str;
}

console.log(guests_list("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
