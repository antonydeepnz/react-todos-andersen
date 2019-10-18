const defaultData = [
  {key: 'id-t1rtchckl', text: 'Train my skills in JS', date: '2019-10-24', isComplete: false},
  {key: 'id-q23chchjz', text: 'Bake cake for birthday', date: '2019-10-01', isComplete: true},
  {key: 'id-q23chchj4', text: 'Party Party Party', date: '2019-09-01', isComplete: true},
  {key: 'id-q23c96hjz', text: 'Bring cake', date: '2019-10-02', isComplete: false},
  {key: 'id-91rjchchj', text: "Yeah it's vacation time", date: '2019-10-30', isComplete: false},
  {key: 'id-12rjzqchj', text: "Keep calm and get to work", date: '2019-10-02', isComplete: false},
  {key: 'id-qw64c3chj', text: "Eat birthday cake", date: '2019-09-02', isComplete: false}];

const data = JSON.parse(localStorage.getItem('react-todo'));  

const initialState = [...defaultData]; 
const initialState1 = [...data]; 

export default function todos(state = initialState1, action){
  switch (action.type){
    case "ADD_TODO": {
      return [
        ...state,
        action.payload
      ]
    }
  }
  return state
}