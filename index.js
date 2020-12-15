export function updateCount(){
    const countSpan = document.getElementById('count');
    let count;

    let dynamoCount = getCountFromDynamo();

    countSpan.innerHTML = count = dynamoCount += 1;
}

export function getCountFromDynamo(event){

}