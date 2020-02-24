//decalartion
const userBudgetaccount =document.querySelector('p #total');
const budgetLeft =document.querySelector('p #left');
const Submit = document.querySelector('.btn');
const Form = document.querySelector('#add-expense');
//class
class HTMLUI{
constructor(userBudget){
 this. userbudget = userBudget,
 this.budgetLeft =userBudget
}
displayBudget(userBudget){
userBudgetaccount.innerHTML=userBudget.userbudget;
budgetLeft.innerHTML=userBudget.budgetLeft;
}
displayErrorMessage(Message,alert){
    const p = document.createElement('p');
        p.textContent=Message;
        p.classList= ` ${alert} alert-danger`
        const downDiv = document.querySelector('.form-group');
        Form.insertBefore(p,downDiv);
        setTimeout(()=>{document.querySelector('.alert').remove() },3000)
}
}

class budgetCalculation{

leftBudeget(Expense,Amount,userBudget){
const newbudgetLeft =budgetLeft.textContent -= Amount;
const ul =document.createElement('div');
    ul.innerHTML=`<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      ${Expense}
      <span class="badge badge-primary badge-pill">${Amount}</span>
    </li>
  </ul>`
  const list = document.querySelector('.list-group');
  list.appendChild(ul);
console.log(userBudget);
  //0.1 and 0.4
  const warning = userBudget * 0.4;
  const danger = userBudget * 0.1
  console.log(newbudgetLeft,warning,danger);
  if(newbudgetLeft <= danger){
    document.querySelector('.restante').classList="restante alert alert-danger"
  }
  else if (newbudgetLeft <= warning){
    document.querySelector('.restante').classList="restante alert alert-warning"
  }
    }
}
//eventListener
eventListener()
let html,BudgetCalculation;
function eventListener(){
    
    document.addEventListener('DOMContentLoaded',function(){
       const userBudget =prompt('Enter your weekly budget');
       //console.log(WeeklyBudget);
       
       if(userBudget === null ||userBudget === ' ' || userBudget === ''  ){
           window.location.reload();
       }
       else{
             html = new HTMLUI(userBudget);
            html.displayBudget(html);
       }

    })
    Submit.addEventListener('click',function(e){
        const Expense=document.querySelector('#expense').value,
                Amount=document.querySelector('#amount').value;
        if(Expense === '' || Amount === ''){
            const alert_danger = document.querySelector('.alert-danger');
            if(!alert_danger){
                html.displayErrorMessage('All Field are mandtory','alert');
            }    
        }
        else{
               BudgetCalculation = new budgetCalculation();
               BudgetCalculation.leftBudeget(Expense,Amount,html.userbudget)
        }
    })
}
//function