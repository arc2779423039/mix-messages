const message = {
     greetings: ['Hi','Hello','Hola','Hallo','Bonjour'],
     names: ['Cynthia','Matthew','Susan','Ashley'],
     questions: ['How are you?','How was your day?','What is your plan for today?', 'Is everything ok ?']
}
const {greetings,names, questions} = message;

const randGreeting = greetings[Math.floor(Math.random()* greetings.length)];
const randName = names[Math.floor(Math.random()* names.length)];
const randQuestion = questions[Math.floor(Math.random()* questions.length)];

console.log(`${randGreeting} ${randName} ${randQuestion}`);



