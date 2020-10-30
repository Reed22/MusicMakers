//WEIRD BUG----- IF YOU CHANGE '==' TO '===' IT DOESN'T WORK
//to fix: if dupliacte answer replace with non duplicate

import React,  {useState} from 'react'
import {Component} from 'react'
function     shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}//cited https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

class TriadQuiz extends Component {
    constructor() {
        super()
        this.state = {
            clicked : false,
            question : null,
            ansA : "",
            ansB: "",
            ansC: "",
            ansD: "",
            correctAnswer:"",
            chosenAnswer:"",
            seventh: false,
            randomized: false,
            gotCorrectAnswer: false,
            chords : {
                "C major": ["C","E","G"],
                "D minor": ["D","F","A"], 
                "E minor": ["E",'G','B'],
                "F major": ['F','A','C'] ,
                "G major": ["G",'B','D'],
                "A minor": ['A','C','E'],
                "B diminished" : ['B','D','F'],
                "C# major": ['C#','F','G#'],
                "D major" : ["D","C#","A"],
                "C minor" : ["C","Eb","G"],
                "C diminished" : ["C","Eb","Gb"],
            },
            seventhChords : {
                "C major": ["C","E","G","B"],
                "D minor": ["D","G","A","C"], 
                "E minor": ["E",'G','B','D'],
                "F major": ['F','A','C','E'] ,
                "G major": ['G','B','D','F'],
                "A minor": ['A','C','E','G'],
                "B diminished" : ['B','D','F','A']    }
        }
        this.handleChange = this.handleChange.bind(this)
        this.generateQuestion = this.generateQuestion.bind(this)
        this.fillQuestions = this.fillQuestions.bind(this)
        this.handleClick = this.handleClick.bind(this)


    }
    
    handleClick(event){
        const {value} = event.target
        /*type === "checkbox" ? this.setState({ [name]: checked }) : */
        //console.log("here",event.target)
        var toCheck = ""
        //create string to check correctness
        for(var i=0;i<this.state.correctAnswer.length;i++){
            toCheck += this.state.correctAnswer[i]
            if (i != (this.state.correctAnswer.length-1)){
                toCheck +=','
            }
        }
        //console.log("here2",toCheck)
        this.setState({ chosenAnswer: value },()=>{
            console.log(toCheck,this.state.chosenAnswer)   // })
            
            if (toCheck== this.state.chosenAnswer){
                this.setState({ gotCorrectAnswer:true })
            }
        })
    }
    handleChange(event) {
        console.log("evt    ",event.target.id,"    pld      ", this.state.played)
        
        if (event.target.id == 1){
            console.log(this.state.clicked,"\n")
            this.setState(prevState =>{
                return {
                    clicked: !(prevState.clicked)
                }
            })
        }
        else if (event.target.id == 3){
            this.setState(prevState =>{
                return {
                    randomized: !(prevState.randomized)
                }
            })
        }
        else if (event.target.id == 4){
            this.setState(prevState =>{
                return {
                    seventh: !(prevState.seventh)
                }
            })
        }
    }
    fillQuestions(chords){
        var i
        var answers = []
        for (i = 0; i < 3; i++){
            answers[i] =  chords[Object.keys(chords)[Math.floor(Math.random()*Object.keys(chords).length)]]
        }
        var questionA =  Object.keys( chords)[Math.floor(Math.random()*Object.keys( chords).length)]
        this.setState({question:questionA})
        answers.push( chords[questionA])
        if (this.state.randomized === true){
            for (i=0;i < answers.length; i++){
                shuffle(answers[i])
            }
        }
        this.setState({correctAnswer:answers[3]})
        answers = shuffle(answers)
        console.log(answers)


        return answers
    }
    generateQuestion(event){
        this.setState({gotCorrectAnswer:false})
        var answers = []    
        if(this.state.seventh == false){
            answers = this.fillQuestions(this.state.chords)
        }
        else {
            answers = this.fillQuestions(this.state.seventhChords)
        }
        this.setState(prevState =>{ 
            return{
                //question : questionA,
                ansA : answers[3],
                ansB : answers[0],
                ansC : answers[1],
                ansD : answers[2],
            }
        }, ()=> {
            console.log(this.state,"qstion") 
            })          
    }
    render(){

        return(
            <div>
                <button id="1" onClick={this.handleChange}>Triad Quiz</button>
                {
                    this.state.clicked  &&
                    <div>
                        <button id="2" onClick={this.generateQuestion}>Create Question</button>
                        <button id="3" onClick={this.handleChange}>Randomize Note Spelling</button>
                        <button id="4" onClick={this.handleChange}>Seventh Chords</button>
                        <div>Which of the following notes compose {this.state.question}</div>
                        <form>
                        <br />
                            <label>
                                <input 
                                    id="6"
                                    type="radio" 
                                    name="chosenAnswer"
                                    value= {this.state.ansA}
                                    checked={this.state.chosenAnswer == this.state.ansA}
                                    onChange={this.handleClick}
                                />  {this.state.ansA}
                            </label>
                            <br />
                            <label>
                                <input 
                                    id="7"
                                    type="radio" 
                                    name="chosenAnswer"
                                    value= {this.state.ansB}
                                    checked={this.state.chosenAnswer == this.state.ansB}
                                    onChange={this.handleClick}
                                />  {this.state.ansB}
                            </label>
                            <br />
                            <label>
                                <input 
                                    id="8"
                                    type="radio" 
                                    name="chosenAnswer"
                                    value= {this.state.ansC}
                                    checked={this.state.chosenAnswer == this.state.ansC}
                                    onChange={this.handleClick}
                                />  {this.state.ansC}
                            </label>
                            <br/>
                            <label>
                                <input 
                                    id="9"
                                    type="radio" 
                                    name="chosenAnswer"
                                    value= {this.state.ansD}
                                    checked={this.state.chosenAnswer == this.state.ansD}
                                    onChange={this.handleClick}
                                />  {this.state.ansD}
                            </label>
                            <br />
                        </form>
                        {this.state.gotCorrectAnswer &&
                        <header1 id = "5">CORRECT</header1>}
                    </div>
                }
            </div>
        )
    }
}
export default TriadQuiz