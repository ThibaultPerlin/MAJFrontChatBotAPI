const dialog=[
    {question:"testquest",answer:"testrep"}, 
    {question:"Salut", answer:"Salut"}, 
    {question:"ça va ?", answer:"Bah ouai ça va bien"},
    {question:"Ta les cramptés ?", answer:"Quoicoubeh !"}]
    

console.table(dialog)
document.getElementById("form-api").addEventListener("change", function(event){
    event.preventDefault();
    document.querySelector(".question").innerHTML=document.querySelector(".form-question").value
    document.querySelector(".answer").innerHTML="Coucou"
    dialog.forEach(element =>{
        if(element.question === document.querySelector(".form-question").value){
            document.querySelector(".answer").innerHTML=element.answer
            
        }
    })
})
const choice = document.querySelector("#choice");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

dialog.forEach((dialog)=>{
    choice.innerHTML += `<option value="${dialog.question}">`;
});

answer.addEventListener("input",(e) =>{
    question.textContent = e.target.Value;
    console.log(e.target.Value);
});

const search= (question)=>{
    dialog.forEach(dialog=>{
        if(dialog.question === question){
        answer.idnerHTML = `<p><b>${dialog.answer}</b></p>`
        }
    })
}