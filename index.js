const cats = ["Milo","Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
  const appendCat = [...cats, "Broom"];
return appendCat
}

function prependCat(){
    const prependcat = ["Arnold", ...cats];
    return prependcat
}

function removeLastCat(){
    const remove = cats.slice(0,2)
    return remove
}

function removeFirstCat(){
    const remove = cats.slice(1,3)
    return remove
}