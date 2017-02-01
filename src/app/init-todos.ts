/**
 * Created by portiz on 1/31/2017.
 */
export class Init {
  load(){
    if(localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined) {
      console.log("No Todos Found...Creating...");
      var todos = [
        {
          text: 'Pick up kids'
        },
        {
          text: 'Get groceries'
        },
        {
          text: 'Rob a bank'
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
    }else {
      console.log('Found Todos...');
    }
  }
}
