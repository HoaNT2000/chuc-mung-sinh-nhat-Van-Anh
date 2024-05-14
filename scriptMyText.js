var app = document.getElementById('mytext')

var Typewriter = new Typewriter(app, {
    loop: false,
    delay: 90,
})

Typewriter
.pauseFor(1000)
.typeString('Hi <strong>Van Anh</strong>, do you remember what special day it is today ???')
.pauseFor(300)
.deleteChars(60)
.typeString('<span style="color: pink">Today</span> <span style="color: lightblue">is</span> <span style="color: lightgreen">a</span> <span style="color: yellow">special</span> <span style="color: lightcoral">day</span> <span style="color: peachpuff">for</span> <span style="color: lightseagreen">someone</span> <span style="color: lavender">special</span>, <span style="color: lightpink">a</span> <span style="color: lightsalmon">little</span> <span style="color: lightgoldenrodyellow">girl</span> <span style="color: palevioletred">with</span> <span style="color: plum">the</span> <span style="color: powderblue">brightest</span> <span style="color: thistle">and</span> <span style="color: lightcyan">most</span> <span style="color: lightgreen">beautiful</span> <span style="color: lightskyblue">smile</span> <span style="color: lightcoral">in</span> <span style="color: palegoldenrod">my</span> <span style="color: peachpuff">heart</span>. <span style="color: pink">I</span> <span style="color: lightblue">hope</span> <span style="color: lightgreen">that</span> <span style="color: yellow">you</span> <span style="color: lightcoral">will</span> <span style="color: lavender">always</span> <span style="color: lightpink">be</span> <span style="color: lightsalmon">happy</span> <span style="color: lightgoldenrodyellow">and</span> <span style="color: palevioletred">cheerful</span>, <span style="color: plum">always</span> <span style="color: powderblue">smiling</span> <span style="color: thistle">brightly</span>. <span style="color: lightcyan">Happy</span> <span style="color: lightgreen">birthday</span> <span style="color: lightskyblue">to</span> <span style="color: lightcoral">you</span>.')
.pauseFor(1000)
.start()

//.typeString('Today is a special day for someone special, a little girl with the brightest and most beautiful smile in my heart. I hope that you will always be happy and cheerful, always smiling brightly. Happy birthday to <strong>Van Anh</strong> – the gentlest and sweetest girl, I have ever met! <span style="color: red;">&#10084; &#10084; &#10084;</span> <strong>Mon amour</strong></p>')
