
export function find(e){
filterArray = [];
let len = e.target.value.length;
 if(len > 0){
    for(let i = 0; i < todoItemsArray.length; i++){
      let arr = todoItemsArray[i].text.split('').slice(0,len).join('');
      if(arr.toLocaleLowerCase() == e.target.value.toLocaleLowerCase()){
        filterArray.push(todoItemsArray[i]);
      }
    }
    refresh(filterArray);
  } else {
    console.log(todoItemsArray);
    refresh(todoItemsArray);
    arraFill();
  }
}

export function sortByText(event){
  const direction = event.target.dataset.direction;
  if (direction == 'true'){
    filterArray.sort((a,b) => {
      if(a.text < b.text) { return -1; }
      if(a.text > b.text) { return 1; }
      return 0;
    })

   // sortByText.dataset.direction = 'false';
  } else if(direction == 'false'){
    filterArray.sort((a,b) => {
      if(a.text > b.text) { return -1; }
      if(a.text < b.text) { return 1; }
      return 0;
    })
//sortByText.dataset.direction = 'true';
  }
}