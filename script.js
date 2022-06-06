
// wait for the page to load with the onload method
window.onload = () =>{
    // get the input field
    let input = document.getElementById("input");

    // create a new instance of the SentimentIntensityAnalyzer (make sure to import the script in the HTML)
    const sent = new SentimentIntensityAnalyzer();

    // handle input events from the input field
    input.oninput = () => {

        // get the sentiment scores based on the input value. 
        const scores = sent.polarity_scores(input.value)
        //console.log(scores)

        let emoji;

        // The conditions can be changed as needed.
        if(scores.pos > 0.75){
            emoji = "😄";
        }
        else if(scores.pos > 0.5){
            emoji = "😀";
        }
        else if(scores.pos > 0.25 || (scores.neu >= 0.5 && scores.neg<=0.5)){
            emoji = "😐";
        }
        else if(scores.pos < 0.25  || scores.neg > 0.25){
            emoji = "😖";
        }

        // output the sentiment as an emoji
        document.getElementById("result").innerHTML = emoji;    

        // also show the scores: 
        document.getElementById("resultScores").innerHTML = `
        Sentiment Scores: 
        Positive: ${scores.pos},
        Negative: ${scores.neg},
        Neutral: ${scores.neu},
        Compound: ${scores.compound}
        `;

    }
}